import classname from "classname";
//create
//login
//tag
//filter
//left_sidebar
//rigth_sidebar

export const Button = ({ type, width, align, onClick, children }) => {
  const buttonStyle = classname("text-xl", "rounded-lg", {
    "bg-transparent border border-solid border-blueButton text-blueButton p-3 hover:bg-blueButton hover:text-white":
      type === "create",

    "bg-transparent text-black p-3 hover:bg-grayButton hover:text-blueButton":
      type === "login",

    "text-black px-4 py-2 bg-transparent border-2 py-2.5 border-transparent hover:bg-grayButton hover:bg-grayButton text-blueButton":
      type === "left_sidebar",

    "w-full": width === "lg",

    "w-[20rem] flex flex-col text-left px-3 py-4  text-[1rem] rounded-none font-light": type === "rigth_sidebar",

    "p-2 rounded bg-transparent hover:bg-white hover:text-blueButton":
      type === "filter",

    "text-[1rem] flex gap-1 items-center hover:bg-grayButton": type === "tags",

    "flex bg-grayButton border border-2 border-white rounded-full ":
      type === "reaction",
  });

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
};
