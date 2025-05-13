import Image from "next/image";

interface WarrantyBadgeProps {
  className?: string;
}

const WarrantyBadge: React.FC<WarrantyBadgeProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={"/landing/certficate_logo.webp"}
        alt="5 años de garantía"
        width={512}
        height={512}
        className="object-contain w-[250px]"
      />
    </div>
  );
};

export default WarrantyBadge;
