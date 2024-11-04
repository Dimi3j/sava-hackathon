// import { useUserStore } from "../user-store/userStore";

// const DUMMY_USER = {
//   email: "example@gmail.com",
//   bio: "",
//   user_type: "USER", 
//   fullname: "Nikola Dimov",
//   username: "Dimov",
//   interests: [],
//   tutorial: false,
//   subscription_type: "FREE",
//   cultures: [],
//   favoriteCategories: [],
//   favoriteMovies: ["123", "244", "333"],
// };

// const Signup = () => {
//   const setUser = useUserStore((state) => state.setUser);

//   const handleLogin = () => {
//   //   setUser(DUMMY_USER);
//   //   localStorage.setItem("user", JSON.stringify(DUMMY_USER));
//   };
const Signup = () => {
  return (
    <div>
      
      <div className="container">
      {
        <div className="flex justify-between gap-3">
          <h2 className="text-center">Регистрирај се</h2>
        <form className="w-1/2">
        <div class=" p-1 border-1 border-black rounded-lg relative m-3 ">
          <label
            htmlFor="username"
            class="absolute bg-white -top-4 left-4"
          >
            Име и пезиме
          </label>
          <input
            type="text"
            class="outline-none  rounded-lg w-1/3"
            id="username"
            // value={username}
          />
        </div>
        <div class="p-1 relative m-3 border-1 rounded-lg  border-black ">
          <label
            htmlFor="password"
            class="absolute bg-white -top-4 left-4"
          >
            Телефон
          </label>
          <input
            type="password"
            class="outline-none  border-black rounded-lg w-1/3"
            id="password"
            // value={password}
          />
        </div>
        <div class="p-1 relative m-3 border-1 rounded-lg  border-black ">
          <label
            htmlFor="password"
            class="absolute bg-white -top-4 left-4"
          >
            Емаил
          </label>
          <input
            type="password"
            class="outline-none  border-black rounded-lg w-1/3"
            id="password"
            // value={password}
          />
        </div>
        <div class="p-1 relative m-3 border-1 rounded-lg  border-black ">
          <label
            htmlFor="password"
            class="absolute bg-white -top-4 left-4"
          >
            Лозинка
          </label>
          <input
            type="password"
            class="outline-none  border-black rounded-lg w-1/3"
            id="password"
            // value={password}
          />
        </div>
        <div class="p-1 relative m-3 border-1 rounded-lg  border-black ">
          <label
            htmlFor="password"
            class="absolute bg-white -top-4 left-4"
          >
            Потврди пасворд
          </label>
          <input
            type="password"
            class="outline-none  border-black rounded-lg w-1/3"
            id="password"
            // value={password}
          />
        </div>
        <div class="relative ">
          <button
            type="submit"
            class="absolute left-[15%] text-center ml-5 p-2  bg-[#3CA082] text-white rounded-xl w-3/5 flex justify-center"
          >
            Регистрирај се
          </button>
        </div>
      </form>
      <div className="img-sign">
        <img src="/img/phone2.png" alt="" />
      </div>
      </div>
      }
      </div>
      {/* <button onClick={handleLogin}>Log in</button> */}
    </div>

  );
};

export default Signup;
