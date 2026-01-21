import HeroText from "./HeroText";
import Arrow from "./Arrow";

const LeftContainer = () => {
  return (
    <div className="flex flex-col justify-between  h-full w-1/3">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default LeftContainer;
