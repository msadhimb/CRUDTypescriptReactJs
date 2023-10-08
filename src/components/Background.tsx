import { Outlet } from "react-router-dom";

const Background = () => {
  return (
    <section className="h-screen w-full relative">
      <div className="bg-[#BEADFA] h-[50vh] w-full absolute top-0" />
      <Outlet />
    </section>
  );
};

export default Background;
