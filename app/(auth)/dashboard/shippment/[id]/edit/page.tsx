import { getSession } from "@/actions/session";
import ShippmentForm from "../../../create/ShippmentForm";
import { notFound, redirect } from "next/navigation";
import prisma from "@/prisma/client";
import BackButton from "@/app/_components/BackButton";

interface Props {
  params: { id: string };
}

const EditShippmentPage = async ({ params: { id } }: Props) => {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/login");

  const shippment = await prisma.shippment.findUnique({
    where: { id },
  });

  if (!shippment) notFound();

  return (
    <div className="h-full flex justify-center mt-14">
      <BackButton href={`/dashboard/shippment/${id}`} />
      <ShippmentForm shippment={shippment} />
    </div>
  );
};

export default EditShippmentPage;
