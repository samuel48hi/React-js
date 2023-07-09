import './Register.css';

const Register=()=>{
    return (<div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><i class="fa fa-id-card-o" aria-hidden="true"></i></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About Library</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Rules & Regulations</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Price Card</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>


            </ul>

        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <h1>Sign Up</h1>
                <form>
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName"/>

                    </div>
                    <div class="form-group">
                        <label for="firstName">Last Name</label>
                        <input type="text" class="form-control" id="firstName"/>

                    </div>
                    <div class="form-group">
                        <label for="firstName">Email</label>
                        <input type="text" class="form-control" id="firstName"/>

                    </div>
                    <div class="form-group">
                        <label for="firstName">Password</label>
                        <input type="text" class="form-control" id="firstName"/>

                    </div>
                

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
    </div>)
}
export default Register;