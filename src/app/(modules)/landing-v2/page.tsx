/* eslint-disable @typescript-eslint/no-unused-vars */

import dynamic from 'next/dynamic';
import WhatsAppButton from './components/whats-app-button';
import TestDriveButton from './components/test-drive-button';


const ContactForm = dynamic(() => import('./components/contact-form'));

export default function LandingPage() {
  const carTheme = 'turquoise'; // Cambia esto según el vehículo seleccionado


  return (
    <>
      <WhatsAppButton />
      <TestDriveButton carTheme={carTheme} />
  
      <ContactForm themeKey={carTheme} />
    </>
  );
}
