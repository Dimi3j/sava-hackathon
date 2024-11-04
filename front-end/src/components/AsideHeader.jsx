
import React from "react";
import { Link } from "react-router-dom";

export function AsideHeader() {
  return (
    <div className="bg-gray-100 tracking-widest">
      <div className="flex min-h-screen">
        <div className="bg-[#3CA082] text-white w-64 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center mb-8">
              <img src="./images/download.png" className="w-full" alt="Logo" />
            </div>
            <nav>
              <Link to="/profile"
                className="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2"
              >
                <i className="fas fa-user"></i>
                <span className="ml-2 text-white">Профил</span>
              </Link>
              <Link to="/polices"
                className="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2"
              >
                <i className="fas fa-file-alt"></i>
                <span className="ml-2 text-white">Полиси</span>
              </Link>
              <Link to="/damages"
                className="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2"
              >
                <i className="fas fa-exclamation-triangle"></i>
                <span className="ml-2 text-white">Штети</span>
              </Link>
              <Link to="/invoices"
                className="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2"
              >
                <i className="fas fa-receipt"></i>
                <span className="ml-2 text-white">Фактури</span>
              </Link>
              <Link to="#"
                className="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2"
              >
                <i className="fa-solid fa-phone"></i>
                <span className="ml-2 text-white">Контакт</span>
              </Link>
              <Link to="#"
                className="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2"
              >
                <i className="fa-solid fa-gear"></i>
                <span className="ml-2 text-white">Поставки</span>
              </Link>
            </nav>
          </div>
          <div className="text-center py-2 px-4 w-full">
            <p className="text-sm rounded-full text-center bg-[#BBBBBB] -mt-2 absolute" style={{ padding: "1.5px" }}>
              Тука сме да ти помогнеме!
            </p>
            <div className="text-left">
              <i className="fa-solid fa-comment text-5xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
