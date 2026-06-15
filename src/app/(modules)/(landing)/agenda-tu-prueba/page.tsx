import type { Metadata } from "next";
import TestDriveFormClient from "../components/test-drive-form-client";
import WhatsAppButton from "../components/whats-app-button";

export const metadata: Metadata = {
  title: "Agenda tu Test Drive | Jetour Honduras",
  description:
    "Agenda tu prueba de manejo Jetour en San Pedro Sula o Tegucigalpa. Elige tu modelo, fecha y hora; un asesor te confirma por WhatsApp.",
};

export default async function AgendaTestDrivePage({
  searchParams,
}: {
  searchParams: Promise<{ modelo?: string }>;
}) {
  const { modelo } = await searchParams;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="px-4 pt-[120px] pb-16 sm:pt-[140px]">
        <TestDriveFormClient initialModel={modelo} />
      </section>
      <WhatsAppButton />
    </div>
  );
}
