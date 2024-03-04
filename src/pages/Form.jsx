import { useForm } from "react-hook-form";

import { FormBody } from "../components/elements/FormBody";
import { FormNavbarTop } from "../components/elements/FormNavbarTop";
import { FormNavbarBot } from "../components/elements/FormNavbarBot";
import "../custom-styles.css";

import { useNavigate } from "react-router-dom";
import { API_URL } from "../api";

const getRandomNumberUpToN = (n) => Math.floor(Math.random() * n) + 1;
const getRandomBoolean = () => Math.random() >= 0.5;
const transformTagsToArray = (tagsString) => tagsString.split(", ");

export const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //Necesitamos añadir propiedades extra para filtrar por fecha, rating y reelevancia.
    const dataWithFilterUtilities = {
      ...data,
      rating: getRandomNumberUpToN(10),
      revelant: getRandomBoolean(),
      reactions: getRandomNumberUpToN(100),
      comments: getRandomNumberUpToN(100),
      readingTime: getRandomNumberUpToN(20),
      tags: transformTagsToArray(data.tags), //aprovecharé para mandar un array de tags al servidor en lugar de solo texto
      author: localStorage.getItem("user"),
    };
    console.log(dataWithFilterUtilities);

    try {
      fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(dataWithFilterUtilities),
      });
    } catch (error) {
      console.error(error);
    }
    navigate("/");
  };
  return (
    <div className=" bg-neutral-200">
      <form
        className="grid-custom min-h-[840px] h-dvh"
        onSubmit={handleSubmit(onSubmit)}>
        <FormNavbarTop />
        <FormBody register={register} errors={errors} />
        {/* faBold */}
      </form>
    </div>
  );
};
