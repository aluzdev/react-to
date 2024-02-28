import { Button } from "./Button";
export const FormNavbarBot = () => {
  return (
    <div className="flex gap-4">
      <Button type="primary">Publish</Button>
      <button className="bg-[#3B49DF] hover:bg-[#3a2fb2] text-white rounded-md py-2 px-4 font-semibold">
        Publish
      </button>
      <button className="bg-[#3B49DF] hover:bg-[#3a2fb2] text-white rounded-md py-2 px-4 font-semibold">
        Publish
      </button>
    </div>
  );
};
