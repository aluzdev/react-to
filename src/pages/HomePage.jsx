
import { SideRigth } from "../components/Templates/SideRigth";
import { SideCenter } from "../components/Templates/SideCenter";
import { SideLeft } from "../components/Templates/SideLeft";

export const HomePage = () => {
  return (
    <>
      <main className=" bg-gray-200 gap-6 flex flex-row justify-center mx-auto mt-5">

        <SideLeft />
        <SideCenter />
        <SideRigth/>
        
      </main>
    </>
  );
};
