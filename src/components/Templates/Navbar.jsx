/* eslint-disable react/prop-types */
import { Search } from "../../icons";
import { Button } from "../elements/Button";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = ({ setSearchBar, posts, setFilteredPosts }) => {
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <nav className="flex p-3 w-full md:h-[60px] sm:w-[424px] md:w-[768px] lg:w-[1024px] xl:w-[1440px] xxl:w-full sticky  top-0 bg-white">
      <div className="flex ustify-between md:gap-1 md:pr-5 xl:pl-40 xl:pr-40 xxl:px-10 md:justify-between lg:justify-between xl:justify-between w-full xxl:justify-evenly">
        <div className="flex gap-3">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt=""
            className="w-[50px] w-[40px]"
          />

          <label className="relative text-center flex w-full md:w-[420px] xl:w-[420px]  lg:w-60 xl:w-72">
            <input
              className=" block bg-white w-full border border-slate-300 md:w-[420px] rounded-md py-2 px-3 xl:w-[420px] shadow-sm focus:outline-none focus:border-black text-sm "
              placeholder="Search..."
              type="text"
              name="search"
              onChange={(e) => {
                const searchQuery = e.target.value;
                setSearchBar(searchQuery);
                const filteredPosts = posts.filter((post) =>
                  post.title.toLowerCase().includes(searchQuery)
                );
                setFilteredPosts(filteredPosts);
              }}
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 ">
              <Search />
            </span>
          </label>
        </div>
        <div className="flex ">
          {!isLoggedIn ? (
            <div className="  flex flex-row ">
              <div className="hidden md:block lg:block xl:block items-center space-x-2 pr-2 md:mr-[-30px]">
                <span className="md:pr-5" type="login" width="nav">
                  <Link to="/login">Log in</Link>
                </span>

                <Button type="create" width="nav">
                  <Link to="/register">Create account</Link>
                </Button>
              </div>
            </div>
          ) : (
            <Button type="create" width="nav" onClick={() => navigate("/new")}>
              Create post
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
