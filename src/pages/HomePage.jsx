import { SideRigth } from "../components/Templates/SideRigth";
import { Center } from "../components/Templates/Center";
import { SideLeft } from "../components/Templates/SideLeft";
import { Navbar } from "../components/Templates/Navbar";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [searchBar, setSearchBar] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Me traigo los posts de la API
    fetch("https://dev-to-backend-dev-sxgk.2.us-1.fl0.io/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error("Error al obtener los posts:", error));
  }, []);
  return (
    <>
      <Navbar
        setSearchBar={setSearchBar}
        posts={posts}
        setFilteredPosts={setFilteredPosts}
      />
      <main className=" bg-gray-200 xl:gap-4 ">
        <div className="xl:gap-4 flex flex-row justify-center mx-auto pt-5 xl:w-4/5">
          <SideLeft />
          <Center
            posts={posts}
            searchBar={searchBar}
            filteredPosts={filteredPosts}
            setFilteredPosts={setFilteredPosts}
          />
          <SideRigth />
        </div>
      </main>
    </>
  );
};
