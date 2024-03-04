import { CancelIcon } from "../../icons";

export const FormNavbarTop = () => {
  return (
    <div className="bg-neutral-200 flex justify-between px-10 py-2 ">
      <div className="flex gap-8 pr-10 ">
        <img
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          className="w-16"
          alt=""
        />
        <p className="text-2xl self-center">Create Post</p>
      </div>

      <div className="flex gap-8 text-2xl">
        <button type="button">Edit</button>
        <button type="button">Preview</button>
      </div>
      <div className=" flex justify-end gap-4 text-2xl">
        <button type="button">
          <CancelIcon />
        </button>
      </div>
    </div>
  );
};
