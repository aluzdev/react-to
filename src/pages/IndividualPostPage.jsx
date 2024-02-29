import { Button } from "../components/elements/Button";
import { Navbar } from "../components/Templates/Navbar";

export const IndividualPostPage = () => {
  return (
    <>
      <div className="bg-white">
      <Navbar />
      </div>

      <div className="flex w-[1280px] p-4 mx-auto gap-6">
        <aside className="w-16 ">
          <ul className="gap-5 grid place-items-center">
            <li className="cursor-pointer">
              <img src="/vite.svg" alt="" />
              <p className="grid place-items-center mt-2 text-slate-500">39</p>
            </li>
            <li className="cursor-pointer">
              <img src="/vite.svg" alt="" />
              <p className="grid place-items-center mt-2 text-slate-500">39</p>
            </li>
            <li className="cursor-pointer">
              <img src="/vite.svg" alt="" />
              <p className="grid place-items-center mt-2 text-slate-500">39</p>
            </li>
            <li className="hover:bg-grayButton p-2 rounded-full">
              <img src="/vite.svg" alt="" />
            </li>
          </ul>
        </aside>

        <main className="bg-slate-50 rounded-lg">
          <img
            src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffftdkjmm99z06bu2qggi.gif"
            alt=""
            className="rounded-lg"
          />

          <div className="p-5 ">
            <div className="flex mb-4">
              <img
                src="/vite.svg"
                alt=""
                className="rounded-full w-10 border-[1px] border-black"
              />
              <div className="pl-2 flex flex-col  gap-0">
                <p className="text-[14px]">Michael Tharrington</p>
                <p className="text-[12px]">Feb 27</p>
              </div>
            </div>

            <div className="pl-10">
              <h3 className="text-[28px] font-bold">
                Mentor Matching — February 2024 🤝
              </h3>

              <div className="flex mb-3 h-8">
                <Button type="tags">#discuss</Button>
                <Button type="tags">#mentorship</Button>
                <Button type="tags">#community</Button>
                <Button type="tags">#career</Button>
              </div>

              <div className="flex justify-between">
                <div className="flex ">
                  <div className="flex text-[13px] content-center mr-8 hover:bg-grayButton p-1.5 rounded-lg">
                    <div className="flex pr-2 ">
                      <Button type="reaction">
                        <img src="/vite.svg" alt="" className="size-5" />
                      </Button>
                      <Button type="reaction">
                        <img src="/vite.svg" alt="" className="size-5" />
                      </Button>
                      <Button type="reaction">
                        <img src="/vite.svg" alt="" className="size-5" />
                      </Button>
                    </div>
                    <p className="self-center">27 reactions</p>
                  </div>

                  <Button type="actions">
                    <img src="/vite.svg" alt="" className="size-5" />
                    <p className="pl-2"> 3 comments</p>
                  </Button>
                </div>

                <div className="flex text-[13px] ">
                  <p className="pr-2 self-center"> 17 min read</p>
                  <Button type="actions">
                    <img src="/vite.svg" alt="" className="size-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <aside className="w-[396px] grid gap-3 ">
          <div className="bg-slate-50 p-3">
            <div>
              <div className="flex">
                <img src="/vite.svg" alt="" />
                <p className="ml-3">ALicia Marianne</p>
              </div>
              <br />
              <button className="bg-blueButton text-white rounded-lg w-full py-2">
                Follow
              </button>
            </div>

            <div>
              <ul className="grid gap-3">
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
                  <p>QA Engineer at Enhesa</p>
                </li>
                <li>
                  <p>JOINED</p>
                  <p>Mar 8, 2022</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="divide-y divide-gray-300 bg-slate-50 rounded-md">
            <Button type="rigth_sidebar">
              <p className="text-lg font-semibold">Trending on DEV Community</p>
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

          <div className=" bg-slate-50 rounded-md p-4">
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
        </aside>
      </div>
    </>
  );
};
