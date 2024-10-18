import choices from "@/data/choice";
import ChoiceBox from "./Choice";

const WhyChooseUs = () => {
  return (
    <section className="py-10 max-w-[1140px] mx-auto">
      <h2 className="font-bold text-3xl md:text-5xl text-center mb-6">
        Why{" "}
        <span className="border-b-4 text-sky-600 border-b-sky-600">Choose</span>{" "}
        Us?
      </h2>
      <p className="text-center max-w-[500px] mb-4 mx-auto text-neutral-600">
        No two companies are alike, so when you want to ship choose the company
        synonymous with trust in the shipping and logistics space, Aquantuo!
        Here is why
      </p>

      <div className="grid md:grid-cols-2 place-items-center lg:grid-cols-3 gap-4 lg:gap-6 p-3">
        {choices.map((choice, index) => (
          <ChoiceBox key={index} choice={choice} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
