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
      <div className="grid gap-2 px-2">
        <Button type="tags" width="lg">
          <Home /> Home
        </Button>
        <Button type="tags" width="lg">
          <Microphone /> Podcast
        </Button>
        <Button type="tags" width="lg">
          <Home /> Videos
        </Button>
        <Button type="tags" width="lg">
          <Home /> Tags
        </Button>
        <Button type="tags" width="lg">
          <Home /> DEV Help
        </Button>
        <Button type="tags" width="lg">
          <Home /> Forem Shop
        </Button>
        <Button type="tags" width="lg">
          <Home /> Advertise on DEV
        </Button>
        <Button type="tags" width="lg">
          <Home /> DEV Showcase
        </Button>
        <Button type="tags" width="lg">
          <Home /> About
        </Button>
        <Button type="tags" width="lg">
          <Home /> Contact
        </Button>
        <Button type="tags" width="lg">
          <Home /> Guides
        </Button>
        <Button type="tags" width="lg">
          <Home /> Software comparisons
        </Button>
        <br />
        <h3 className="font-semibold">Other</h3>
        <Button type="tags" width="lg">
          <Home /> Code of Conduct
        </Button>
        <Button type="tags" width="lg">
          <Home /> Privacy Policy
        </Button>
        <Button type="tags" width="lg">
          <Home /> Terms of use
        </Button>
      </div>

      <div className="grid grid-cols-6 px-2 my-7">
        <Home /> <Home /> <Home /> <Home /> <Home /> <Home />
      </div>

      <h3 className="font-semibold">Popular Tags</h3>
      <div className="grid gap-2 px-3">
        <p> #webdev</p>
        <p> #javascript</p>
        <p> #beginners</p>
        <p> #programming</p>
        <p> #tutorial</p>
        <p> #react</p>
        <p> #python</p>
        <p> #productivity</p>
        <p> #discuss</p>
      </div>
      
      <div className="bg-slate-50 p-2 grid gap-4 rounded-lg mt-10">
        <p className="text-sm text-gray-500">DEV Community</p>
       
        <img src="/darkmode.png" alt="" />

        <h3>Life is too short to browse without <a href="">dark mode.</a></h3>
        <p>You can customize your theme, font, and more <a href=""> when you are signed in</a>.</p>
       
      </div>

      <div className="mt-10 text-sm">
        DEV Community A constructive and inclusive social network for software developers. With you every step of your journey. <br /><br />
            Built on Forem — the open source software that powers DEV and other inclusive communities. <br /><br />
            Made with love and Ruby on Rails. DEV Community © 2016 - 2024.
      </div>
    </aside>
  );
};
