import { FormBody } from "../components/elements/FormBody";
import { FormNavbarTop } from "../components/elements/FormNavbarTop";
import { FormNavbarBot } from "../components/elements/FormNavbarBot";
import "../custom-styles.css";

export const Form = () => {
  return (
    <form className="grid-custom min-h-[840px] h-dvh">
      <FormNavbarTop />
      <FormBody />
      <FormNavbarBot />
    </form>
  );
};
