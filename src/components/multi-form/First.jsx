import { useContext, useState } from "react";
import { AppContext } from "./MultiStepContext";

const First = () => {
    const { formHead, formData, handleNext, handleInput, error, handleReset } = useContext(AppContext);
    return (
        <>
            <form>
                <h1>{formHead}</h1>
                {
                    error ?
                    <div class="alert alert-dismissible fade show" role="alert">
                        <strong>{error}</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    :
                    ""
                    }
                    
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" required name="user_name" onChange={handleInput} className="form-control" value={formData.user_name} id="username" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" required name="email_address" onChange={handleInput} className="form-control" id="exampleInputEmail1" value={formData.email_address} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" required name="password" onChange={handleInput} className="form-control" value={formData.password} id="exampleInputPassword1" />
                </div>
                <div className="btns">
                    <button type="button" className="custom-btn" onClick={handleNext}>Next</button>
                    <button type="button" className="custom-btn" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </>
    )
}

export default First; 