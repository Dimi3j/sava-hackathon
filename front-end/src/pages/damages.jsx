


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faExclamationTriangle, faReceipt, faPhone, faGear, faComment, faPhoneVolume, faMagnifyingGlass, faBell, faEarthAmericas, faCirclePlus, faCaretRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import { AsideHeader } from "../components/AsideHeader";

const Damages = () => {
  const ClaimStatus = ({ status, isCompleted }) => (
    <div className="flex flex-col justify-center items-center">
      <span className={`rounded-full h-20 w-20 flex items-center justify-center ${isCompleted ? 'bg-[#3CA082]' : 'bg-white border border-[#3CA082]'}`}>
        {isCompleted ? <FontAwesomeIcon icon={faCheck} className="text-white text-xl" /> : <span className="bg-[#3CA082] rounded-full h-6 w-6"></span>}
      </span>
      <span className="text-[#3CA082] mt-2">{status}</span>
    </div>
  );
  
  const StatusDivider = ({ isGradient }) => (
    <div className={`w-36 h-1 ${isGradient ? 'bg-gradient-to-r from-[#3CA082]' : 'bg-[#3CA082]'}`}></div>
  );

  return (
    <div className="container-bg damages">
      <div className="flex min-h-screen">
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
          {/* <AsideHeader/> */}
          <div className="text-center py-2 px-4 w-full">
            <p className="text-sm rounded-full text-center bg-[#BBBBBB] absolute">
              Тука сме да ти помогнеме!
            </p>
            <div className="text-left">
              <FontAwesomeIcon icon={faComment} className="text-5xl" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <header className="flex items-center justify-between mb-8">
            <div className="text-[#3CA082]">
              <FontAwesomeIcon icon={faPhoneVolume} className="text-2xl" />
              0800 80 000
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full flex justify-between items-center bg-white py-2 px-4">
                <input type="text" placeholder="Пребарувај" className="outline-none py-2 px-4" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <FontAwesomeIcon icon={faBell} className="text-[#3CA082] text-xl" />
              <FontAwesomeIcon icon={faEarthAmericas} className="text-[#3CA082] text-xl" />
            </div>
          </header>

          {/* Main Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 relative">
            <div className="rounded-xl" style={{ borderTop: '30px solid #3ca082' }}>
              <h1 className="text-2xl font-bold text-white absolute top-[4%] left-[45%]">
                Штети
              </h1>
              <div className="mb-4 mt-2 flex justify-between items-center">
                <select className="border rounded-lg py-2 px-4 w-1/3 border-[#3ca082]">
                  <option className="text-center">Сите</option>
                  <option className="text-center" value="car">Полиса за возило</option>
                  <option className="text-center" value="travel">Полиса за патување</option>
                  <option className="text-center" value="bicycle">Полиса за велосипед</option>
                </select>
                <button className="bg-[#3CA082] text-white py-2 px-4 rounded-lg w-2/12">
                  <FontAwesomeIcon icon={faCirclePlus} className="text-lg" /> Пријави штета
                </button>
              </div>

              <div className="mt-12 flex gap-3">
                <div className="w-3/12">
                  <h1 className="text-2xl font-bold text-[#3CA082]">
                    Пријавени штети
                  </h1>
                  <div className="mt-3 flex flex-col gap-3">
                    <ClaimButton bgColor="#3CA082" textColor="white" claimId="PO-12345678" />
                    <ClaimButton bgColor="#C3DCD7" textColor="black" claimId="PO-12345678" />
                    <ClaimButton bgColor="#C3DCD7" textColor="black" claimId="PO-12345678" />
                    <ClaimButton bgColor="#C3DCD7" textColor="black" claimId="PO-12345678" />
                    <ClaimButton bgColor="#C3DCD7" textColor="black" claimId="PO-12345678" />
                    <ClaimButton bgColor="#C3DCD7" textColor="black" claimId="PO-12345678" />
                    <ClaimButton bgColor="#C3DCD7" textColor="black" claimId="PO-12345678" />
                  </div>
                </div>

                <div className="w-8/12 rounded-2xl border border-[#3CA082]">
                  <div className="bg-gradient-to-r from-[#3CA082] text-white p-3 rounded-t-2xl">
                    <span className="text-xl border-b border-white p-2">PO-12345678</span>
                  </div>

                  <div className="flex justify-center items-center mt-[20%]">
                    <ClaimStatus status="Побарано" isCompleted />
                    <StatusDivider />
                    <ClaimStatus status="Одобрено" isCompleted />
                    <StatusDivider isGradient />
                    <ClaimStatus status="Исплатено" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ href, icon, text }) => (
  <a href={href} className="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2">
    <FontAwesomeIcon icon={icon} />
    <span className="ml-2">{text}</span>
  </a>
);

const ClaimButton = ({ bgColor, textColor, claimId }) => (
  <button className={`rounded-xl py-3 px-4`} style={{ backgroundColor: bgColor, color: textColor }}>
    {claimId}
    <FontAwesomeIcon icon={faCaretRight} className={`text-${textColor} text-xl`} />
  </button>
);

export default Damages;
