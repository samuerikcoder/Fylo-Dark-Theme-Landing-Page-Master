import { FeatureType } from "@/shared/types";
import Feature from "./Feature";
import AccessAnywhereIcon from "@/assets/icon-access-anywhere.svg";
import SecurityIcon from "@/assets/icon-security.svg";
import CollaborationIcon from "@/assets/icon-collaboration.svg";
import AnyFileIcon from "@/assets/icon-any-file.svg";

const features: Array<FeatureType> = [
  {
    icon: AccessAnywhereIcon,
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your acount means your files follow you everywhere."
  },
  {
    icon: SecurityIcon,
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
  },
  {
    icon: CollaborationIcon,
    title: "Real-time collaboration",
    description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
  },
  {
    icon: AnyFileIcon,
    title: "Store any type of file",
    description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared"
  }
];

const Features = () => {
  return (
    <section 
      id="features"
      className="py-10 md:h-full mx-auto w-5/6">
        <div className="md:grid md:grid-cols-2 items-center justify-center gap-10">
          {features.map(feature =>
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          )}
        </div>
    </section>
  );
};

export default Features;