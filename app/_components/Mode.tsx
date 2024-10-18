import Image from "next/image";
import land from "../../public/road.webp";
import water from "../../public/water.webp";
import air from "../../public/air.webp";

const Mode = () => {
  return (
    <section className="pb-14 pt-4 max-w-[1140px] mx-auto">
      <h3 className="font-bold text-3xl md:text-5xl text-center mb-6">
        Ship To And From{" "}
        <span className="border-b-4 text-sky-600 border-b-sky-600">
          Anywhere
        </span>
      </h3>
      <p className="text-center max-w-[700px] mx-auto text-neutral-600 p-2">
        With our global logistics network, we provide reliable transportation
        solutions to your destination. We handle everything from customs
        clearance to documentation for safe, on-time delivery. Trust our
        expertise in air, sea, and land transportation to handle even the most
        complex shipments. Let us bring the world to your doorstep.
      </p>

      <div className="grid md:grid-cols-3 gap-4 md:gap-4 lg:gap-8 p-4">
        <div className="rounded-lg overflow-hidden relative hover:scale-105 transition-all ease-in-out">
          <Image src={air} alt="Picture of an aeroplane" />
          <span className="text-4xl text-neutral-100 font-bold p-2 bg-neutral-900/60 absolute bottom-8 left-4">
            By Air
          </span>
        </div>
        <div className="rounded-lg overflow-hidden relative hover:scale-105 transition-all ease-in-out">
          <Image src={land} alt="Picture of a truck" />
          <span className="text-4xl text-neutral-100 font-bold p-2 bg-neutral-900/60 absolute top-4 left-4">
            By Road
          </span>
        </div>
        <div className="rounded-lg overflow-hidden relative hover:scale-105 transition-all ease-in-out">
          <Image src={water} alt="Picture of a cargo ship" />
          <span className="text-4xl text-neutral-100 font-bold p-2 bg-neutral-900/60 absolute bottom-2 right-4">
            By Sea
          </span>
        </div>
      </div>
    </section>
  );
};

export default Mode;
