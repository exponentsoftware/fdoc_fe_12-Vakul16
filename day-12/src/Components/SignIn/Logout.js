import React from "react";
import auth from "./auth";
import Categories from '../Categories'
import './Login.css'
// import styled from 'styled-components';
const Logout = props => {
  return (
    <div className="login">
         <Categories />
      {/* <h1>App Layout</h1> */}
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/categories");
          });
        }}
      >
        LOGOUT FROM SPOTIFY
      </button>
    </div>
  );
};
export default Logout;

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