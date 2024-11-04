import SignIn from "../pages/signIn";
import React from "react";
import SignUp from "../pages/signup";
import LandingPage from "../pages/landing";
import {Routes, Route} from "react-router-dom";
import Damages from "../pages/damages";
import {Invoices} from "../pages/Invoices";
import Polices from "../pages/polices";
import Profile from "../pages/profile";

const AppRouter = () => {
    return (
      <Routes>
          <Route path="/signIn" element = {<SignIn/>}/>
          <Route path="/signUp" element = {<SignUp/>}/>
          <Route path="/landing" element = {<LandingPage/>}/>
          <Route path="/invoices" element= {<Invoices/>}/>
          <Route path="/profile" element = {<Profile/>}/>
          <Route path="/invoices" element = {<Invoices/>}/>
          <Route path="/damages" element = {<Damages/>}/>
          <Route path="/polices" element = {<Polices/>}/>
      </Routes>
    );
  };
  
  export default AppRouter;