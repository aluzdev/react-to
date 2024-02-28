import classname from "classname";
//create
//login
//tag
//filter
//left_sidebar
//rigth_sidebar

export const Button = ({ type, width, align, onClick, children }) => {
  const buttonStyle = classname("text-xl", "rounded-lg", {
    "bg-transparent border border-solid border-blueButton text-blueButton p-3 hover:bg-blueButton hover:text-white hover:underline decoration-solid":
      type === "create",

    "bg-transparent p-3 hover:bg-grayButton hover:text-blueButton hover:underline decoration-solid":
      type === "login",

    "hover:bg-grayButton hover:text-blueButton hover:underline decoration-solid text-left flex flex-row text-[0.96rem] gap-2 rounded-md px-4 py-2 ":
      type === "left_sidebar",

    "w-full": width === "lg",

    "w-[20rem] flex flex-col text-left px-3 py-4 text-[16px] rounded-none font-light":
      type === "rigth_sidebar",

    "p-2 rounded bg-transparent hover:bg-white hover:text-blueButton":
      type === "filter",

    "text-[1rem] flex gap-1 items-center hover:bg-grayButton": type === "tags",

    "flex bg-grayButton border border-2 border-white rounded-full ":
      type === "reaction",

    // "hover:bg-grayButton hover:text-blueButton hover:underline decoration-solid text-left text-[16px] ": type === "hash",
  });

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
};
