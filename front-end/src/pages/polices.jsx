


import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";


const Polices = () => {
  // const [policies, setPolicies] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://59d5-77-28-131-181.ngrok-free.app/api/policies", {
  //       headers: {
  //         "ngrok-skip-browser-warning": "69420",
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((res) => setPolicies(res.data))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div className="bg-gray-100 tracking-widest">
      <div className="flex min-h-screen">
        {/* Sidebar Navigation */}
        <div className="bg-[#3CA082] text-white w-64 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center mb-8">
              <img src="./images/download.png" className="w-full" alt="Logo" />
            </div>
            <nav>
                    <Link to="/profile" className="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2">
                      <i className="fas fa-user"></i>
                      <span className="ml-2 text-white">Профил</span>
                    </Link>
                    <Link to="/polices" className="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2">
                      <i className="fas fa-file-alt"></i>
                      <span className="ml-2 text-white">Полиси</span>
                    </Link>
                    <Link to="/damages" className="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2">
                      <i className="fas fa-exclamation-triangle"></i>
                      <span className="ml-2 text-white">Штети</span>
                    </Link>
                    <Link to="/invoices" className="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2">
                      <i className="fas fa-receipt"></i>
                      <span className="ml-2 text-white">Фактури</span>
                    </Link>
                    <Link to="#" className="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2">
                      <i className="fa-solid fa-phone"></i>
                      <span className="ml-2 text-white">Контакт</span>
                    </Link>
                    <Link to="#" className="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2">
                      <i className="fa-solid fa-gear"></i>
                      <span className="ml-2 text-white">Поставки</span>
                    </Link>
                  </nav>
          </div>
          <div className="text-center py-2 px-4 w-full">
            <p
              className="text-sm rounded-full text-center bg-[#BBBBBB] -mt-2 absolute"
              style={{ padding: "1.5px" }}
            >
              Тука сме да ти помогнеме!
            </p>
            <div className="text-left">
              <i className="fa-solid fa-comment text-5xl"></i>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <header className="flex items-center justify-between mb-8">
            <div className="text-[#3CA082]">
              <i className="fa-solid fa-phone-volume text-2xl"></i>
              0800 80 000
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full flex justify-between items-center bg-white py-2 px-4">
                <input
                  type="text"
                  placeholder="Пребарувај"
                  className="outline-none py-2 px-4"
                />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <i className="fa-solid fa-bell text-[#3CA082] text-xl"></i>
              <i className="fa-solid fa-earth-americas text-[#3CA082] text-xl"></i>
            </div>
          </header>

          <section className="bg-white rounded-lg shadow-lg p-8 relative">
            <div
              className="rounded-xl"
              style={{
                borderTop: "30px solid #3ca082",
                borderBottom: "30px solid #3ca082",
              }}
            >
              <h1 className="text-2xl font-bold text-white absolute top-[8%] left-[45%]">
                Полиси
              </h1>
              <div className="mb-4 mt-2 flex justify-between items-center">
                <div className="w-[60%] flex gap-3">
                  <select className="text-center border rounded-lg py-2 px-4 w-1/2 border-[#3ca082]">
                    <option>-- Изберете полиси --</option>
                    <option value="car">Полиса за возило</option>
                    <option value="travel">Полиса за патување</option>
                    <option value="bicycle">Полиса за велосипед</option>
                  </select>

                  <select className="text-center border rounded-lg py-2 px-4 w-1/2 border-[#3ca082]">
                    <option>-- Активни полиси --</option>
                    <option value="car">Полиса за возило</option>
                    <option value="travel">Полиса за патување</option>
                  </select>
                </div>
                <button className="bg-[#3CA082] text-white py-2 px-4 rounded-lg w-2/12">
                  <i className="fa-solid fa-circle-plus text-lg"></i> Купи Полиса
                </button>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#3CA082] text-white">
                    <th className="border-b border-[#3ca082] py-2 px-4 text-sm">
                      Тип
                    </th>
                    <th className="border-b border-[#3ca082] py-2 px-4 text-sm">
                      Број на полиса
                    </th>
                    <th className="border-b border-[#3ca082] py-2 px-4 text-sm">
                      Пакет
                    </th>
                    <th className="border-b border-[#3ca082] py-2 px-4 text-sm">
                      Бр.На лица
                    </th>
                    <th className="border-b border-[#3ca082] py-2 px-4 text-sm">
                      Осигуреници
                    </th>
                    <th className="border-b border-[#3ca082] py-2 px-4 text-sm">
                      Рок
                    </th>
                    <th className="border-b border-[#3ca082] py-2 px-4 text-sm">
                      Цена
                    </th>
                    <th className="border-b border-[#3ca082] py-2 px-4 text-sm">
                      Платено со
                    </th>
                    <th className="border-b border-[#3ca082] py-2 px-4 text-sm">
                      Преземи
                    </th>
                  </tr>
                </thead>
                <tbody>
                  
                    <tr className="text-center">
                      <td className="border-b border-[#3ca082] py-2 px-4">
                      <i class="fa-solid fa-person-biking"></i>
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        PO-12345678
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">

                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                       
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        Jane Doe
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        2023-05-06
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        2341 ден.
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        Картичка
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4 cursor-pointer">
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          PDF
                        </a>
                      </td>
                    </tr>
                
                    <tr className="text-center">
                      <td className="border-b border-[#3ca082] py-2 px-4">
                      <i class="fa-solid fa-person-biking"></i>
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        PO-12345678
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">

                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                       
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        Jane Doe
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        2023-05-06
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        2341 ден.
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        Картичка
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4 cursor-pointer">
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          PDF
                        </a>
                      </td>
                    </tr>

                    <tr className="text-center">
                      <td className="border-b border-[#3ca082] py-2 px-4">
                      <i class="fa-solid fa-person-biking"></i>
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        PO-12345678
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">

                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                       
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        Jane Doe
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        2023-05-06
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        2341 ден.
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4">
                        Картичка
                      </td>
                      <td className="border-b border-[#3ca082] py-2 px-4 cursor-pointer">
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          PDF
                        </a>
                      </td>
                    </tr>
                </tbody>
              </table>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl text-white absolute bottom-[11%] left-[35%]">
                  Вкупен износ на долг:{" "}
                  <span className="font-bold">3600 ден.</span>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center mt-2">
              <i className="fa-solid fa-angles-left text-2xl"></i>
              <button className="mx-2 p-1 rounded-full">1</button>
              <button className="mx-2 p-1 rounded-full">2</button>
              <button className="mx-2 p-1 rounded-full">3</button>
              <i className="fa-solid fa-angles-right text-2xl"></i>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Polices;
