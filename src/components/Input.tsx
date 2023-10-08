interface InputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: any) => void;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  placeholder = "",
  required = false,
  onChange,
  value,
}) => {
  return (
    <div className="relative z-0 mb-6 group w-[70%]">
      <input
        type={type}
        name={name}
        id={name}
        className="block py-2.5 px-0 text-sm text-[#6a5aa5] w-full bg-transparent border-0 border-b-2 border-[#BEADFA] appearance-none  focus:outline-none focus:ring-0 focus:border-[#BEADFA] peer"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-sm text-[#6a5aa5] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#BEADFA] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
