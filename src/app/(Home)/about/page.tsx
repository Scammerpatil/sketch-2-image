import { IconInfoCircle } from "@tabler/icons-react";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-6">
        <IconInfoCircle className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold text-base-content">
          About Image-3-diffy
        </h1>
      </div>
      <p className="text-lg text-base-content/80">
        Image-3-diffy is a next-gen AI-powered platform that allows you to
        transform 2D images into realistic 3D models in GLB format. Whether
        you're a developer, designer, or hobbyist, our tool streamlines the
        modeling process, enabling quick uploads, previews, and downloads of
        stunning 3D assets.
      </p>
    </section>
  );
}
