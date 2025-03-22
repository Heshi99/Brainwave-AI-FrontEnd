import brackets from "../assets/svg/Brackets";

const Taglilne = ({ className, children }) => {
  return (
    <div className={`taglline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Taglilne;
