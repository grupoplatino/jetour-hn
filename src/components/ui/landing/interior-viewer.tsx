import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

const Viewer = ({ imagePath }: { imagePath: string }) => {
  return <ReactPhotoSphereViewer src={imagePath} height={"100%"} width="80%" />;
};

export default Viewer;
