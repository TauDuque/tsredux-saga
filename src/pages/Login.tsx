/* eslint-disable @typescript-eslint/ban-types */
import React, { useRef } from 'react';
import { loginRequest } from '../store/auth/actions';
import { connect, Connect } from 'react-redux';

const Login: React.FC<{}> = (props: any) => {
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  const callback = (data: any) => {
    console.log('dentro da callback após login');
  };

  const login = () => {
    const data: any = {
      values: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
      callback,
    };
    props.login(data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mx-auto card mt-5 p-5">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              name="email"
              id="floatingInput"
              placeholder="name@example.com"
              ref={emailRef}
            />
            <label htmlFor="floatingInput">Endereço de E-mail</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="password"
              className="form-control"
              name="password"
              id="floatingPassword"
              placeholder="Senha"
              ref={passwordRef}
            />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
          <button
            onClick={() => {
              login();
            }}
            className="w-100 btn btn-lg btn-warning mt-3"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  login: (params: any) => dispatch(loginRequest(params)),
});

export default connect(null, mapDispatchToProps)(Login);
