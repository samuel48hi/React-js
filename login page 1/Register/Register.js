import './Register.css';
import Header from '../Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register=()=>{

    const[getform,setform]=useState({
        firstName:"",
        lastName:"",
        Email:"",
        Password:"" 
    })

    const onChangeHandler=(event)=>{
        setform({...getform,[event.target.name]:event.target.value})
    }
    const emptyvalidation=(value)=>{
        if(value)
        {
            return true;
        }
        else{
            return false;
        }
    }
    const navigate =useNavigate() 

    const onSubmitHandler=(event)=>{

        event.preventDefault()
        if(!emptyvalidation(getform.firstName))
        {
            alert("first name no be empty");
            return;
        }
        if(!emptyvalidation(getform.lastName))
        {
            alert("first name no be empty");
            return;
        }
        if(!emptyvalidation(getform.Email))
        {
            alert("first name no be empty");
            return;
        }
        if(!emptyvalidation(getform.Password))
        {
            alert("first name no be empty");
            return;
        }

        axios.post(' http://localhost:3000/registration',getform).then((result)=>{
        console.log(result);
        navigate("/login");
        }).catch((error)=>{
            console.log(error);
            
        })
       

    }

    return (<div>
      
     <Header/>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <h1>Sign Up</h1>
                <form>
                    <div class="form-group">
                        <label >First Name</label>
                        <input type="text" onChange={onChangeHandler} class="form-control" name="firstName"/>

                    </div>
                    <div class="form-group">
                        <label >Last Name</label>
                        <input type="text" onChange={onChangeHandler} class="form-control" name="lastName"/>

                    </div>
                    <div class="form-group">
                        <label >Email</label>
                        <input type="email" onChange={onChangeHandler} class="form-control" name="Email"/>

                    </div>
                    <div class="form-group">
                        <label >Password</label>
                        <input type="password" onChange={onChangeHandler} class="form-control" name="Password"/>

                    </div>
                

                    <button type="submit" onClick={onSubmitHandler} class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
    </div>)
}
export default Register;