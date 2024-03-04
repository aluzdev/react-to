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
} from "../../icons/";

export const CardCenter = (props) => {
  const navigate = useNavigate();

  const onClick = async () => {
    navigate(`posts/${props._id}`);
  };

  return (
    <>
      <div className="bg-white rounded-lg mb-2 md:w-[531.44px] lg:mr-2 lg:w-[480px] xl:w-[650px]">
        <img
          id="cover-image"
          src={props.coverImage}
          className="rounded-lg cursor-pointer"
          onClick={onClick}
        />
        <div
          id="contenedor-principal"
          className="w-full px-2 flex justify-center justify-items-center "
        >
          <div id="contenedor-post" className="sm:pt-3 md:p-2 p-5  w-full">
            <div id="avatar" className="flex sm:pl-0 pl-2 mb-4">
              <img
                src={props.author?.image}
                className="rounded-full w-10 h-10 border-[1px] border-black"
              />
              <div className="pl-3 flex flex-col gap-0">
                <p className="text-[14px]">{props.author?.name}</p>
                <p className="text-[12px]">{props.createdAt}</p>
              </div>
            </div>

            <div id="Contenedor titulo post" className="sm:pl-0 pl-12">
              <h3
                className="text-xl font-bold cursor-pointer"
                onClick={onClick}
              >
                {props.title}
              </h3>

              <div
                id="contenedor tags"
                className="flex flex-wrap mb-3 sm:h-2 h-8 "
              >
                {props.tags?.map((tag, index) => (
                  <Button key={`${props._id}-${index}`} type="tag">
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
            <div
              id="reactions"
              className="flex shrink md:justify-between xl: justify-between px-0"
            >
              <div className="flex flex-row">
                <div className="flex text-sm content-center hover:bg-grayButton p-1.5 rounded-lg">
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
                  <p
                    id="numero de reacciones"
                    className="self-center md:hidden"
                  >
                    {props.reactions}
                  </p>
                  <p
                    id="numero de reacciones"
                    className="self-center hidden md:block"
                  >
                    {props.reactions} reactions
                  </p>
                </div>
                <div className="flex flex-row py-6 text-sm">
                  <Button type="actions">
                    <Comentario></Comentario>
                    <p id="numero comentarios" className="pr-2 self-center">
                      {props.comments}{" "}
                      <span className="md:hidden"></span>
                      <span className="hidden md:inline">comments</span>
                    </p>
                  </Button>
                </div>
              </div>
              <div id="contenedor bookmarks" className="flex flex-row">
                <div className="flex text-sm">
                  <p className="pr-2 self-center">
                    {props.readingTime}{" "}
                    <span className="md:hidden">min</span>
                    <span className="hidden md:inline">minutes</span>
                  </p>
                  <Button type="actions">
                    <Bookmark></Bookmark>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
