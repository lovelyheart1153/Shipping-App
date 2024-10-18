import { cn } from "@/lib/utils";
import { Route as PrismaRoute } from "@prisma/client";
import { Check } from "lucide-react";

interface Props {
  route: PrismaRoute;
}

const Route = ({ route }: Props) => {
  return (
    <div className="pl-4">
      <div className="relative">
        <div
          className={cn(
            "size-6 border flex items-center shrink-0 justify-center rounded-full bg-neutral-200 absolute -left-2.5 top-4",
            route.status === "ARRIVED" && "bg-green-500"
          )}
        >
          <Check
            className={cn(
              "size-3 text-neutral-500",
              route.status === "ARRIVED" && " text-neutral-50"
            )}
          />
        </div>

        <div
          className={cn(
            "pl-6 py-4 border-l-2 border-neutral-300"
            // route.status === "ARRIVED" && "border-green-300"
          )}
        >
          <div className="p-3 rounded-md border border-neutral-300">
            <div className="flex flex-col gap-2 mb-2">
              <div className="text-xs flex items-center gap-2">
                <span className="uppercase font-bold">Location: </span>{" "}
                <span className="text-muted-foreground">{route.location}</span>
              </div>
              <div className="text-xs flex items-center gap-2">
                <span className="uppercase font-bold">Expected Arrival: </span>{" "}
                <span className="text-muted-foreground italic">
                  {route.expectedArrivalDate.toDateString()}
                </span>
              </div>
              <div className="text-xs flex items-center gap-2">
                <span className="uppercase font-bold">Status: </span>{" "}
                <span
                  className={cn(
                    "text-muted-foreground",
                    route.status === "ARRIVED" && "text-green-500 font-bold"
                  )}
                >
                  {route.status === "ARRIVED" ? "Arrived" : "In Transit"}
                </span>
              </div>
              {route.arrivalDate && (
                <div className="text-xs flex items-center gap-2">
                  <span className="uppercase font-bold">Arrival Date: </span>{" "}
                  <span className="text-green-500 italic font-bold">
                    {route.arrivalDate.toDateString()}
                  </span>
                </div>
              )}
            </div>
            <div className="text-xs flex gap-2">
              <span className="uppercase font-bold">Comments: </span>{" "}
              <span className="text-muted-foreground">
                {route?.message ||
                  "Package in good shape. No expected changes in shipping arrangements"}
              </span>
            </div>
            {/* <p className="text-sm">
              {route?.message ||
                "Package in good shape. No expected changes in shipping arrangements"}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Route;
