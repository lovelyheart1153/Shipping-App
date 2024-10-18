import ErrorPage from "@/app/_components/ErrorPage";
import Route from "@/app/_components/Route";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import prisma from "@/prisma/client";
import Link from "next/link";

interface Props {
  params: { number: string };
}

const TrackingPage = async ({ params: { number } }: Props) => {
  const shippment = await prisma.shippment.findFirst({
    where: { trackingNumber: number },
    include: { routes: { orderBy: { createdAt: "asc" } } },
  });

  if (!shippment) return <ErrorPage />;

  return (
    <section className="max-w-[1140px] h-full mx-auto my-12 p-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-4xl font-bold">Tracking</h3>
        <Button variant="outline" asChild>
          <Link href="/">Back</Link>
        </Button>
      </div>
      <Separator />

      <h4 className="text-3xl text-sky-600 font-bold text-center my-4">
        Status Updates
      </h4>

      <div className="max-w-[500px] mx-auto my-4">
        <Button
          className={cn(
            "mb-6 w-full uppercase text-lg tracking-widest font-bold text-neutral-50",
            shippment.status === "IN_TRANSIT" &&
              "bg-yellow-600 hover:bg-yellow-600",
            shippment.status === "ARRIVED" && "bg-green-600 hover:bg-green-600"
          )}
        >
          {shippment.status === "ARRIVED" ? "Arrived" : "In Transit"}
        </Button>
        <div className="space-y-2 mb-4">
          <div className="flex gap-1 items-center">
            <span className="font-bold">Tracking Number: </span>{" "}
            <span className="text-muted-foreground">
              {shippment.trackingNumber}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="font-bold">Senders Name: </span>{" "}
            <span className="text-muted-foreground">
              {shippment.sendersName}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="font-bold">Receivers Name: </span>{" "}
            <span className="text-muted-foreground">
              {shippment.receiversName}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="font-bold">Receivers Address: </span>{" "}
            <span className="text-muted-foreground">
              {shippment.receiversAddress}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="font-bold">Content: </span>{" "}
            <span className="text-muted-foreground">
              {shippment.content || "N/A"}
            </span>
          </div>
        </div>
        {shippment.routes.map((route) => (
          <Route key={route.id} route={route} />
        ))}
      </div>
    </section>
  );
};

export const revalidate = 0;

export default TrackingPage;
