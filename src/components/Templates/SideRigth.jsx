import { Button } from "../elements/Button";

export const SideRigth = () => {
  return (
    <>
      <aside className="hidden lg:block lg:w-[240px] md:pt-[4px] xl:w-[325px] lg:pl-2 xl:pl-16 xl:block">
        <div className="divide-y divide-gray-300 bg-slate-50 lg:w-[240px] lg:pl-2 xl:w-[325px] xl:ml-20 rounded-md">
          <Button type="rigth_sidebar">
            <p className="text-xl font-semibold"> #discuss</p>
            <p className="text-gray-500 text-xs ">
              Discussion threads targeting the whole community
            </p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Whitehouse Declares Software Should Be Memory Safe</p>
            <p className="text-gray-500 text-[.9rem]">5 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Are You Embracing AI in Your Dev Workflow?</p>
            <p className="text-gray-500 text-[.9rem]">5 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>
              Explain "Memory Safe Programming Languages" Like I'm Five Please
            </p>
            <p className="text-gray-500 text-[.9rem]">8 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Mentor Matching — February 2024 🤝</p>
            <p className="text-gray-500 text-[.9rem]">3 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Psst... I can build this in a weekend!</p>
            <p className="text-gray-500 text-[.9rem]">10 comments</p>
          </Button>
        </div>
        <br />
        <div className="divide-y divide-gray-300 bg-slate-50 lg:w-[240px] xl:ml-20 xl:w-[325px] rounded-md">
          <Button type="rigth_sidebar">
            <p className="text-xl font-semibold"> #discuss</p>
            <p className="text-gray-500 text-xs">
              Discussion threads targeting the whole community
            </p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Whitehouse Declares Software Should Be Memory Safe</p>
            <p className="text-gray-500 text-[.9rem]">5 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Are You Embracing AI in Your Dev Workflow?</p>
            <p className="text-gray-500 text-[.9rem]">5 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>
              Explain "Memory Safe Programming Languages" Like I'm Five Please
            </p>
            <p className="text-gray-500 text-[.9rem]">8 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Mentor Matching — February 2024 🤝</p>
            <p className="text-gray-500 text-[.9rem]">3 comments</p>
          </Button>
          <Button type="rigth_sidebar">
            <p>Psst... I can build this in a weekend!</p>
            <p className="text-gray-500 text-[.9rem]">10 comments</p>
          </Button>
        </div>
      </aside>
    </>
  );
};
