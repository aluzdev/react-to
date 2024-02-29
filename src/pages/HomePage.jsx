import { SideRigth } from "../components/Templates/SideRigth";
import { Center } from "../components/Templates/Center";
import { SideLeft } from "../components/Templates/SideLeft";
import { Navbar } from "../components/Templates/Navbar";

export const HomePage = () => {
  return (
    <>
      <Navbar />

      <main className=" bg-gray-200 gap-4 flex flex-row justify-center mx-auto pt-5">
        <SideLeft />
        <Center />
        <SideRigth />
      </main>
    </>
  );
};
