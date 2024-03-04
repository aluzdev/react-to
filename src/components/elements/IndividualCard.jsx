/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import {
  Heart,
  Comentario,
  Unicornio,
  Blowmind,
  Fire,
  Bookmark,
} from "../../icons";

export const IndividualCard = ({ post }) => {
  return (
    <>
      <div className="bg-white lg:rounded-lg sm:pt-0 sm:w-[425px] md:w-[680px] lg:w-[627px] xl:w-[806px] pb-2">
        <div className="">
          <img
            id="cover-image"
            src={post.coverImage}
            className="lg:rounded-lg cursor-pointer lg:pb-4 xl:pb-5 md:rounded-t-lg"
          />
          <div
            id="contenedor-principal"
            className="w-full sm:px-[10px] sm:ml-[10px] sm:w-[424px] xl:w-[806px]justify-center justify-items-center "
          >
            <div
              id="contenedor-post"
              className="sm:pt-4 sm:w-[380px] md:p-2 sm:pl-[-15px] p-2 md:w-[580px] lg:w-[499px] xl:w-[678px]"
            >
              <div id="avatar" className="flex sm:pl-0 pl-2 mb-4">
                <img
                  src={post.author?.image}
                  className="rounded-full w-10 h-10 border-[1px] border-black"
                />
                <div className="pl-3 flex flex-col  gap-0">
                  <p className="text-[14px]">{post.author?.name}</p>
                  <p className="text-[12px]">{post.createdAt}</p>
                </div>
              </div>
              <div className="flex flex-col sm:pb-1 ">
                <div className="flex text-sm content-center hover:bg-grayButton sm:pl-0 rounded-lg sm:pb-1 ">
                  <div className="flex flex-row">
                    <Button>
                      <Heart></Heart>
                    </Button>
                    <Button type="reaction">
                      <Unicornio></Unicornio>
                    </Button>
                    <Button type="reaction">
                      <Blowmind></Blowmind>
                    </Button>
                    <Button type="reaction">
                      <Fire></Fire>
                    </Button>
                  </div>
                  <p id="numero de reacciones" className="self-center">
                    {post.reactions} reactions
                  </p>
                </div>
              </div>
              <div
                id="Contenedor titulo post"
                className="sm:pl-0 pl-12 sm:pb-3"
              >
                <h2 className="text-3xl sm:pb-3 font-bold cursor-pointer">
                  {post.title}
                </h2>
              </div>
              <div
                id="contenedor tags"
                className="flex flex-row mb-3 sm:h-2 h-8 sm:pb-10 "
              >
                {post.tags?.map((tag, index) => (
                  <Button key={`${post._id}-${index}`} type="tag">
                    {tag}
                  </Button>
                ))}
              </div>
              <div
                id="emojis"
                className="flex shrink md:justify-between xl: justify-between px-0"
              >
                <div id="contenedor bookmarks" className="flex flex-row">
                  <div
                    id="contenedor-de-contenido"
                    className="flex flex-col text-center"
                  >
                    <p id="Data content" className="text-justify">
                      {post.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
