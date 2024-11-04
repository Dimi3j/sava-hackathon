import React from "react";
import { Link } from "react-router-dom";



          export const Invoices = () => {
    
    
          return (
            <div className="bg-gray-100 tracking-widest min-h-screen flex">
              {/* Sidebar */}
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
                  <p className="text-sm rounded-full text-center bg-[#BBBBBB] -mt-2 absolute" style={{ padding: '1.5px' }}>Тука сме да ти помогнеме!</p>
                  <div className="text-left">
                    <i className="fa-solid fa-comment text-5xl"></i>
                  </div>
                </div>
              </div>
        
              {/* Main Content */}
              <div className="flex-1 p-8">
                {/* Header */}
                <header className="flex items-center justify-between mb-8">
                  <div className="text-[#3CA082]">
                    <i className="fa-solid fa-phone-volume text-2xl"></i>
                    0800 80 000
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full flex justify-between items-center bg-white py-2 px-4">
                      <input type="text" placeholder="Пребарувај" className="outline-none py-2 px-4" />
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <i className="fa-solid fa-bell text-[#3CA082] text-xl"></i>
                    <i className="fa-solid fa-earth-americas text-[#3CA082] text-xl"></i>
                  </div>
                </header>
        
                {/* Main Section */}
                <section className="bg-white rounded-lg shadow-lg p-8 relative">
                  <div className="rounded-xl" style={{ borderTop: '30px solid #3CA082', borderBottom: '30px solid #3CA082' }}>
                    <h1 className="text-2xl font-bold text-white absolute top-[8%] left-[45%]">Фактури</h1>
                    <div className="mb-4 mt-2 flex justify-between items-center">
                      <select className="border rounded-lg py-2 px-4 w-1/3 border-[#3ca082]">
                        <option>-- Изберете фактура --</option>
                        <option value="car">Полиса за возило</option>
                        <option value="travel">Полиса за патување</option>
                        <option value="bicycle">Полиса за велосипед</option>
                        {/* Options go here */}
                      </select>
                      <button className="bg-[#3CA082] text-white py-2 px-4 rounded-lg w-2/12">Плати брзо</button>
                    </div>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#3CA082] text-white">
                          <th className="border-b border-[#3ca082] py-2 px-4">Број на фактура</th>
                          <th className="border-b border-[#3ca082] py-2 px-4">Полиси</th>
                          <th className="border-b border-[#3ca082] py-2 px-4">Осигуреници</th>
                          <th className="border-b border-[#3ca082] py-2 px-4">Рок</th>
                          <th className="border-b border-[#3ca082] py-2 px-4">Износ</th>
                          <th className="border-b border-[#3ca082] py-2 px-4">Платено со</th>
                          <th className="border-b border-[#3ca082] py-2 px-4">За плаќање</th>
                          <th className="border-b border-[#3ca082] py-2 px-4">Статус</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Repeat this <tr> for each row */}
                        <tr className="text-center">
                          <td className="border-b border-[#3ca082] py-2 px-4">F-123456/24</td>
                          <td className="border-b border-[#3ca082] py-2 px-4">
                            <select className="border-b rounded-lg py-1 px-2">
                              <option>Изберете полиси</option>
                              <option value="car">Полиса за возило</option>
                              <option value="travel">Полиса за патување</option>
                              <option value="bicycle">Полиса за велосипед</option>
                              {/* Options go here */}
                            </select>
                          </td>
                          <td className="border-b border-[#3ca082] py-2 px-4">Емилија</td>
                          <td className="border-b border-[#3ca082] py-2 px-4">28/08/2024</td>
                          <td className="border-b border-[#3ca082] py-2 px-4">0.00 ден.</td>
                          <td className="border-b border-[#3ca082] py-2 px-4"></td>
                          <td className="border-b border-[#3ca082] py-2 px-4"></td>
                          <td className="border-b border-[#3ca082] py-2 px-4 underline">Плати сега</td>
                        </tr>
                        {/* Repeat more <tr> elements as needed */}
                      </tbody>
                    </table>
                    {/* <div className="mt-4 flex items-center justify-between">
                      <span className="text-xl text-white absolute bottom-[15%] left-[35%]">Вкупен износ на долг: <span className="font-bold">3600 ден.</span></span>
                    </div> */}
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
          );
        };
        
        export default Invoices;
        
    
   