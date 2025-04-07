interface VideoSectionProps {
  videoUrl: string;
  thumbnailUrl: string;
}

export default function VideoSection({ videoUrl }: VideoSectionProps) {
  return (
    <section className="relative w-full min-h-[500px] flex justify-center items-center overflow-hidden py-16 px-40">
      <div className="max-w-full max-h-full w-full">
        <video src={videoUrl} typeof="video/mp4" controls muted loop autoPlay className="w-full h-[550px] object-cover"></video>
      </div>
    </section>
  );
}
