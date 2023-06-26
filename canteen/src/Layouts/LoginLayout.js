import { LoginHeader } from '../Components/Header.js';
import { LoginForm } from '../Components/LoginForm.js';
import {TopNav} from '../Components/TopNav.js';

const LoginLayout = () => {
  return (
    <div>
      <TopNav/>
      <LoginHeader/>
      <LoginForm/>
    </div>
  );
};

export default LoginLayout;
