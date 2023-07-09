import './Login.css';
import download from '../assets/image/download.jpg';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Login=()=>{

  const[getform,setform]=useState({
    Email:"",
    Password:""
  })

  const onChangeHandler=(event)=>{
    setform({...getform,[event.target.name]:event.target.value})
  }

  const navigate=useNavigate()

  const emptyvalidation=(value)=>{
    if(value)
    {
      return true;
    }
    else{
      return false;
    }
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault()
    if(!emptyvalidation(getform.Email)){
      alert("email not be empty");
      return;
    }
    if(!emptyvalidation(getform.Password)){
      alert("password not be empty");
      return;
    }

    axios.get(`http://localhost:3000/registration?Email=${getform.Email}&&Password=${getform.Password}`).then((obj)=>{
      console.log(obj);
    if(obj && obj.data.length>0){
        navigate("/table");
      }
      else{
        alert("no match email and password found");
      }
    }).catch(()=>{
      alert("some error ocurred");
    })
  //   if(getform.Email==="desmondsamuel002" && getform.Password==="password")
  // {
  //  
  // }
  // else{
  //   alert("email and password incorrect")
  // }
  
  }

  

    return (<div>
      <div class="container" style={{width:"1000px",height:"1000px",backgroundColor:"green"}}>
          <div class="row">
              <div class="col-md-12">
                <div  class="text-center">
                     <h1>Sign up</h1>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-4">

              </div>
              <div class="col-md-4 background-login">
                  <div class="row">
                      <div class="col-md-4">
                        <img  width="100" height="100" src={download}/>
                      </div>
                      <div class="col-md-8">
                          <h1>LIBRARY</h1>
                          <h4>MANAGEMENT SYSTEM</h4>
                      </div>
                  </div>
                <form>
              
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" onChange={onChangeHandler} name="Email" aria-describedby="emailHelp" placeholder="Enter email"/>
                       
                      </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control" onChange={onChangeHandler}  name="Password" placeholder="Password"/>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div  class="text-center">
                               <button type="submit" onClick={onSubmitHandler} class="btn btn-outline-success">login</button>
                            </div>
                           
                        </div>
                    </div>
                   
                  </form>
              </div>
              <div class="col-md-4">

              </div>
          </div>
      </div>
   
    </div>)
}
export default Login;