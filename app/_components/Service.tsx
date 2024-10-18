import { Service } from "@/data/services";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  service: Service;
}

const ServiceSection = ({ service }: Props) => {
  return (
    <section
      className={cn(
        "w-full items-center gap-4 py-12 px-4 flex flex-col md:flex-row",
        service.order === "reverse" && "md:flex-row-reverse flex",
        service.order === "normal" && "md:flex"
      )}
    >
      <div className="flex-1">
        <h4 className="uppercase text-xl font-bold text-sky-600 mb-4">
          {service.title}
        </h4>
        <p className="text-neutral-500">{service.content}</p>
      </div>
      <Image
        src={service.imageUrl}
        alt={service.alt}
        // width="100"
        // height="100"
        className="flex-1 w-full"
      />
    </section>
  );
};

export default ServiceSection;
