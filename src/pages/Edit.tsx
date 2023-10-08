import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";

const Edit = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    nim: "any",
    nama: "any",
  });

  const handleClickLihatData = () => {
    nav("/");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getDataById = async () => {
    const colRef = collection(db, "mahasiswa");
    const docRef = doc(colRef, id);
    const unsub = onSnapshot(docRef, (doc) => {
      let results: any = [doc.data()];
      setForm({
        nim: results[0].nim,
        nama: results[0].nama,
      });

      return () => unsub;
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const colRef = collection(db, "mahasiswa");
    const docRef = doc(colRef, id);
    await updateDoc(docRef, {
      nim: form.nim,
      nama: form.nama,
    });
    nav("/list");
  };

  useEffect(() => {
    getDataById();
  }, []);

  return (
    <>
      <div className="container mx-auto flex justify-center items-center h-full relative">
        <Card>
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-14">
            Update Data
          </h1>
          <form
            className="flex justify-center items-center flex-col"
            onSubmit={handleSubmit}
          >
            <Input
              label="Nomor Induk Mahasiswa"
              name="nim"
              onChange={handleChange}
              value={form.nim}
            />
            <Input
              label="Nama Lengkap"
              name="nama"
              onChange={handleChange}
              value={form.nama}
            />
            <div className="flex justify-end w-[70%]">
              <Button
                text="Update"
                className="bg-[#6a5aa5] hover:bg-[#BEADFA] "
              />
              <Button
                text="Home"
                className="bg-[#BEADFA] hover:bg-[#6a5aa5]"
                onClick={handleClickLihatData}
              />
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Edit;
