import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({
    nim: "",
    nama: "",
  });

  const handleClickLihatData = () => {
    nav("/list");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addDoc(collection(db, "mahasiswa"), form);
    setForm({
      nim: "",
      nama: "",
    });
    nav("/list");
  };

  return (
    <>
      <div className="container mx-auto flex justify-center items-center h-full relative">
        <Card>
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-14">
            CRUD TypeScript ReactJS
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
                background="[#6a5aa5]"
                text="Submit"
                className="hover:bg-[#BEADFA] "
              />
              <Button
                background="[#BEADFA]"
                text="Lihat Data"
                className="hover:bg-[#6a5aa5]"
                onClick={handleClickLihatData}
              />
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Home;
