import { Home, Microphone, Camera, Tag, Idea, Bag } from "../../icons/Icons";
import { Button } from "../elements/Button";

export const SideLeft = () => {
  return (
    <aside className=" w-[16rem]">
      <div className="bg-slate-50 rounded-lg p-4">
        <h4 className="font-bold text-xl">
          DEV Community is a community of 1,287,199 amazing developers
        </h4>
        <br />
        <p className="text-[.97rem] text-slate-600">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <br />
        <Button type="create" width="lg">
          Create account
        </Button>
        <Button type="login" width="lg">
          Log in
        </Button>
      </div>
      <br />
      <div className="grid">
        <Button type="left_sidebar" width="lg">
          <Home /> Home
        </Button>
        <Button type="left_sidebar" width="lg">
          <Microphone /> Podcast
        </Button>
        <Button type="left_sidebar" width="lg">
          <Home /> Videos
        </Button>
        <Button type="left_sidebar" width="lg">
          <Home /> Tags
        </Button>
        <Button type="left_sidebar" width="lg">
          <Home /> DEV Help
        </Button>
        <Button type="left_sidebar" width="lg">
          <Home /> Forem Shop
        </Button>
        <Button type="left_sidebar" width="lg">
          <Home /> Advertise on DEV
        </Button>
        <Button type="left_sidebar" width="lg">
          <Home /> DEV Showcase
        </Button>
        <Button type="left_sidebar" width="lg">
          <Home /> About
        </Button>
        <Button type="left_sidebar" width="lg">
          <Home /> Contact
        </Button>
        <Button type="left_sidebar" width="lg">
          <Home /> Guides
        </Button>
        <Button type="left_sidebar" width="lg">
          <Home /> Software comparisons
        </Button>
        <br />
        <h3 className="font-semibold px-2">Other</h3>
        <Button type="left_sidebar" width="lg">
          <Home /> Code of Conduct
        </Button>
        <Button type="left_sidebar" width="lg">
          <Home /> Privacy Policy
        </Button>
        <Button type="left_sidebar" width="lg">
          <Home /> Terms of use
        </Button>
      </div>

      <div className="grid grid-cols-6 px-2 my-7">
        <Home /> <Home /> <Home /> <Home /> <Home /> <Home />
      </div>

      <h3 className="font-semibold px-2">Popular Tags</h3>
      <div className="h-[27rem] overflow-y-scroll mt-5">
        <Button type="left_sidebar"> #webdev</Button>
        <Button type="left_sidebar"> #javascript</Button>
        <Button type="left_sidebar"> #beginners</Button>
        <Button type="left_sidebar"> #programming</Button>
        <Button type="left_sidebar"> #tutorial</Button>
        <Button type="left_sidebar"> #react</Button>
        <Button type="left_sidebar"> #python</Button>
        <Button type="left_sidebar"> #productivity</Button>
        <Button type="left_sidebar"> #discuss</Button>
        <Button type="left_sidebar"> #devops</Button>
        <Button type="left_sidebar"> #aws</Button>
        <Button type="left_sidebar"> #opensource</Button>
        <Button type="left_sidebar"> #ai</Button>
        <Button type="left_sidebar"> #css</Button>
        <Button type="left_sidebar"> #typescript</Button>
        <Button type="left_sidebar"> #node</Button>
        <Button type="left_sidebar"> #career</Button>
        <Button type="left_sidebar"> #news</Button>
        <Button type="left_sidebar"> #learning</Button>
        <Button type="left_sidebar"> #testing</Button>
        <Button type="left_sidebar"> #cloud</Button>
        <Button type="left_sidebar"> #java</Button>
        <Button type="left_sidebar"> #html</Button>
        <Button type="left_sidebar"> #development</Button>
        <Button type="left_sidebar"> #api</Button>
        <Button type="left_sidebar"> #frontend</Button>
        <Button type="left_sidebar"> #php</Button>
        <Button type="left_sidebar"> #database</Button>
        <Button type="left_sidebar"> #security</Button>
        <Button type="left_sidebar"> #go</Button>
      </div>
      
      <div className="bg-slate-50 grid gap-4 rounded-lg mt-10 p-3">
        <p className="text-sm text-gray-500 ">DEV Community</p>
       
        <img src="/darkmode.png" alt="" className="w-52 mx-auto"/>

        <h3>Life is too short to browse without <a href="">dark mode.</a></h3>
        <p>You can customize your theme, font, and more <a href=""> when you are signed in</a>.</p>
       
      </div>

      <div className="mt-10 text-[0.825rem] p-2">
        DEV Community A constructive and inclusive social network for software developers. With you every step of your journey. <br /><br />
            Built on Forem — the open source software that powers DEV and other inclusive communities. <br /><br />
            Made with love and Ruby on Rails. DEV Community © 2016 - 2024.
      </div>
    </aside>
  );
};
