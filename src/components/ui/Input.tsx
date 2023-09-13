import clsx from "clsx";
import { 
  FieldErrors, 
  FieldValues, 
  UseFormRegister 
} from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
  disabled?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  register,
  errors,
  type = 'text',
  disabled,
  placeholder
}) => {
  return ( 
    <div>
      <label 
        htmlFor={id} 
        className="
          block 
          text-sm 
          font-medium 
          leading-6 
          text-black
        "
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeholder}
          {...register(id, { required: "This field is required" })}
          className={clsx(`
            form-input
            block 
            w-full 
            rounded-md 
            border-0 
            px-2
            py-1.5 
            text-black
            shadow-sm 
            ring-1 
            ring-inset 
            ring-gray-200 
            placeholder:text-gray-400 
            focus:ring-2 
            focus:ring-inset 
            focus:ring-indigo-500 
            sm:text-sm 
            sm:leading-6`,
            errors[id] && 'focus:ring-rose-500',
            disabled && 'opacity-50 cursor-default'
          )}
        />
      </div>
    </div>
   );
}
 
export default Input;