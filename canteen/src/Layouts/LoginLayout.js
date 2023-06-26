import { LoginHeader } from '../Components/Header.js';
import { LoginForm } from '../Components/LoginForm.js';
import {TopNav} from '../Components/TopNav.js';
import {Outlet} from "react-router-dom";
export const LoginLayout = () => {
  return (
    <div>
      <TopNav/>
      <LoginHeader/>
      <LoginForm/>
      <Outlet/>
    </div>
  );
};


