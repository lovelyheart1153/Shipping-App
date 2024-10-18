import { gallery } from "@/data/images";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="">
      <div className="bg-sky-600 text-neutral-100 py-14 md:py-28 -tracking-widest">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="text-5xl font-bold text-center">Gallery</h2>
        </div>
      </div>

      <div className="max-w-[1140px] px-4 mx-auto py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.map((image, index) => (
          <div key={index} className="break-inside-avoid">
            <Image src={image} alt="gallery image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
