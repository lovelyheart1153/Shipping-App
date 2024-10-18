"use client";

import { Route as PrismaRoute } from "@prisma/client";
import EditRouteDialog from "@/app/_components/EditRouteDialog";
import { DeleteRouteDialog } from "@/app/_components/DeleteRouteDialog";

interface Props {
  route: PrismaRoute;
}

const ShippingRoute = ({ route }: Props) => {
  return (
    <div className="rounded border border-neutral-300 p-4 space-y-2">
      <div className="flex gap-1 items-center">
        <span className="font-bold">Location: </span>{" "}
        <span className="text-muted-foreground">{route.location}</span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-bold">Arrival Date: </span>{" "}
        <span className="text-muted-foreground">
          {route.arrivalDate ? route?.arrivalDate?.toDateString() : "N/A"}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-bold">Expected Arrival Date: </span>{" "}
        <span className="text-muted-foreground">
          {route.expectedArrivalDate
            ? route?.expectedArrivalDate?.toDateString()
            : "N/A"}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-bold">Status: </span>{" "}
        <span className="text-muted-foreground">{route.status || "N/A"}</span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-bold">Message: </span>{" "}
        <span className="text-muted-foreground">{route.message || "N/A"}</span>
      </div>

      <div className="flex gap-2 items-center justify-end">
        <EditRouteDialog route={route} />
        <DeleteRouteDialog id={route.id} />
      </div>
    </div>
  );
};

export default ShippingRoute;
