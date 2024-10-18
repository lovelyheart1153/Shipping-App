import services from "@/data/services";
import Service from "./Service";

const Services = () => {
  return (
    <section className="pt-14 max-w-[1140px] mx-auto">
      <h3 className="font-bold text-3xl md:text-5xl text-center mb-6">
        Our Major{" "}
        <span className="border-b-4 text-sky-600 border-b-sky-600">
          Services
        </span>
      </h3>
      <p className="text-center max-w-[500px] mx-auto text-neutral-600 p-2">
        We offer a complete range of logistical solutions to suit importers and
        shippers worldwide.
      </p>

      {services.map((service) => (
        <Service key={service.title} service={service} />
      ))}
    </section>
  );
};

export default Services;
