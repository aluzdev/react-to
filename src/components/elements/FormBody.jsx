export const FormBody = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5 max-h-[280px] ">
        <input
          type="text"
          className="font-bold w-full bg-transparent text-4xl"
          placeholder="New post title here"
        />
        <input
          type="text"
          className=" w-full bg-transparent text-2xl"
          placeholder="url of cover image"
        />
        <input
          type="text"
          className=" w-full bg-transparent text-2xl"
          placeholder="add up to 4 tags..."
        />
      </div>
      <textarea
        className="h-full bg-transparent mt-5"
        name="content"
        id="content"
        type="text"
        placeholder="Write your post here . . . "
      ></textarea>
    </div>
  );
};
