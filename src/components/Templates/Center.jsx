import { Button } from "../elements/Button";
import { CardCenter } from "../elements/CardCenter";

export const Center = () => {
  return (
    <div className="w-4/5 md:w-4/5 md:mx-8 xl:w-[40rem] ">
      <div className="my-3">
        <Button type="filter">Relevant</Button>
        <Button type="filter">Latest</Button>
        <Button type="filter">Top</Button>
      </div>

      <CardCenter></CardCenter>

      <CardCenter></CardCenter>
    </div>
  );
};
