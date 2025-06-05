import {
  IconUpload,
  Icon3dCubeSphere,
  IconDownload,
} from "@tabler/icons-react";

export default function Features() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-base-content flex items-center gap-3">
        <Icon3dCubeSphere className="w-8 h-8 text-primary" /> Key Features
      </h1>
      <ul className="space-y-6 text-base-content/80">
        <li className="flex gap-3 items-start">
          <IconUpload className="w-6 h-6 text-primary mt-1" />
          <div>
            <strong>Easy Uploads:</strong> Effortlessly upload any 2D image and
            prepare it for 3D modeling.
          </div>
        </li>
        <li className="flex gap-3 items-start">
          <Icon3dCubeSphere className="w-6 h-6 text-primary mt-1" />
          <div>
            <strong>Realistic 3D Outputs:</strong> Generate lifelike 3D models
            in GLB format using AI-powered transformation.
          </div>
        </li>
        <li className="flex gap-3 items-start">
          <IconDownload className="w-6 h-6 text-primary mt-1" />
          <div>
            <strong>One-Click Download:</strong> Instantly preview and download
            your 3D models with ease.
          </div>
        </li>
      </ul>
    </section>
  );
}
