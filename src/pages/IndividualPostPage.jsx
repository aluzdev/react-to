import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/elements/Button";
import { Navbar } from "../components/Templates/Navbar";
import { Comentario, Heart, BlackHeart, Bookmark } from "../icons";
import { IndividualCard } from "../components/elements/IndividualCard";
import { postById } from "../api";

export const IndividualPostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function loadData() {
      const resp = await postById(params.id);
      setPost(resp.data.post);
    }
    loadData();
  }, []);

  console.log(post);
  return (
    <>
      <Navbar />

      <main
        id="ContenerPrincipal"
        className="flex w-2/3 p-4 md:pt-0 mx-auto justify-center gap-6 md:justify-evenly xxl:w-60"
      >
        <div
          id="ContenedorReacciones"
          className="flex md:mt-8 md:mr-8 md:w-[64px] lg:pr-0 lg:pl-4 lg:mr-4  xl:w-1/5 justify-center xl:justify-end"
        >
          <div className="hidden md:block lg:block xl:block md:fixed lg:fixed xl:fixed">
            <div id="reactions" className="flex-col mt-9">
              <div className="flex">
                <button>
                  <BlackHeart></BlackHeart>
                </button>
              </div>
              <div>
                <button className="flex-col mt-10">
                  <Comentario></Comentario>
                  <p id="numeroDeComentarios" className=" text-center">
                    {post.comments}
                  </p>
                </button>
              </div>
              <div className="flex-col mt-8 size-5">
                <button>
                  <Bookmark></Bookmark>
                  <p id="numeroDeBookmarks" className="pr-2 text-center">
                    {post.readingTime}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex pt-5 pr-4 justify-center w-[380px] md:w-[620px] lg:w-[620px] xl:w-[720px] xxl:w-[920px]">
            <IndividualCard post={post} />
          </div>
        </div>
        <div
          id="contenedorPanelDerecho"
          className="hidden lg:block xl:block w-3/4 lg:2/3 xxl:w-1/5"
        >
          <div
            id="Author Card"
            className=" grid gap-3 lg:pt-5 lg:w-[268px] xl:w-[345px]"
          >
            <div className="bg-slate-50 rounded-xl p-3">
              <div>
                <div className="flex">
                  <img id="Author Image" src="/vite.svg" alt="" />
                  <p id="Author Name" className="ml-3">
                    {post?.author?.name}
                  </p>
                </div>
                <br />
                <button className="bg-blueButton text-white rounded-lg w-full py-2">
                  Follow
                </button>
              </div>

              <div id="Datos generales Author">
                <ul className="grid gap-3 ">
                  <li>Software Engineer focused on software quality.</li>
                  <li>
                    <p>LOCATION</p>
                    <p>Portugal</p>
                  </li>
                  <li>
                    <p>EDUCATION</p>
                    <p>PUC Minas</p>
                  </li>
                  <li>
                    <p>PRONOUNS</p>
                    <p>She/her</p>
                  </li>
                  <li>
                    <p>WORK</p>
                    <p>Software Engineer @ Kodemi</p>
                  </li>
                  <li>
                    <p>JOINED</p>
                    <p>Mar 8, 2022</p>
                  </li>
                </ul>
              </div>
            </div>

            <div
              id="Trending DEV Card"
              className="divide-y divide-gray-300 bg-slate-50 rounded-md"
            >
              <Button type="rigth_sidebar">
                <p className="text-lg font-semibold">
                  Trending on DEV Community
                </p>
              </Button>

              <Button type="rigth_sidebar">
                <p>Is Doubt a Sign You're on the Right Path?</p>
                <div className="flex flex-wrap gap-2">
                  <p className="text-gray-500 text-[.9rem]">#webdev </p>
                </div>
              </Button>

              <Button type="rigth_sidebar">
                <p>😲 5000 Followers! | What I've Learned 📚📖</p>
                <div className="flex flex-wrap gap-2">
                  <p className="text-gray-500 text-[.9rem]">#webdev </p>
                  <p className="text-gray-500 text-[.9rem]"> #discuss </p>
                  <p className="text-gray-500 text-[.9rem]"> #learning </p>
                  <p className="text-gray-500 text-[.9rem]"> #showdev</p>
                </div>
              </Button>

              <Button type="rigth_sidebar">
                <p>Remote work, experiences and some ideas</p>
                <div className="flex flex-wrap gap-2">
                  <p className="text-gray-500 text-[.9rem]">#workplace </p>
                  <p className="text-gray-500 text-[.9rem]"> #webdev </p>
                  <p className="text-gray-500 text-[.9rem]"> #career </p>
                  <p className="text-gray-500 text-[.9rem]"> #programming</p>
                </div>
              </Button>
            </div>

            <div
              id="Dev Community Card"
              className=" bg-slate-50 rounded-md p-4"
            >
              <div className="flex justify-between">
                <p className="text-[.87rem]">DEV Community</p>
                <p className="text-[.87rem] font-bold">...</p>
              </div>

              <Button type="rigth_sidebar">
                <p className="text-2xl font-semibold mb-2">🌚 Pro Tip</p>
                <p className="text-[19px] font-semibold mb-2 ">
                  You can set dark mode, and make other customizations, by
                  creating a DEV account.
                </p>
                <a href="" className="">
                  Sign up now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
