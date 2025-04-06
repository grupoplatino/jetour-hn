import whatsAppLogo from '@root/public/img/Icon Whatsapp.png';
import Image from 'next/image';
const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 w-16">
      <Image src={whatsAppLogo} alt="WhatsApp" width={100} height={100} className="cursor-pointer" />
    </div>
  );
};

export default WhatsAppButton;
