interface TableProps {
  children?: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-center bg-[#BEADFA] uppercase ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nama
            </th>
            <th scope="col" className="px-6 py-3">
              Nim
            </th>
            <th scope="col" className="px-6 py-3 max-w-[2rem]">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
