import { IconCircleChevronRight } from "@tabler/icons-react";

export default function Home() {
  return (
    <section className="bg-base-300 h-[calc(100vh-5.6rem)] flex items-center">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-base-content font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Image-3-diffy – Instantly Convert Your 2D Images into Stunning 3D
            Models
          </h1>
          <p className="max-w-2xl mb-6 font-light text-base-content/70 lg:mb-8 md:text-lg lg:text-xl">
            Image-3-diffy is an AI-powered tool that transforms 2D images into
            realistic 3D models in GLB format. Perfect for developers,
            designers, and 3D enthusiasts to upload, preview, and download 3D
            assets seamlessly.
          </p>
          <a
            href="/upload"
            className="btn btn-primary text-base font-medium text-center rounded-lg mr-4"
          >
            Try Now
            <IconCircleChevronRight />
          </a>
          <a
            href="/about"
            className="btn btn-outline text-base font-medium text-center rounded-lg mr-4"
          >
            Learn More
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/3d-preview.png" alt="3D Model Preview" />
        </div>
      </div>
    </section>
  );
}
