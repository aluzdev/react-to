
import { SideRigth } from "../components/Templates/SideRigth";
import { Center } from "../components/Templates/Center";
import { SideLeft } from "../components/Templates/SideLeft";

export const HomePage = () => {
  return (
    <>
      <main className=" bg-gray-200 gap-4 flex flex-row justify-center mx-auto mt-5">

        <SideLeft />
        <Center />
        <SideRigth/>
        
      </main>
    </>
  );
};
