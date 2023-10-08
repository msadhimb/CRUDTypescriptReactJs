import Button from "../components/Button";
import Card from "../components/Card";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const List = () => {
  const nav = useNavigate();
  const [dataMahasiswa, setDataMahasiswa] = useState<{ id: string }[]>([]);

  const handleClickKembali = () => {
    nav("/", { replace: true });
  };

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "mahasiswa"));
    const dataDocs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDataMahasiswa(dataDocs);
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "mahasiswa", id));
    getData();
  };

  const handleEdit = async (id: string) => {
    nav(`/edit/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container mx-auto flex justify-center items-center h-full relative">
        <Card>
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-14">
            List Data Mahasiswa
          </h1>
          <Button
            text="Kembali"
            className="mb-3 bg-[#6a5aa5] hover:bg-[#BEADFA]"
            onClick={handleClickKembali}
          />
          <Table>
            {dataMahasiswa.map((data: any) => (
              <tr className="text-center" key={data.id}>
                <td className="px-6 py-4 whitespace-nowrap">{data.nama}</td>
                <td className="px-6 py-4 whitespace-nowrap">{data.nim}</td>
                <td className="w-auto  flex  justify-center my-2">
                  <Button
                    text="Edit"
                    className="mr-2 bg-[#6a5aa5] hover:bg-[#BEADFA]"
                    onClick={() => handleEdit(data.id)}
                  />
                  <Button
                    text="Hapus"
                    className="bg-[#BEADFA] hover:bg-[#6a5aa5]"
                    onClick={() => handleDelete(data.id)}
                  />
                </td>
              </tr>
            ))}
          </Table>
        </Card>
      </div>
    </>
  );
};

export default List;
