import './Login.css';
import download from '../assets/image/download.jpg';
const Login=()=>{
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
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                       
                      </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div  class="text-center">
                               <button type="submit" class="btn btn-outline-success">Login</button>
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