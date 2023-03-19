import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../signin/signin.css";
import * as IoIcons from 'react-icons/io';
import { useAuth } from '../../hooks/useAuth';

// function fetchData() {
//   fetch('http://127.0.0.1:8081/api/videos?user_id=1&theme_id=2', {
//     method: 'GET',
//     mode: 'no-cors'
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// function MyComponent() {
//   useEffect(() => {
//     fetchData();
//   }, []);
// }


export const LoginForm = props =>{
    // MyComponent();

    return(
      <div id="loginform">
        <FormHeader title="Login" />
        <Form setUsername={props.setUsername} loginClickFunc = {props.loginClickFunc}/>
        <OtherMethods />
      </div>
    );
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);

const Form = props => (
 <div>
   <FormInput setUsername={props.setUsername} description="Username" placeholder="Enter your username" type="text" />
   <FormInput description="Password" placeholder="Enter your password" type="password"/>
   <FormButton loginClickFunc={props.loginClickFunc} title="Log in"/>
 </div>
);

const FormButton = props => (
  <div id="button" className="row">
    <button onClick={props.loginClickFunc}>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div className="row">
    <label>{props.description}</label>
    <input onChange={e => props.setUsername(e.target.value)} type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Google />
    </div>
  </div>
);

export function Google(){
  return(
    <div>
      <Link to={"login/google"}>
        {<IoIcons.IoLogoGoogle/>}
        <span>{"Google"}</span>
      </Link>
    </div>
  );
}
export const Signin = () => {
  const [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSigin = () => {
    auth.signin(user);
    navigate('/')
  }
  return (
    <div id='sign-in'>
      <LoginForm setUsername={setUser} loginClickFunc={handleSigin}/>
    </div>
  );
}

export default Signin;