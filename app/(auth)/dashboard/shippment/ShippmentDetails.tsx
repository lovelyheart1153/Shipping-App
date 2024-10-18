"use client";

import { DeleteShippmentDialog } from "@/app/_components/DeleteShippmentDialog";
import { Button } from "@/components/ui/button";
import { Shippment } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  shippment: Shippment;
}

const ShippmentDetails = ({ shippment }: Props) => {
  const router = useRouter();

  return (
    <div className="w-full mb-4 grid grid-cols-3 gap-y-4">
      <div className="flex gap-1 items-center">
        <span className="font-bold">Tracking Number: </span>{" "}
        <span className="text-muted-foreground">
          {shippment.trackingNumber}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-bold">Senders Name: </span>{" "}
        <span className="text-muted-foreground">{shippment.sendersName}</span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-bold">Country of Origin: </span>{" "}
        <span className="text-muted-foreground">{shippment.origin}</span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-bold">Country of Destination: </span>{" "}
        <span className="text-muted-foreground">{shippment.destination}</span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-bold">Status: </span>{" "}
        <span className="text-muted-foreground">{shippment.status}</span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-bold">Estimated Delivery Date: </span>{" "}
        <span className="text-muted-foreground">
          {shippment.estimatedDeliveryDate.toDateString()}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-bold">Receivers Name: </span>{" "}
        <span className="text-muted-foreground">{shippment.receiversName}</span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-bold">Mode of Delivery: </span>{" "}
        <span className="text-muted-foreground">{shippment.deliveryMode}</span>
      </div>
      <div className="flex gap-4 items-center">
        <Button
          onClick={() =>
            router.push(`/dashboard/shippment/${shippment.id}/edit`)
          }
        >
          Edit Shippment
        </Button>
        <DeleteShippmentDialog id={shippment.id} />
      </div>
    </div>
  );
};

export default ShippmentDetails;
