import { Button } from "./Button";
import {
  Home,
  Microphone,
  Camera,
  Tag,
  Idea,
  Bag,
  Estrellas,
  Contact,
  Conduct,
  Privacy,
  Terms,
  TwitterBN,
  Github,
  Instagram,
  Twitch,
  Mastodon,
  Facebook,
  Heart,
  Comentario,
  Unicornio,
  Blowmind,
  Fire,
  Bookmark,
} from "../../icons/";
export const CardCenter = () => {
  return (
    <>
      <div className="bg-white rounded-lg mb-2 md:w-[531.44px]">
        <img
          src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffftdkjmm99z06bu2qggi.gif"
          alt=""
          className="xl:rounded-lg object-contain"
        />
        <div
          id="Contenedro Principal"
          className="w-full px-2 flex justify-center justify-items-center "
        >
          <div id="contenedorPost" className="sm:pt-3 md:p-2 p-5  w-full">
            <div className="flex sm:pl-0 pl-2 mb-4">
              <img
                src="/vite.svg"
                alt=""
                className="rounded-full w-10 border-[1px] border-black"
              />
              <div className="pl-3 flex flex-col  gap-0">
                <p className="text-[14px]">Michael Tharrington</p>
                <p className="text-[12px]">Feb 27</p>
              </div>
            </div>

            <div id="Contenedor titulo post" className="sm:pl-0 pl-12">
              <h3 className="text-xl font-bold">
                Mentor Matching — February 2024 🤝
              </h3>

              <div
                id="contenedor tags"
                className="flex flex-wrap mb-3 sm:h-2 h-8 "
              >
                <Button type="tags">#discuss</Button>
                <Button type="tags">#mentorship</Button>
                <Button type="tags">#community</Button>
                <Button type="tags">#career</Button>
              </div>
            </div>
            <div
              id="contenedor reactions"
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
                  <p id="numero de reacciones" className="self-center">
                    27 reactions
                  </p>
                </div>
                <div className="flex flex-row py-6 text-sm">
                  <Button type="actions">
                    <Comentario></Comentario>
                    <p id="numero comentarios" className="pr-2 self-center">
                      {" "}
                      3 comments
                    </p>
                  </Button>
                </div>
              </div>
              <div id="contenedor bookmarks" className="flex flex-row">
                <div className="flex text-sm">
                  <p className="pr-2 self-center"> 17 min read</p>
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
