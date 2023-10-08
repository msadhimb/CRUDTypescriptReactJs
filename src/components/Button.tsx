interface ButtonProps {
  background: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  background,
  text,
  className,
  onClick,
}) => {
  return (
    <button
      className={`${className} bg-${background} text-white px-5 py-2 mx-1 rounded text-sm font-medium transition duration-300 ease-in-out`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
