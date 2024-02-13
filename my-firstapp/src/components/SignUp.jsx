import React, { useState } from "react";
export default function SignUp() {

    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    
    function onEmailChange(e){
        setEmail(e.target.value);
    }

    function onPasswordChange(e){
        setPassword(e.target.value);
    }
    const onSave=(e)=>{
     console.log(email,password);
    };
   

    // const onType=(e)=>{
    //     console.log(e.target.value);

    // }
    return (
        <div className=" signup mt-2">
            <div className="row justify-content-lg-center">
                <div className="col-lg-6">
                    <div className="h-100 p-5 text-bg-dark rounded-3">
                        {/* <h1>inital value:{counter}</h1> */}
                        <h2 className="text-center">SIGNUP FORM</h2>
                        <div className="email">
                            <div className="mb-3">
                                <label for='emailinput' className="form-label">Email Address</label>
                                <input onKeyUp={onEmailChange}type="email" className="form-control" id="emailinput" placeholder="name@example.com"></input>
                            </div>
                        </div>
                        <div className="password ">
                            <div className="mb-3">
                                <label for='passwordinput' className="form-label">Password</label>
                                <input onKeyUp={onPasswordChange}type="password" className="form-control" id="passwordinput" placeholder="password"></input>
                            </div>
                        </div>
                        <button  onClick={onSave}type="button" className="btn btn-outline-light center">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

