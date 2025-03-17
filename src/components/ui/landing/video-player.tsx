interface VideoPlayer {
  video: string;
}

const VideoPlayer = ({ video }: VideoPlayer) => {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <video
        src={video}
        typeof="video/mp4"
        controls
        className="w-[70%] h-[70%] mt-20 object-cover"
      ></video>
    </section>
  );
};

export { VideoPlayer };
