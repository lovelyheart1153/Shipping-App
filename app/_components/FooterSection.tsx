interface Props {
  header: string;
  list: string[];
}

const FooterSection = ({ header, list }: Props) => {
  return (
    <section className="flex flex-col gap-4">
      <h4 className="text-4xl md:text-2xl font-bold text-neutral-50">
        {header}
      </h4>
      <ul className="flex flex-col gap-2">
        {list.map((item, index) => (
          <li key={index} className="text-sm text-neutral-200">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterSection;
