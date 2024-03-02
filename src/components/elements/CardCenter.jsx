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
      <div className="bg-slate-100 rounded-lg mb-6 h-auto">
        <img
          src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffftdkjmm99z06bu2qggi.gif"
          alt=""
          className="rounded-lg"
        />
        <div
          id="data-container"
          className="w-full px-2 flex justify-center justify-items-center "
        >
          <div id="hijo" className="p-5  w-full">
            <div className="flex pl-2 mb-4">
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

            <div className="pl-12">
              <h3 className="text-xl font-bold">
                Mentor Matching — February 2024 🤝
              </h3>

              <div className="flex flex-wrap mb-3 h-8 ">
                <Button type="tags">#discuss</Button>
                <Button type="tags">#mentorship</Button>
                <Button type="tags">#community</Button>
                <Button type="tags">#career</Button>
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
                  <p className="self-center">27 reactions</p>
                </div>
                <div className="flex flex-row py-6 text-sm">
                  <Button type="actions">
                    <Comentario></Comentario>
                    <p className="pr-2 self-center"> 3 comments</p>
                  </Button>
                </div>
              </div>
              <div className="flex flex-row">
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
