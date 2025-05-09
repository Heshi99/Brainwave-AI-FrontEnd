import Taglilne from "./Taglilne";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tag && <Taglilne className="mb-4 md:justify-center">{tag}</Taglilne>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4 text-center">{text}</p>}
    </div>
  );
};

export default Heading;
