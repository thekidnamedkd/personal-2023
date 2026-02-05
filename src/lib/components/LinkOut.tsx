type Props = {
  href: string;
  title: string;
  description?: string;
  tools?: string;
};

const LinkOut = ({ href, title, description, tools }: Props) => {
  return (
    <div className="pb-2">
      <a
        className="font-heading text-lg xl:text-xl"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {title} ⧉
      </a>
      {description && (
        <p className="pl-3 text-base xl:text-lg">{description}</p>
      )}
      {tools && (
        <p className="pl-[30px] text-sm leading-[1.5] xl:text-base">
          ∿&nbsp;&nbsp;&nbsp;{tools}
        </p>
      )}
    </div>
  );
};

export default LinkOut;
