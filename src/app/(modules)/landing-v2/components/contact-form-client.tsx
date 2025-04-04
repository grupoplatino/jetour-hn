/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { carThemes, CarThemeKey } from '../data/theme-definitions';

// Esquema de validación
const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es requerido' }),
  lastName: z.string().min(2, { message: 'El apellido es requerido' }),
  email: z.string().email({ message: 'Ingrese un correo electrónico válido' }),
  phone: z.string().min(8, { message: 'Ingrese un número de teléfono válido' }),
  message: z.string().optional(),
  carModel: z.string().min(1, { message: 'Seleccione un modelo de vehículo' })
});

type FormValues = z.infer<typeof formSchema>;

const carModels = [
  { value: 'T2', label: 'T2' },
  { value: 'X70 PLUS', label: 'X70 PLUS' },
  { value: 'DASHING', label: 'DASHING' },
  { value: 'X50', label: 'X50' }
];

interface CotizacionFormProps {
  themeKey: CarThemeKey;
}

export default function CotizacionForm({ themeKey }: CotizacionFormProps) {
  const theme = carThemes[themeKey];
  const primaryColor = theme.colors.primary;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      carModel: ''
    }
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);

    try {
      // Aquí iría la lógica para enviar el formulario a un backend
      console.log('Formulario enviado:', data);

      // Simular envío exitoso
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      reset();

      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({
    label,
    name,
    type = 'text',
    registerOptions = {},
    error
  }: {
    label: string;
    name: keyof FormValues;
    type?: string;
    registerOptions?: any;
    error?: string;
  }) => (
    <div className="flex flex-col gap-1 mb-4">
      <label className="font-bold text-sm md:text-base" htmlFor={name}>
        {label}:
      </label>
      <input
        className={`bg-white bg-opacity-80 px-3 py-2 text-black rounded ${error ? 'border-2 border-red-500' : 'border border-gray-300'}`}
        id={name}
        type={type}
        {...register(name, registerOptions)}
      />
      {/* Reservar espacio para mensaje de error */}
      <div className="min-h-6">{error && <p className="text-xs text-red-300">{error}</p>}</div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <InputField label="Nombre" name="name" error={errors.name?.message} />
        <InputField label="Apellido" name="lastName" error={errors.lastName?.message} />
        <InputField label="Correo electrónico" name="email" type="email" error={errors.email?.message} />
        <InputField label="No. de Teléfono" name="phone" type="tel" error={errors.phone?.message} />

        <div className="flex flex-col gap-1 mb-4 col-span-1 md:col-span-2">
          <label className="font-bold text-sm md:text-base" htmlFor="message">
            Mensaje:
          </label>
          <textarea
            className={`bg-white bg-opacity-80 px-3 py-2 text-black rounded resize-none ${
              errors.message ? 'border-2 border-red-500' : 'border border-gray-300'
            }`}
            id="message"
            rows={3}
            {...register('message')}
          />
          <div className="min-h-6">{errors.message && <p className="text-xs text-red-300">{errors.message.message}</p>}</div>
        </div>

        <div className="flex flex-col gap-1 mb-4 col-span-1 md:col-span-2">
          <label className="font-bold text-sm md:text-base" htmlFor="carModel">
            Modelo de vehículo:
          </label>
          <select
            className={`bg-white bg-opacity-80 px-3 py-2 text-black rounded ${errors.carModel ? 'border-2 border-red-500' : 'border border-gray-300'}`}
            id="carModel"
            {...register('carModel')}
          >
            <option value="">Seleccione un modelo</option>
            {carModels.map((model) => (
              <option key={model.value} value={model.value}>
                {model.label}
              </option>
            ))}
          </select>
          <div className="min-h-6">{errors.carModel && <p className="text-xs text-red-300">{errors.carModel.message}</p>}</div>
        </div>
      </div>

      {/* Contenedor con altura fija para mensaje de éxito */}
      <div className="h-12 mb-4">
        {submitSuccess && (
          <div className="bg-green-600 text-white px-4 py-3 rounded">¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</div>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="uppercase px-6 py-3 rounded-lg font-medium transition-all hover:brightness-110 disabled:opacity-50 w-full md:w-auto md:self-end text-white"
        style={{ backgroundColor: primaryColor }}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}
