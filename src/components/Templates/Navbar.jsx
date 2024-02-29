import { Button } from "../elements/Button";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <nav className="bg-stale-50 flex justify-evenly p-3 h-[60px]">
      <div className="flex w-[420px] gap-3">
        <img
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt=""
          className="w-[3.5rem]"
        />

        <label className="relative text-center w-72">
          <input
            className=" block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-black text-sm "
            placeholder="Search..."
            type="text"
            name="search"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 ">
            <img src="/vite.svg" alt="" />
          </span>
        </label>
      </div>

      <div className="flex">
        {!isLoggedIn ? (
          <div>
            <Button type="login" width="nav">
              <Link to="/login">Log in</Link>
            </Button>
            <Button type="create" width="nav">
              Create account
            </Button>
          </div>
        ) : (
          <Button type="create" width="nav" onClick={() => navigate("/new")}>
            Create post
          </Button>
        )}
      </div>
    </nav>
  );
};
