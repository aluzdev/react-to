export const FormBody = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col gap-5 max-h-[280px]">
        <input
          type="text"
          className="font-extrabold w-full bg-transparent text-3xl"
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
        className="h-full bg-transparent mt-5 font-mono text-lg"
        name="content"
        id="content"
        type="text"
        placeholder="Write your post here . . . "
      ></textarea>
    </div>
  );
};
