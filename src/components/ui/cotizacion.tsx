import { ReactNode } from "react";
import { usePrimaryColor } from "./color-context";
import clsx from "clsx";

const Input = ({
  customClass,
  children,
}: {
  customClass?: string;
  children: ReactNode;
}) => {
  return (
    <div className={clsx(`flex flex-col gap-2 ${customClass}`)}>{children}</div>
  );
};

export default function ContactForm() {
  const primaryColor = usePrimaryColor();

  return (
    <section
      className="relative h-screen w-full bg-cover bg-no-repeat  text-white"
      style={{
        backgroundImage: `url("/img/Fondo Cotización.jpg")`,
      }}
    >
      <div className="absolute flex flex-col gap-y-6 lg:right-12 md:right-44 right-[1rem] top-32 w-[22rem]">
        <h1 className="text-5xl font-bold ">SOLICITA TU COTIZACIÓN</h1>
        <div className=" grid grid-cols-2 gap-2">
          <Input>
            <label className="font-bold" htmlFor="name">
              Nombre:
            </label>
            <input
              className="bg-white text-black px-2 py-1 opacity-50"
              id="name"
              name="name"
              type="text"
            />
          </Input>
          <Input>
            <label className="font-bold" htmlFor="lName">
              Apellido:
            </label>
            <input
              className="bg-white text-black px-2 py-1 opacity-50"
              id="lName"
              name="lName"
              type="text"
            />
          </Input>
          <Input>
            <label className="font-bold" htmlFor="email">
              Correo electrónico:
            </label>
            <input
              className="bg-white text-black px-2 py-1 opacity-50"
              id="email"
              name="email"
              type="email"
            />
          </Input>
          <Input>
            <label className="font-bold" htmlFor="phone">
              No. de Teléfono:{" "}
            </label>
            <input
              className="bg-white text-black px-2 py-1 opacity-50"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{4}-[0-9]{4}"
            />
          </Input>
          <Input customClass="col-span-2">
            <label className="font-bold" htmlFor="message">
              Mensaje:
            </label>
            <textarea
              className="bg-white text-black px-2 py-1 opacity-50"
              name="message"
              id="message"
            />
          </Input>
          <Input customClass="col-span-2">
            <label className="font-bold" htmlFor="carModel">
              Model de vehículo:
            </label>
            <select
              className="bg-white text-black px-2 py-1 opacity-50"
              name="carModel"
              id="carModel"
            >
              <option value="T2">T2</option>
              <option value="X70 PLUS">X70 PLUS</option>
              <option value="DASHING">DASHING</option>
              <option value="X50">X50</option>
            </select>
          </Input>
        </div>
        <button
          type="submit"
          className={`text-white uppercase px-4 py-2 rounded-lg`}
          style={{ backgroundColor: primaryColor }}
        >
          Enviar
        </button>
      </div>
    </section>
  );
}
