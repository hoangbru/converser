import { FieldValues, SubmitErrorHandler, useForm } from "react-hook-form";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { HiOutlinePaperClip } from "react-icons/hi2";
import MessageInput from "./MessageInput";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitErrorHandler<FieldValues> = () => {};

  return (
    <div
      className="
        py-4 
        px-4
        bg-transparent
        flex 
        items-center 
        gap-2 
        lg:gap-4 
        w-full
        "
    >
      <HiOutlinePaperClip
        className="
            cursor-pointer
            text-white
            hover:text-indigo-500
            transition
            "
        size={20}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Insert a message..."
        />
        <button
          type="submit"
          className="
            cursor-pointer 
          "
        >
          <HiOutlinePaperAirplane
            size={20}
            className="text-white hover:text-indigo-400 transition"
          />
        </button>
      </form>
    </div>
  );
};

export default Form;
