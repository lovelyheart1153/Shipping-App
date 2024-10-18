import RouteForm from "../RouteForm";

interface Props {
  params: { shippmentId: string };
}

const CreateRoutePage = ({ params: { shippmentId } }: Props) => {
  return (
    <div className="h-full flex justify-center mt-14">
      <RouteForm shippmentId={shippmentId} />
    </div>
  );
};

export default CreateRoutePage;
