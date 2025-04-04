interface VideoSectionProps {
  videoUrl: string;
  thumbnailUrl: string;
}

export default function VideoSection({ videoUrl }: VideoSectionProps) {
  return (
    <section className="relative w-full min-h-[500px] flex justify-center items-center overflow-hidden py-16">
      <div className="max-w-full max-h-full">
        <video src={videoUrl} autoPlay muted loop controls className="w-full h-full object-contain" />
      </div>
    </section>
  );
}
