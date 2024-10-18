import { Choice } from "@/data/choice";

interface Props {
  choice: Choice;
}

const ChoiceBox = ({ choice }: Props) => {
  const { title, description, icon: Icon } = choice;

  return (
    <div className="bg-neutral-100 rounded p-4 flex flex-col gap-2">
      <div className="size-[60px] rounded-full bg-sky-500/10 flex justify-center items-center">
        <Icon className="size-8 text-sky-600" />
      </div>
      <h5 className="text-2xl font-bold">{title}</h5>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

export default ChoiceBox;
