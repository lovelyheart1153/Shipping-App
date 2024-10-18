import { StaticImageData } from "next/image";
import project from "../public/project.webp";
import loading from "../public/loading.webp";
import haulage from "../public/haulage.webp";

export interface Service {
  title: string;
  imageUrl: StaticImageData;
  alt: string;
  content: string;
  order?: "reverse" | "normal";
}

const services: Service[] = [
  {
    title: "Project Cargo",
    content:
      "We have the expertise to manage your large, over-sized, heavy, high-value or mission-critical pieces of cargo. We handle all types of cargo which can be part of a project, from small LCL shipments and containers, to very Large and very Heavy units. To get the cargo to its destination we can apply all modes of transportation: By Ship/By Truck/By Rail/By. We select our carriers with care and use only companies with proven records. Our own network of offices covers a major part of the Globe - and our extensive network of partners covers the rest.",
    alt: "Cargo Image",
    imageUrl: project,
    order: "normal",
  },
  {
    title: "Cargo Handling",
    content:
      "We are devoted to offering loading and unloading services that are prompt, effective & trustworthy to our clients loading and unloading services encompass the utilization of top-tier equipment and machinery, including forklifts, cranes, and pallet jacks, to guarantee the secure and proficient handling of your cargo. MacDan shipping takes pride in our dedication to quality and client satisfaction. Our skilled and experienced team is committed to offer customized services that are suited to the demands of our clients.",
    alt: "Cargo Handling Image",
    imageUrl: loading,
    order: "reverse",
  },
  {
    title: "Haulage",
    content:
      "McDan has its own close to 100 fleet made up of trailers, cargo vans, low beds, light body trucks and mobile crane. We transport goods worldwide. We have over 388 trucks for various haulage roles and maintains workshops in Takoradi, Kumasi and Accra, staffed by experienced and knowledgeable technical team.",
    alt: "Cargo Haulage Image",
    imageUrl: haulage,
    order: "normal",
  },
];

export default services;
