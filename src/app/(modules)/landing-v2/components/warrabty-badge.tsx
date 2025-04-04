import certificateLogo from '@root/public/img/Certificado.png';
import Image from 'next/image';

interface WarrantyBadgeProps {
  className?: string;
}

const WarrantyBadge: React.FC<WarrantyBadgeProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={certificateLogo} alt="5 años de garantía" width={200} height={150} className="object-contain" />
    </div>
  );
};

export default WarrantyBadge;
