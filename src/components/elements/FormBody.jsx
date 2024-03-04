/* eslint-disable react/prop-types */
import { Button } from "./Button";
import { Hexagon } from "../../icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faLink,
  faList,
  faListOl,
  faQuoteLeft,
  faHeading,
  faCode,
  faBolt,
  faFileCode,
  faImage,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

export const FormBody = ({ register, errors }) => {
  return (
    <>
      <div className="flex w-8/12 mb-20 mx-auto rounded-lg drop-shadow-xl">
        <div className=" bg-slate-100 w-[920px] rounded-lg ">
          <div className="flex flex-col gap-5 p-8">
            <input
              type="text"
              className="w-full bg-transparent text-2xl outline outline-offset-2  outline-transparent"
              placeholder="Add url of cover image"
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
              className="font-extrabold w-full bg-transparent text-5xl outline outline-offset-2  outline-transparent"
              placeholder="New post title here..."
              name="title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-300">This field is required</span>
            )}
            <input
              type="text"
              className=" w-full bg-transparent text-2xl outline outline-offset-2  outline-transparent"
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
          <div className="w-full flex justify-between px-10 h-20 bg-neutral-200 ">
            <div className=" self-center">
              <FontAwesomeIcon
                icon={faBold}
                className="size-6 text-slate-700 cursor-pointer hover:bg-gray-300 p-3 rounded-md"
              />
              <FontAwesomeIcon
                icon={faItalic}
                className="size-6 text-slate-700 cursor-pointer hover:bg-gray-300 p-3 rounded-md"
              />
              <FontAwesomeIcon
                icon={faLink}
                className="size-6 text-slate-700 cursor-pointer hover:bg-gray-300 p-3 rounded-md"
              />
              <FontAwesomeIcon
                icon={faListOl}
                className="size-6 text-slate-700 cursor-pointer hover:bg-gray-300 p-3 rounded-md"
              />
              <FontAwesomeIcon
                icon={faList}
                className="size-6 text-slate-700 cursor-pointer hover:bg-gray-300 p-3 rounded-md"
              />
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="size-6 text-slate-700 cursor-pointer hover:bg-gray-300 p-3 rounded-md"
              />
              <FontAwesomeIcon
                icon={faHeading}
                className="size-6 text-slate-700 cursor-pointer hover:bg-gray-300 p-3 rounded-md"
              />
              <FontAwesomeIcon
                icon={faCode}
                className="size-6 text-slate-700 cursor-pointer hover:bg-gray-300 p-3 rounded-md"
              />
              <FontAwesomeIcon
                icon={faFileCode}
                className="size-6 text-slate-700 cursor-pointer hover:bg-gray-300 p-3 rounded-md"
              />
              <FontAwesomeIcon
                icon={faBolt}
                className="size-6 text-slate-700 cursor-pointer hover:bg-gray-300 p-3 rounded-md"
              />
              <FontAwesomeIcon
                icon={faImage}
                className="size-6 text-slate-700 cursor-pointer hover:bg-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="flex gap-4 self-center">
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="size-6 text-slate-700 cursor-pointer hover:bg-gray-300 p-3 rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full h-full p-8 rounded-lg">
            <textarea
              className="h-full bg-transparent mt-5 font-mono text-lg outline outline-offset-2  outline-transparent"
              name="content"
              id="content"
              type="text"
              placeholder="Write your post here . . . "
              {...register("content", { required: true })}></textarea>
            {errors.content && (
              <span className="text-red-300">This field is required</span>
            )}
          </div>
        </div>
        <div className=" p-3 w-[452px] mt-10 pl-10" >
          <ul className="grid gap-4 text-lg ">
            <li className="text-2xl font-bold">Writing a Great Post Title</li>
            <li className="list-disc">
              Think of your post title as a super short (but compelling!)
              description — like an overview of the actual post in one short
              sentence.
            </li>
            <li className="list-disc">
              Use keywords where appropriate to help ensure people can find your
              post by search.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-4 bg-trasparent py-2 items-center absolute inset-x-[17%] bottom-0">
        <Button type="primary">Publish</Button>
        <button type="button">Save Draft</button>
        <button type="button">
          <Hexagon />
        </button>
        <button type="button">Revert new changes</button>
      </div>
    </>
  );
};
