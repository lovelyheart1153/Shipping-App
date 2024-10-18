import Image from "next/image";
import map from "../../public/map.webp";

const Available = () => {
  return (
    <section className="pb-14 pt-4 max-w-[1140px] mx-auto">
      <h3 className="font-bold text-3xl md:text-5xl text-center mb-6">
        Where We Are{" "}
        <span className="border-b-4 text-sky-600 border-b-sky-600">
          Available
        </span>
      </h3>
      <p className="text-center max-w-[700px] mx-auto text-neutral-600 p-2">
        MacDan shipping has offices in the US, UK, China, Dubai, Ghana, Kenya,
        Uganda, Rwanda, Nigeria, Zambia, DRC, and Tanzania, supported by a
        global network of affiliates. Whether you are based locally or
        internationally, we are committed to providing you with exceptional
        service and support.
      </p>
      <Image src={map} alt="Image of a map of our service locations" />
    </section>
  );
};

export default Available;
