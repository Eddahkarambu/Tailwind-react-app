import React from "react";
import loginimg  from "../assets/login.jpg";
const Login = () =>{
    return(
        <div className="grid, grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
            <img className="w-full h-full object-cover" src={loginimg} alt=""/>
            </div>

            <div className="bg-black"> 
                <form>
                     <h1>SIGN IN</h1>
                     <div>
                     <label>User Name</label>
                     <input type="text"/>
                     </div>

                     <div>
                     <label>Password</label>
                     <input type="password"/>
                     </div>

                     <div>
                        <p><input type="Checktext"/>Remember me.</p>
                        <p>Forgot password</p>
                     </div>

                     <button>Sign in</button>
                </form>
            </div>
        </div>
    )
}
export default Login;
