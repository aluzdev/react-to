import classname from "classname";

export const Button = ({ type, width, state, onClick, children }) => {
  const buttonStyle = classname("rounded-lg", {

    "bg-transparent border border-solid border-blueButton text-blueButton p-3 hover:bg-blueButton hover:text-white hover:underline decoration-solid":
      type === "create",

    "bg-transparent p-3 hover:bg-grayButton hover:text-blueButton hover:underline decoration-solid":
      type === "login",

    "hover:bg-grayButton hover:text-blueButton hover:underline decoration-solid text-left flex flex-row text-[0.96rem] gap-2 px-4 py-2 ":
      type === "left_sidebar",

    "w-[20rem] flex flex-col text-left px-3 py-4 text-[16px] rounded-none font-light":
      type === "rigth_sidebar",

    "p-2 bg-transparent hover:bg-white hover:text-blueButton text-lg hover:text-bold":
      type === "filter",

    "w-full": width === "lg",

    "text-[14px] px-2 py-[.15rem] hover:bg-grayButton hover:border hover:border-grey-200":
      type === "tags",

    " flex text-[13px] hover:bg-grayButton self-center self-center p-1.5":
      type === "actions",

    "border border-2 border-white rounded-full self-center":
      type === "reaction",

    "px-3.5 bg-transparent w-[170px] h-[40px] text-sm border border-solid border-[#D6D6D7] ":
      type === "coverImage",

    "bg-[#3B49DF] hover:bg-[#3a2fb2] text-white rounded-md py-2 px-4 font-semibold":
      type === "primary",

      "py-0 ":width === "nav",

      // "bg-red-200": state === "focus"
  });

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
};
