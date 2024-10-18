"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contacts } from "@/data/contacts";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const ContactUsPage = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) setError(true);
    else router.push("/message");
  };

  return (
    <section>
      <div className="bg-sky-600 text-neutral-100 py-14 md:py-28 -tracking-widest">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="text-5xl font-bold text-center">Contact Us</h2>
        </div>
      </div>

      <div className="max-w-[1140px] px-4 mx-auto py-10">
        <h3 className="font-bold text-3xl md:text-5xl text-center mb-6">
          Get In{" "}
          <span className="border-b-4 text-sky-600 border-b-sky-600">
            Touch
          </span>{" "}
          With Us
        </h3>
        <p className="text-center max-w-[500px] mx-auto text-neutral-600 p-2">
          Do you want to check the status of your shipment? or have any
          questions about our services?, Send us a message or Contact any of the
          numbers below. We respond to all queries and comments within 24
          business hours.
        </p>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4 max-w-[600px] mx-auto mb-14"
        >
          {error && (
            <p className="px-4 py-2 bg-red-100 rounded text-red-600 font-bold">
              All fields are required
            </p>
          )}
          <Input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <Textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          />
          <Button type="submit">Send Message</Button>
        </form>

        <div className="grid md:grid-cols-2 place-items-center justify-center lg:grid-cols-3 gap-6 md:gap-x-2 md:gap-y-6">
          {contacts.map((contact, index) => (
            <div key={index}>
              <h5 className="text-2xl uppercase font-bold mb-3">
                {contact.country} Office
              </h5>
              <p className="text-muted-foreground mb-1">{contact.name}</p>
              <p className="text-muted-foreground">{contact.tel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
