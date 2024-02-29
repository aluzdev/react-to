import { Button } from "./Button";

export const CardCenter = () => {
  return (
    <>
      <div className="bg-slate-100 rounded-lg mb-6">
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
            <div className="pl-3 flex flex-col  gap-0">
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
      </div>
    </>
  );
};
