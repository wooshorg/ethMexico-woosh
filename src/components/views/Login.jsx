import MagicLogin from '../auth/MagicLogin';
import { userContext } from '../../context/userContext';
import Header from '../layout/Header';

const Login = () => {
  const { account } = userContext;
  return (
    <>
      <div className="container">
        <Header></Header>
        {!account && <MagicLogin />}
      </div>
    </>
  );
};

export default Login;
