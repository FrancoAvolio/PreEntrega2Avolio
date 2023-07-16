import { useContext, useState } from 'react';
import './LoginScreen.scss';
import { AuthContext } from '../../context/AuthContext';

const LoginScreen = () => {
  const {login} = useContext(AuthContext)

  const [values, setValues] = useState({ email: '', password: '' });
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    login(values)
  };
  return (
    <div className="auth-container">
      <div className="auth-modal">
        <h2>Login</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            value={values.email}
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            className="form-control my-3"
            name="email"
          />
          <input
            value={values.password}
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
            className="form-control my-3"
            name="password"
          />
          <button className="btn btn-dark " type="submit">
            Iniciar sesion
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
