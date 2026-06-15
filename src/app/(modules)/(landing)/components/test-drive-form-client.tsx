"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { z } from "zod";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Send,
} from "lucide-react";
import { getAllVehicles } from "../data/vehicles-constant";

// WhatsApp al que llegan las solicitudes de test drive: +504 3362-0335
const TEST_DRIVE_WHATSAPP = "50433620335";

/* ──────────────────────────────────────────────────────────
   Datos de modelos (imágenes reutilizadas del repo + specs)
─────────────────────────────────────────────────────────── */
const MODEL_META: Record<string, { type: string; chips: string[] }> = {
  t2: { type: "Todoterreno · Aventura", chips: ["2.0 Turbo", "250 HP", "Tracción XWD"] },
  dashing: { type: "SUV Coupé · Dinámica", chips: ["1.6 Turbo", "197 HP", 'Pantalla 15.6"'] },
  x70plus: { type: "SUV Familiar · 7 plazas", chips: ["7 pasajeros", "1.6 Turbo", "Visión 360°"] },
  x50: { type: "SUV Urbana · Compacta", chips: ["1.5 Turbo", 'Pantalla dual 20.5"', "Visión 360°"] },
};

const VEHICLES = getAllVehicles().map((v) => ({
  id: v.id,
  modelName: v.modelName,
  image: typeof v.carSelecctorImage === "string" ? v.carSelecctorImage : "",
  type: MODEL_META[v.id]?.type ?? v.tagline,
  chips: MODEL_META[v.id]?.chips ?? [],
}));

type CityKey = "sps" | "tgc";

const CITY_LABEL: Record<CityKey, string> = {
  sps: "San Pedro Sula",
  tgc: "Tegucigalpa",
};

/* Esquema de validación del envío final */
const submitSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().min(8),
  ciudad: z.enum(["sps", "tgc"]),
  modelo: z.string().min(1),
  fecha: z.string().min(1),
  hora: z.string().min(1),
  fuente: z.string().optional(),
  comentario: z.string().optional(),
});

/* ──────────────────────────────────────────────────────────
   Helpers de fecha / horario
─────────────────────────────────────────────────────────── */
const MONTHS = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];
const DAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

function formatDate(value: string): string {
  if (!value) return "—";
  const d = new Date(value + "T12:00:00");
  return `${DAYS[d.getDay()]}. ${d.getDate()} de ${MONTHS[d.getMonth()]}`;
}

function slotsForDate(value: string): string[] {
  if (!value) return [];
  const dow = new Date(value + "T12:00:00").getDay();
  if (dow === 0) return []; // domingo: cerrado
  if (dow === 6) return ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"]; // sábado
  return [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  ];
}

interface Props {
  initialModel?: string;
}

