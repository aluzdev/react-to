import { Button } from "../elements/Button";
import { CardCenter } from "../elements/CardCenter";

export const Center = () => {
  return (
    <div className="w-[40rem] ">
      <div className="my-3">
        <Button type="filter" >Relevant</Button>
        <Button type="filter">Lastest</Button>
        <Button type="filter">Top</Button>
      </div>

      <CardCenter></CardCenter>

      <CardCenter></CardCenter>
    </div>
  );
};
