import React from "react";
import auth from "./auth";
import './Login.css'
// import styled from 'styled-components';
const Login = props => {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <button
        onClick={() => {
          auth.login(() => {
            props.history.push("/categories");
          });
        }}>
          LOGIN TO SPOTIFY</button>
    </div>
  );
};
export default Login;

// const Div = styled.div`
// .login {
//   display: grid;
//   background-color: black;
//   height: 100vh;
//   place-items: center;
// }

// .login > img {
//   height: 200px;
//   padding: 0px 30px 0px 0px;
// }

// .login > button {
//   color: white;
//   text-decoration: none;
//   padding: 20px;
//   border-radius: 99px;
//   border: none;
//   font-weight: 800;
//   background-color: #1db954;
// }
// `;

