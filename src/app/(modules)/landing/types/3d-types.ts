// types.ts
export interface ColorDetails {
  imageCount: number;
  path: string;
  hexColor?: string;
  colorName?: string;
}

export interface ThreeSixtyViewData {
  default: {
    color: string;
    path: string;
  };
  interior: string;
  exterior: {
    [key: string]: ColorDetails;
  };
}

export interface Viewer3DProps {
  carData: {
    primaryColor: string;
    ThreeSixtyView: ThreeSixtyViewData;
  };
}
