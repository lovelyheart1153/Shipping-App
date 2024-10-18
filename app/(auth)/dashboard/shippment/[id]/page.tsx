import { getSession } from "@/actions/session";
import { Separator } from "@/components/ui/separator";
import prisma from "@/prisma/client";
import { notFound, redirect } from "next/navigation";
import ShippmentDetails from "../ShippmentDetails";
import Routes from "@/app/(auth)/route/Routes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BackButton from "@/app/_components/BackButton";

interface Props {
  params: { id: string };
}

const ShippmentDetailsPage = async ({ params: { id } }: Props) => {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/login");

  const shippment = await prisma.shippment.findUnique({
    where: { id },
    include: { routes: { orderBy: { createdAt: "asc" } } },
  });

  if (!shippment) notFound();

  return (
    <div className="h-full space-y-4 mx-auto max-w-[1140px] w-full my-12">
      <BackButton href="/dashboard" />
      <ShippmentDetails shippment={shippment} />
      <Separator />
      <Button asChild>
        <Link href={`/route/${shippment.id}`}>Create Route</Link>
      </Button>
      <Routes routes={shippment.routes} />
    </div>
  );
};

export default ShippmentDetailsPage;
