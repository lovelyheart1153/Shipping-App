import Image from "next/image";
import logo from "../assets/mcdan.png";
import FooterSection from "./FooterSection";
import { services, contacts, help } from "@/data/footer";

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-neutral-100 py-10 px-4">
      <div className="max-w-[1140px] mx-auto grid md:grid-cols-4 gap-8 md:gap-4 justify-center md:justify-start">
        <Image src={logo} alt="Brand logo" width={150} />

        <FooterSection header="Services" list={services} />
        <FooterSection header="Help" list={help} />
        <FooterSection header="Contacts" list={contacts} />
      </div>
    </footer>
  );
};

export default Footer;
