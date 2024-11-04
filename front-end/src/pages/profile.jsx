import { AsideHeader } from "../components/AsideHeader";



const Profile = () => {
  
  return (
    <div className="bg-profile d-flex">
      <AsideHeader/>
    <div className="p-3" style={{ backgroundColor: '#e6e6e6' }}>
      <header>
        <div className="d-flex">
          <div>
            {/* <h3>0800 80 000</h3> */}
          </div>
          <div className="d-flex align-items-center ms-auto">
            <input type="text" className="rounded-pill form-control" placeholder="Пребарувај" />
            <i className="fa-solid fa-bell fs-4 px-2"></i>
            <i className="fa-solid fa-earth-africa fs-4"></i>
          </div>
        </div>
      </header>
      <main>
        <div className="d-flex p-5 gap-1">
          <div className="card w-75" style={{ borderRadius: '2em' }}>
            <div>
              <div className="d-flex">
                <div className="w-75">
                  <div id="namepic" className="d-flex gap-3 align-items-center p-4">
                    <img
                      src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
                      width="100"
                      height="100"
                      className="rounded-circle object-fit-cover"
                      alt="profile"
                    />
                    <p>Jane Doe</p>
                  </div>
                  <div className="d-flex p-4">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle rounded-pill"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Статистика на полиси
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                    <div className="dropdown ms-auto">
                      <button
                        className="btn btn-secondary dropdown-toggle rounded-pill"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Aпр-Авг
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <img src="../../images/chart.png" width="500" alt="chart" />
                  </div>
                </div>
                <div id="4 carti" className="d-grid w-25 p-5 gap-3" style={{ gridTemplateColumns: 'auto' }}>
                  <div className="grad1 border-success rounded-2">
                    <h2>8</h2> во тек
                  </div>
                  <div className="grad1 border-success rounded-2">
                    <h2>5</h2> на пауза
                  </div>
                  <div className="grad1 border-success rounded-2">
                    <h2>12</h2> завршени
                  </div>
                  <div className="grad1 border-success rounded-2">
                    <h2>9</h2> во претстојни
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="d-flex justify-content-between">
                  <h5>Патничко осигурување</h5>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '30%', backgroundColor: '#3ef5a9' }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <h5>Велосипедско осигурување</h5>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '70%', backgroundColor: 'lightgray' }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <h5>Домајнско осигурување</h5>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '100%', backgroundColor: '#7cffe9' }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-25 p-5" style={{ borderRadius: '2em' }}>
            <div className="d-grid gap-2" style={{ gridTemplateColumns: 'auto auto' }}>
              <div className="border border-success rounded-2 d-flex align-items-center p-2 w-100">
                <i className="fa-regular fa-circle fs-1 mx-2"></i>
                <h5>8</h5>
                <p>активни полиси</p>
              </div>
              <div className="border border-success rounded-2 d-flex align-items-center p-2 w-100">
                <img
                  src="https://static-00.iconduck.com/assets.00/mastercard-icon-1024x793-xinze39n.png"
                  width="100"
                  alt="mastercard"
                />
              </div>
              <div className="border border-success rounded-2 d-flex align-items-center p-2 w-100">
                <i className="fa-regular fa-circle fs-1 mx-2"></i>
                <h5>1 активни полиси</h5>
                <p>активни полиси</p>
              </div>
              <div className="border border-success rounded-2 d-flex align-items-center p-2 w-100">
                <img
                  src="https://static-00.iconduck.com/assets.00/mastercard-icon-1024x793-xinze39n.png"
                  width="100"
                  alt="mastercard"
                />
              </div>
              <div className="border border-success rounded-2 d-flex align-items-center p-2 w-100">
                <i className="fa-regular fa-circle fs-1 mx-2"></i>
                <h5>3 активни полиси</h5>
                <p>активни полиси</p>
              </div>
              <div className="border border-success rounded-2 d-flex align-items-center p-2 w-100">
                <img
                  src="https://static-00.iconduck.com/assets.00/mastercard-icon-1024x793-xinze39n.png"
                  width="100"
                  alt="mastercard"
                />
              </div>
            </div>
            <div>
              <div className="p-2">
                <p>
                  <img
                    src="https://static-00.iconduck.com/assets.00/mastercard-icon-1024x793-xinze39n.png"
                    width="50"
                    alt="mastercard"
                  />{' '}
                  **** **** **** 1234 06/24 <strong>Примарна</strong>
                </p>
                <p>
                  <img
                    src="https://static-00.iconduck.com/assets.00/mastercard-icon-1024x793-xinze39n.png"
                    width="50"
                    alt="mastercard"
                  />{' '}
                  **** **** **** 1234
                </p>
              </div>
            </div>
            <div>
                <div className="calendar">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th
                          colSpan="7"
                          style={{ backgroundColor: '#30bf83' }}
                          className="text-white"
                        >
                          June 2024
                        </th>
                      </tr>
                      <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="today">1</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default Profile;


    


