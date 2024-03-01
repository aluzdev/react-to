import { CancelIcon } from "../../icons";

export const FormNavbarTop = () => {
  return (
    <div className="bg-neutral-200 flex justify-between items-center px-3 ">
      <p className="font-bold">Create Post</p>
      <div className="h-14 flex justify-end gap-4 ">
        <button className="font-bold" type="button">
          Edit
        </button>
        <button type="button">Preview</button>
        <button type="button">
          <CancelIcon />
        </button>
      </div>
    </div>
  );
};
