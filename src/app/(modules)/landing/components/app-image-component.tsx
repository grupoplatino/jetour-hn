import { Image } from '@imagekit/next';
import { Video } from '@imagekit/next';

export const defaultEndpointImageKit = 'https://ik.imagekit.io/t0mnq3a7e';

export function AppImageComponent({
  endpoint,
  src,
  width,
  height,
  alt,
  className
}: {
  endpoint: string;
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}) {
  return (
    <Image
      className={className}
      urlEndpoint={endpoint} // New prop
      src={src}
      width={width || 800}
      height={height || 600}
      alt={alt || 'Image'}
    />
  );
}

export default function AppVideoComponent({
  endpoint,
  src,
  width,
  height,
  alt,
  className
}: {
  endpoint: string;
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}) {
  return <Video urlEndpoint={endpoint} src={src} controls width={width} height={height} className={className} alt={alt} />;
}
