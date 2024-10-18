import BackButton from "@/app/_components/BackButton";
import ShippmentForm from "./ShippmentForm";

const CreateShippingOrder = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <BackButton href="/dashboard" />
      <ShippmentForm />
    </div>
  );
};

export default CreateShippingOrder;
