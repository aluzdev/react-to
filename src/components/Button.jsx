import classname from "classname";
//create
//login
//tag
//filter
//left_sidebar
//rigth_sidebar

export const Button = ({ type, width, align, onClick, children }) => {
  const buttonStyle = classname(
    "text-xl","rounded-lg",{
    "bg-transparent border border-solid border-blueButton text-blueButton p-3 hover:bg-blueButton hover:text-white": type === "create",

    "bg-transparent bg-white text-black p-3 hover:bg-grayButton text-blueButton": type === "login",


    "text-black px-4 py-2 bg-transparent border-2 py-2.5 border-transparent hover:bg-grayButton hover:bg-grayButton text-blueButton": type === "left_sidebar",

    "w-56 flex gap-2": width === "lg",

    "w-[27rem] flex gap-2 flex-col text-left p-5": type === "rigth_sidebar",

    "g": align === "left",

    "text-white": type === "tag",
    "text-red": type === "filter",

  });

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
};
