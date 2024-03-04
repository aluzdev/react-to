import { SideRigth } from "../components/Templates/SideRigth";
import { Center } from "../components/Templates/Center";
import { SideLeft } from "../components/Templates/SideLeft";
import { Navbar } from "../components/Templates/Navbar";
import { useState } from "react";

export const HomePage = () => {
  const [searchBar, setSearchBar] = useState("");
  return (
    <>
      <Navbar setSearchBar={setSearchBar} />

      <main className=" bg-gray-200 xl:gap-4 ">
        <div className="xl:gap-4 flex flex-row justify-center mx-auto pt-5 xl:w-4/5">
          <SideLeft />
          <Center searchBar={searchBar} />
          <SideRigth />
        </div>
      </main>
    </>
  ); /*  */
};
