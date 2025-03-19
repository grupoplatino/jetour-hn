import FacebookIcon from "@/modules/shared/presentation/components/icons/svg-icons/facebook.icon";
import {
  LucideFacebook,
  LucideInstagram,
  LucideMessageCircleMore,
  LucideYoutube,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="min-h-64 bg-gray-500 flex flex-col py-8 px-6 gap-16 lg:flex-row justify-around items-center font-bold">
      <div>
        <h1 className="text-3xl font-bold">JETOUR</h1>
        <h1 className="text-3xl font-bold">AUTOS ALIADOS</h1>
      </div>
      <div className="grid grid-cols-3">
        <p>Vehicles</p>
        <p>Contact Us</p>
        <p>Company Profile</p>
        <p>Jetour FAQs</p>
        <p>Globar Partners</p>
      </div>
      <div className="flex flex-col justify-around h-48">
        <div className="flex flex-row justify-start gap-8">
          <p>Cookies</p>
          <p>Privacy</p>
        </div>
        <div>
          <p>© Copyright 2025 JETOUR Auto</p>
          <div className="flex flex-row justify-start gap-6">
            <LucideInstagram />
            <LucideMessageCircleMore />
            <LucideFacebook />
            <LucideYoutube />
          </div>
        </div>
        <p>@Gamero Studio</p>
      </div>
    </footer>
  );
};

export { Footer };
