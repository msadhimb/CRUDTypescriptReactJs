interface CardProps {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <>
      <div className="bg-white min-w-[50rem] min-h-fit p-5 rounded shadow-md">
        {children}
      </div>
    </>
  );
};

export default Card;
