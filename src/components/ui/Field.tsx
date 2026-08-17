import {
  useId,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/cn";

type BaseProps = {
  label: string;
  className?: string;
};

type InputFieldProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & { multiline?: false };

type TextareaFieldProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { multiline: true };

export type FieldProps = InputFieldProps | TextareaFieldProps;

/** Underline-only field, no boxed input — see Art-Direction-Konzept, §11. */
const controlClass =
  "w-full border-0 border-b border-line-strong bg-transparent px-0.5 py-1.5 font-serif text-base text-ink outline-none transition-[border-color,border-width] duration-150 focus:border-b-2 focus:border-accent";

export function Field({ label, className, multiline, ...props }: FieldProps) {
  const id = useId();
  return (
    <div className={cn("flex flex-col", className)}>
      <label
        htmlFor={id}
        className="mb-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-ink-faint"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          className={controlClass}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          className={controlClass}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
}

export type SelectProps = {
  label: string;
  className?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "className">;

/** Same underline field, native <select> — for short, well-defined choices only (see Field). */
export function Select({ label, className, placeholder, options, ...props }: SelectProps) {
  const id = useId();
  return (
    <div className={cn("flex flex-col", className)}>
      <label
        htmlFor={id}
        className="mb-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-ink-faint"
      >
        {label}
      </label>
      <select id={id} className={controlClass} {...props}>
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
