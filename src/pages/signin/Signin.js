import React from 'react';
import { Link} from 'react-router-dom';
import "../signin/signin.css";
import * as IoIcons from 'react-icons/io';

class LoginForm extends React.Component{
  render(){
    return(
      <div id="loginform">
        <FormHeader title="Login" />
        <Form />
        <OtherMethods />
      </div>
    )
  }
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
 <div>
   <FormInput description="Username" placeholder="Enter your username" type="text" />
   <FormInput description="Password" placeholder="Enter your password" type="password"/>
   <FormButton title="Log in"/>
 </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      < Facebook/>
      {/* < Google/> */}
    </div>
  </div>
);

const Facebook = props => (
  <Link to={"login/facebook"}>
    {IoIcons.IoLogoFacebook}
    <span>{"Facebook"}</span>
  </Link>
);
// const Google = props => (
//   <Link to={"login/google"}>
//     {IoIcons.IoLogoGoogle}
//   </Link>
// );

// const Twitter = props => (
//   <a href="#" id="twitterIcon"></a>
// );

// const Google = props => (
//   <a href="#" id="googleIcon"></a>
// );

class Signin extends React.Component {
  render() {
    return (
      <div id='sign-in' className='sign-in'>
        <LoginForm />
      </div>
    );
  }
}

export default Signin;