import { useState } from "react";
import { authUser } from "../firebase/config"

const RegistorUser = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const login = (e) => {
        e.preventDefault();
        authUser.signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(u => {
            console.log("Logged in successfully!!");
        }).catch( err => {
            console.error(err);
        })
    }

    const signup = (e) => {
        e.preventDefault();
        authUser.createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(u => {
            console.log("Account Registered Successfully!!");
        }).catch( err => {
            console.error(err);
        })
    }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <h1 className='text-center'>Welcome to StarBook Gallery</h1>
            <form className='container my-5 text-center col-md-3'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label lead">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={handleChange} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label lead">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={handleChange} />
                    <div class="form-text text-danger">If you are new then please signup!</div>
                </div>
                <div className="d-flex">
                    <button type="submit" class="btn btn-primary mx-2 " onClick={login}>Login</button>
                    <button type="submit" class="btn btn-success mx-2" onClick={signup}>Signup</button>
                </div>
            </form>
        </>
    )
}

export default RegistorUser
