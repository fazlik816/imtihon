import type { ReactNode } from "react";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  className: string;
  id: string;
  type: string;
  placeholder: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Input = <T extends FieldValues>({
  form,
  name,
  label,
  id,
  type,
  className = "",
  placeholder,
  leftIcon,
  rightIcon,
}: InputProps<T>) => {
  const errorMessage = form.formState.errors[name]?.message as
    | string
    | undefined;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id ?? name}
          className="text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            {leftIcon}
          </span>
        )}

        <input
          type={type}
          id={id ?? name}
          placeholder={placeholder}
          className={`w-full rounded-xl border bg-white py-3 text-sm text-slate-900 placeholder:text-slate-400 transition outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-50 ${
            leftIcon ? "pl-10" : "pl-4"
          } ${rightIcon ? "pr-10" : "pr-4"} ${
            errorMessage
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
          } ${className}`}
          {...form.register(name)}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            {rightIcon}
          </span>
        )}
      </div>

      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};
export default Input;
