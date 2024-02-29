/* eslint-disable react/prop-types */
export const FormBody = ({ register, errors }) => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col gap-5 max-h-[280px]">
        <input
          type="text"
          className="font-extrabold w-full bg-transparent text-3xl"
          placeholder="New post title here"
          name="title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="text-red-300">This field is required</span>
        )}
        <input
          type="text"
          className="w-full bg-transparent text-2xl"
          placeholder="url of cover image"
          name="coverImage"
          {...register("coverImage", {
            required: { value: true, message: "Cover image is required" },
            pattern: {
              value:
                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_+.~#?&//=]*)/,
              message: "Enter a valid URL",
            },
          })}
        />

        {errors.coverImage && (
          <span className="text-red-300">{errors.coverImage.message}</span>
        )}
        <input
          type="text"
          className=" w-full bg-transparent text-2xl"
          placeholder="add up to 4 tags..."
          name="tags"
          {...register("tags", {
            required: { value: true, message: "Tags are required" },
            pattern: {
              value: /^#(\w+)(, #\w+)*$/,
              message: "Tags must be in the format: #tag, #tag2, #tag3...",
            },
          })}
        />
        {errors.tags && (
          <span className="text-red-300">{errors.tags.message}</span>
        )}
      </div>
      <textarea
        className="h-full bg-transparent mt-5 font-mono text-lg"
        name="content"
        id="content"
        type="text"
        placeholder="Write your post here . . . "
        {...register("content", { required: true })}
      ></textarea>
      {errors.content && (
        <span className="text-red-300">This field is required</span>
      )}
    </div>
  );
};
