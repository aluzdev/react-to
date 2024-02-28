import { Button } from "./Button";
import { Hexagon } from "../../icons";
export const FormNavbarBot = () => {
  return (
    <div className="flex gap-4 bg-neutral-200 p-4 items-center justify-start">
      <Button type="primary">Publish</Button>
      <button type="button">Save Draft</button>
      <button type="button">
        <Hexagon />
      </button>
      <button type="button">Revert new changes</button>
    </div>
  );
};
