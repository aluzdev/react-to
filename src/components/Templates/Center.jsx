import { Button } from "../elements/Button";
import { CardCenter } from "../elements/CardCenter";

export const Center = () => {
  return (
    <div className="">
      <div className="sm:w-[425px] md:font-light sm:h-[51px] md:w-[531.44px] md:pt-[10px] md:mt-[-10px] sm:mt-[-15px]">
        <Button type="filter">Relevant</Button>
        <Button type="filter">Latest</Button>
        <Button type="filter">Top</Button>
      </div>

      <CardCenter></CardCenter>

      <CardCenter></CardCenter>
    </div>
  );
};
