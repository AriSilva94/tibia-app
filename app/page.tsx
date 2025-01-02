import Dashboard from "@/components/Dashboard/page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <div className="max-w-[2000px] mx-auto grid grid-cols-12 gap-4">
        {/* Espaço para propaganda à esquerda (visível somente em telas grandes) */}
        <div className="col-span-2 bg-gray-200 hidden lg:block text-center">
          PROPAGANDA
        </div>

        {/* Conteúdo centralizado */}
        <div className="col-span-12 lg:col-span-8">
          {/* <SignInPage/> */}
          <Dashboard />
        </div>

        {/* Espaço para propaganda à direita (visível somente em telas grandes) */}
        <div className="col-span-2 bg-gray-200 hidden lg:block text-center">
          PROPAGANDA
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
