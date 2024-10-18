import { Route as PrismaRoute } from "@prisma/client";
import ShippingRoute from "./ShippingRoute";

interface Props {
  routes: PrismaRoute[];
}

const Routes = ({ routes }: Props) => {
  return (
    <section className="grid grid-cols-2 gap-4">
      {routes.map((route) => (
        <ShippingRoute key={route.id} route={route} />
      ))}
    </section>
  );
};

export default Routes;
