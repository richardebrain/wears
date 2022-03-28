import React from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  handleSubmit=e=>{
    e.preventDefault();
    this.setState({email:'',password:''})
  }

  handleChange=(e)=>{
    const {value,name} =e.target
    this.setState({[name]:value})
  }
  render(){
    return(
      <div className="sign-in">
         <h2>I already have an account</h2>
         <span>Sign up with your email and password</span>
         <form onSubmit={this.handleSubmit}>
           <FormInput
           type="email" 
           name="email"
          handleChange={this.handleChange}
           required value={this.state.email}
           label='email'
           />
          
           <FormInput 
           type="password"
            name="password"
             required 
             value={this.state.password}
             handleChange={this.handleChange}
             label='password'
             />
           
          <CustomButton type="submit">Sign in</CustomButton>
         </form>
      </div>
    )
  }
}
export default SignIn; 