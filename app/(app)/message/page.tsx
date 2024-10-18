import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

const MessageDeliveredPage = () => {
  return (
    <section className="py-10 max-w-[1140px] mx-auto">
      <div className="w-full flex justify-center items-center gap-4 mb-6">
        <CircleCheck className="size-8 text-lime-500" />{" "}
        <h3 className="text-3xl font-bold">Message Sent</h3>
      </div>

      <p className="text-muted-foreground max-w-[500px] mx-auto text-center mb-10">
        Thank you for reaching out to McDan Shipping company. Your message has
        been received and we will get back to you within 24 hours.
      </p>

      <div className="w-full flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/">Back to homepage</Link>
        </Button>
      </div>
    </section>
  );
};

export default MessageDeliveredPage;