export default function TestDriveFormClient({ initialModel }: Props) {
  /* Preselección de modelo desde ?modelo= (botón de la landing) */
  const preselected = useMemo(() => {
    if (!initialModel) return "";
    const needle = initialModel.toLowerCase().replace(/\s+/g, "");
    const found = VEHICLES.find(
      (v) =>
        v.id.toLowerCase() === needle ||
        v.modelName.toLowerCase().replace(/\s+/g, "") === needle
    );
    return found?.id ?? "";
  }, [initialModel]);

  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1); // mínimo 1 día de anticipación
    return d.toISOString().split("T")[0];
  }, []);

  const [step, setStep] = useState(1);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState<CityKey>("sps");
  const [modelo, setModelo] = useState(preselected);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [fuente, setFuente] = useState("");
  const [comentario, setComentario] = useState("");

  const [sundayWarn, setSundayWarn] = useState(false);
  const [error, setError] = useState("");
  const [waUrl, setWaUrl] = useState("");
  const [done, setDone] = useState(false);

  const slots = slotsForDate(fecha);
  const selectedVehicle = VEHICLES.find((v) => v.id === modelo);

  /* ── Cambios de campo con efectos secundarios ── */
  const onCityChange = (c: CityKey) => {
    setCiudad(c);
    setHora("");
  };

  const onDateChange = (value: string) => {
    setHora("");
    setSundayWarn(false);
    if (value) {
      const dow = new Date(value + "T12:00:00").getDay();
      if (dow === 0) {
        setSundayWarn(true);
        setFecha("");
        return;
      }
    }
    setFecha(value);
  };

  /* ── Navegación entre pasos ── */
  const goTo = (n: number) => {
    if (n === 2) {
      if (!nombre.trim() || !email.trim() || !telefono.trim()) {
        setError("Completa todos los campos para continuar.");
        return;
      }
    }
    if (n === 3) {
      if (!modelo) return setError("Por favor selecciona un modelo.");
      if (!fecha) return setError("Por favor elige una fecha.");
      if (ciudad === "sps" && !hora) return setError("Por favor selecciona una hora.");
    }
    setError("");
    setStep(n);
  };

  /* ── Envío: arma el mensaje con todos los datos y abre el WhatsApp de la marca ── */
  const handleSubmit = () => {
    const modeloNombre = selectedVehicle ? selectedVehicle.modelName : modelo;

    const valid = submitSchema.safeParse({
      nombre,
      email,
      telefono,
      ciudad,
      modelo,
      fecha: formatDate(fecha),
      hora: ciudad === "tgc" ? "Por coordinar" : hora,
      fuente,
      comentario,
    });
    if (!valid.success) {
      setError("Revisa los datos del formulario.");
      return;
    }

    const lineas = [
      "*Nueva solicitud de Test Drive* 🚗",
      "",
      `*Nombre:* ${nombre}`,
      `*Correo:* ${email}`,
      `*WhatsApp:* ${telefono}`,
      `*Ciudad:* ${CITY_LABEL[ciudad]}`,
      `*Modelo:* Jetour ${modeloNombre}`,
      `*Fecha:* ${formatDate(fecha)}`,
      `*Hora:* ${ciudad === "tgc" ? "Por coordinar con asesor" : hora}`,
    ];
    if (fuente) lineas.push(`*¿Cómo se enteró?:* ${fuente}`);
    if (comentario) lineas.push(`*Comentario:* ${comentario}`);

    const url = `https://wa.me/${TEST_DRIVE_WHATSAPP}?text=${encodeURIComponent(
      lineas.join("\n")
    )}`;
    setWaUrl(url);
    setError("");
    window.open(url, "_blank");
    setDone(true);
  };

  /* ── Filas del resumen ── */
  const summaryRows: [string, string][] = [
    ["Nombre", nombre || "—"],
    ["Correo", email || "—"],
    ["WhatsApp", telefono || "—"],
    ["Ciudad", CITY_LABEL[ciudad]],
    ["Modelo", selectedVehicle ? `Jetour ${selectedVehicle.modelName}` : "—"],
    ["Fecha", formatDate(fecha)],
    ["Hora", ciudad === "tgc" ? "Por coordinar con asesor" : hora || "—"],
  ];

  const labelCls = "block text-xs font-medium tracking-wide text-neutral-400 mb-2";
  const inputCls =
    "w-full bg-neutral-950 border border-neutral-800 rounded-lg text-white px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-white placeholder:text-neutral-700";
  const btnPrimary =
    "w-full flex items-center justify-center gap-2 bg-white text-black rounded-[10px] py-3 text-sm font-semibold tracking-wide mt-2 transition-colors hover:bg-neutral-200";
  const btnSecondary =
    "w-full flex items-center justify-center gap-1.5 bg-transparent text-neutral-500 border border-neutral-800 rounded-[10px] py-2.5 text-[13px] mt-2.5 transition-colors hover:border-neutral-600 hover:text-neutral-400";

  return (
    <div className="w-full max-w-[470px] mx-auto">
      {/* Encabezado */}
      <div className="text-center mb-7">
        <Image
          src="/landing/jetour_logo_white_drive_your_future.webp"
          alt="Jetour — Drive Your Future"
          width={320}
          height={98}
          priority
          unoptimized
          className="mx-auto mb-3 h-auto w-[160px]"
        />
        <p className="text-[13px] text-neutral-400 max-w-[300px] mx-auto leading-snug">
          Agenda tu prueba de manejo en 3 simples pasos
        </p>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7 sm:p-8">
        {/* Progreso */}
        <div className="flex gap-1.5 mb-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`flex-1 h-0.5 rounded-full transition-colors ${
                (done ? 3 : step) >= i ? "bg-white" : "bg-neutral-800"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between text-[11px] mb-7">
          {["Tus datos", "Tu cita", "Confirmar"].map((t, i) => (
            <span
              key={t}
              className={
                (done ? 4 : step) === i + 1
                  ? "text-neutral-300 font-medium"
                  : "text-neutral-600"
              }
            >
              {t}
            </span>
          ))}
        </div>

        {/* ─────────── CONFIRMACIÓN ─────────── */}
        {done ? (
          <div className="text-center py-2">
            <div className="w-14 h-14 rounded-full bg-neutral-800 border border-white/40 flex items-center justify-center mx-auto mb-4">
              <Check className="text-white" size={26} />
            </div>
            <h2 className="text-xl font-semibold text-white mb-1.5">
              ¡Solicitud lista!
            </h2>
            <p className="text-sm text-neutral-500 mb-5 leading-relaxed">
              Te abrimos WhatsApp con todos tus datos. Envía el mensaje y un
              asesor confirmará tu test drive.
            </p>
            {waUrl && (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnPrimary} mb-5 no-underline`}
              >
                Abrir WhatsApp <Send size={16} />
              </a>
            )}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-left">
              <p className="text-[10px] font-medium tracking-widest text-neutral-600 mb-2.5">
                TU CITA
              </p>
              {summaryRows.map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between items-center py-1.5 border-b border-neutral-900 last:border-0 text-[13px]"
                >
                  <span className="text-neutral-600">{k}</span>
                  <span className="text-white font-medium text-right">{v}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-600 mt-4 leading-relaxed">
              ¿No se abrió WhatsApp? Toca el botón de arriba. Un asesor
              confirmará tu cita.
            </p>
          </div>
        ) : (
          <>
            {/* ─────────── PASO 1 ─────────── */}
            {step === 1 && (
              <div>
                <h2 className="text-base font-semibold text-white mb-1">
                  Datos de contacto
                </h2>
                <p className="text-[13px] text-neutral-600 mb-6">
                  Para que un asesor pueda contactarte
                </p>

                <div className="mb-4">
                  <label className={labelCls}>
                    Nombre completo <span className="text-white">*</span>
                  </label>
                  <input
                    className={inputCls}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. María García"
                    autoComplete="name"
                  />
                </div>
                <div className="mb-4">
                  <label className={labelCls}>
                    Correo electrónico <span className="text-white">*</span>
                  </label>
                  <input
                    className={inputCls}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo@ejemplo.com"
                    autoComplete="email"
                  />
                </div>
                <div className="mb-5">
                  <label className={labelCls}>
                    Teléfono / WhatsApp <span className="text-white">*</span>
                  </label>
                  <input
                    className={inputCls}
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="+504 XXXX-XXXX"
                    autoComplete="tel"
                  />
                </div>

                {error && <ErrorMsg msg={error} />}

                <button onClick={() => goTo(2)} className={btnPrimary}>
                  Siguiente <ArrowRight size={16} />
                </button>
              </div>
            )}

            {/* ─────────── PASO 2 ─────────── */}
            {step === 2 && (
              <div>
                <h2 className="text-base font-semibold text-white mb-1">
                  Tu prueba de manejo
                </h2>
                <p className="text-[13px] text-neutral-600 mb-6">
                  Ciudad, modelo, fecha y hora preferida
                </p>

                {/* Ciudad */}
                <label className={labelCls}>
                  <MapPin className="inline-block -mt-0.5 mr-1" size={13} />
                  Ciudad de la prueba <span className="text-white">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {(Object.keys(CITY_LABEL) as CityKey[]).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => onCityChange(c)}
                      className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-[13px] transition-colors ${
                        ciudad === c
                          ? "border-white bg-white/[0.06] text-white"
                          : "border-neutral-800 text-neutral-400 hover:border-neutral-600"
                      }`}
                    >
                      <span
                        className={`w-3 h-3 rounded-full border-[1.5px] ${
                          ciudad === c
                            ? "bg-white border-white"
                            : "border-neutral-600"
                        }`}
                      />
                      {CITY_LABEL[c]}
                    </button>
                  ))}
                </div>

                {/* Modelo */}
                <label className={labelCls}>
                  Modelo a probar <span className="text-white">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  {VEHICLES.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setModelo(v.id)}
                      className={`rounded-xl border px-3 py-3 text-center transition-colors ${
                        modelo === v.id
                          ? "border-white bg-white/[0.06]"
                          : "border-neutral-800 hover:border-neutral-600"
                      }`}
                    >
                      <div className="text-sm font-bold text-white tracking-wide">
                        {v.modelName}
                      </div>
                      <div className="text-[11px] text-neutral-600 mt-0.5">
                        {v.type.split("·")[0].trim()}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Preview de imagen */}
                {selectedVehicle && (
                  <div className="rounded-xl border border-neutral-800 overflow-hidden mb-5">
                    <div
                      className="relative h-[190px] flex items-center justify-center"
                      style={{
                        background:
                          "radial-gradient(ellipse 72% 82% at 50% 44%, #444 0%, #262626 55%, #161616 100%)",
                      }}
                    >
                      {selectedVehicle.image && (
                        <Image
                          unoptimized
                          src={selectedVehicle.image}
                          alt={`Jetour ${selectedVehicle.modelName}`}
                          fill
                          className="object-contain p-3"
                          sizes="470px"
                        />
                      )}
                    </div>
                    <div className="p-4 border-t border-neutral-900">
                      <div className="flex items-baseline justify-between gap-2 mb-2.5">
                        <span className="text-[17px] font-bold text-white tracking-wide">
                          Jetour {selectedVehicle.modelName}
                        </span>
                        <span className="text-[11px] text-neutral-500 text-right">
                          {selectedVehicle.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedVehicle.chips.map((chip) => (
                          <span
                            key={chip}
                            className="inline-block px-2.5 py-1 border border-neutral-700 rounded-full text-[11px] text-neutral-300"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Fecha */}
                <label className={labelCls}>
                  <Calendar className="inline-block -mt-0.5 mr-1" size={13} />
                  Fecha preferida <span className="text-white">*</span>
                </label>
                <input
                  type="date"
                  min={minDate}
                  value={fecha}
                  onChange={(e) => onDateChange(e.target.value)}
                  className={`${inputCls} mb-1 [color-scheme:dark]`}
                />
                {sundayWarn && (
                  <p className="text-white text-xs mb-3">
                    ⚠ Los domingos no hay atención. Por favor elige otro día.
                  </p>
                )}

                {/* Hora */}
                <div className="mt-4 mb-5">
                  <label className={labelCls}>
                    <Clock className="inline-block -mt-0.5 mr-1" size={13} />
                    Hora preferida{" "}
                    {ciudad === "sps" && <span className="text-white">*</span>}
                  </label>
                  {ciudad === "tgc" ? (
                    <div className="bg-neutral-900 border border-neutral-700 rounded-lg px-3.5 py-3 text-xs text-neutral-300 leading-relaxed">
                      Un asesor se comunicará contigo para confirmar la hora
                      disponible en Tegucigalpa.
                    </div>
                  ) : !fecha ? (
                    <span className="text-xs text-neutral-700">
                      Selecciona una fecha primero
                    </span>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {slots.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setHora(s)}
                          className={`px-4 py-1.5 rounded-full border text-xs transition-colors ${
                            hora === s
                              ? "border-white bg-white/[0.06] text-white"
                              : "border-neutral-800 text-neutral-400 hover:border-neutral-600"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {error && <ErrorMsg msg={error} />}

                <button onClick={() => goTo(3)} className={btnPrimary}>
                  Siguiente <ArrowRight size={16} />
                </button>
                <button onClick={() => goTo(1)} className={btnSecondary}>
                  <ArrowLeft size={15} /> Atrás
                </button>
              </div>
            )}

            {/* ─────────── PASO 3 ─────────── */}
            {step === 3 && (
              <div>
                <h2 className="text-base font-semibold text-white mb-1">
                  Casi listo
                </h2>
                <p className="text-[13px] text-neutral-600 mb-6">
                  Dos preguntas opcionales para preparar tu visita
                </p>

                <div className="mb-4">
                  <label className={labelCls}>¿Cómo te enteraste de Jetour?</label>
                  <select
                    className={`${inputCls} [color-scheme:dark]`}
                    value={fuente}
                    onChange={(e) => setFuente(e.target.value)}
                  >
                    <option value="">Seleccionar (opcional)</option>
                    <option>Instagram</option>
                    <option>Facebook</option>
                    <option>Recomendación de amigo / familiar</option>
                    <option>Pasé por la agencia</option>
                    <option>Google</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className={labelCls}>Comentario adicional (opcional)</label>
                  <input
                    className={inputCls}
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    placeholder="Ej. Vengo con mi familia…"
                  />
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 mb-5">
                  <p className="text-[10px] font-medium tracking-widest text-neutral-600 mb-2.5">
                    RESUMEN DE TU TEST DRIVE
                  </p>
                  {summaryRows.map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between items-center py-1.5 border-b border-neutral-900 last:border-0 text-[13px]"
                    >
                      <span className="text-neutral-600">{k}</span>
                      <span className="text-white font-medium text-right">{v}</span>
                    </div>
                  ))}
                </div>

                {error && <ErrorMsg msg={error} />}

                <button onClick={handleSubmit} className={btnPrimary}>
                  Enviar por WhatsApp <Send size={16} />
                </button>
                <button onClick={() => goTo(2)} className={btnSecondary}>
                  <ArrowLeft size={15} /> Atrás
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <p className="text-center text-[11px] text-neutral-700 mt-6 tracking-wider">
        © 2025 JETOUR HONDURAS
      </p>
    </div>
  );
}

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <div className="text-white text-xs mb-3 px-3 py-2 border border-neutral-700 rounded-lg bg-neutral-950">
      ! {msg}
    </div>
  );
}
