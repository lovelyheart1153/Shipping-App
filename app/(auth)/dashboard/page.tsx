import prisma from "@/prisma/client";
import ShippmentsTable from "./ShippmentsTable";
import { getSession } from "@/actions/session";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardPage = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/login");

  const shippments = await prisma.shippment.findMany();

  return (
    <div className="h-full space-y-4 flex justify-center mt-14">
      <Button className="absolute top-4" asChild>
        <Link href="/dashboard/create">Create New Shippment</Link>
      </Button>
      <ShippmentsTable shippments={shippments} />
    </div>
  );
};

export default DashboardPage;
