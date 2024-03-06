import { InputHTMLAttributes, ReactNode } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  className?: string;
}
export default function TextInput({
  id,
  icon,
  className,
  ...props
}: TextInputProps) {
  return (
    <div className="flex items-center">
      {icon}
      <input
        {...props}
        id={id}
        className={`${className} w-full rounded-sm border border-slate-400 bg-white px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-not-allowed disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-graydark`}
      />
    </div>
  );
}
