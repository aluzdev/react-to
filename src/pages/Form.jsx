import { useForm } from "react-hook-form";

import { FormBody } from "../components/elements/FormBody";
import { FormNavbarTop } from "../components/elements/FormNavbarTop";
import { FormNavbarBot } from "../components/elements/FormNavbarBot";
import "../custom-styles.css";

const getRandomNumberBetweenOneAndTen = () =>
  Math.floor(Math.random() * 10) + 1;
const getRandomBoolean = () => Math.random() >= 0.5;
const transformTagsToArray = (tagsString) => tagsString.split(", ");

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //Necesitamos añadir propiedades extra para filtrar por fecha, rating y reelevancia.
    const dataWithFilterUtilities = {
      ...data,
      rating: getRandomNumberBetweenOneAndTen(),
      revelant: getRandomBoolean(),
      creationDate: new Date(),
      tags: transformTagsToArray(data.tags), //aprovecharé para mandar un array de tags al servidor en lugar de solo texto
    };
    console.log(dataWithFilterUtilities);
  };
  return (
    <form
      className="grid-custom min-h-[840px] h-dvh"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormNavbarTop />
      <FormBody register={register} errors={errors} />
      <FormNavbarBot />
    </form>
  );
};
