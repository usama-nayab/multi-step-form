import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";

import { useContext } from "react";
import { AppContext } from "./MultiStepContext";

const MultiStep = () => {

    const {step , formData , handleReset} = useContext(AppContext);


    const updateStep = (step) => {
        if(step === 1){
            return(
                <>
                <First/>
                </>
            )
        }

        else if(step === 2){
            return(
                <>
                <Second />
                </>
            )
        }
        else if(step === 3){
            return(
                <>
                <Third />
                </>
            )
        }
        else if(step === 4){
            return(
                <>
                <Fourth />
                </>
            )
        }
        else{
            return(
                <>
                <Fifth />
                </>
            )
        }
    }

    
    return(
        <>
        <section className="multi-form">
            <div className="container-fluid">
            <div className="row align-items-center">
                    
                    <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                        {
                        (step <= 5) ? 
                        <div className="multi-form-head">
                            <div className="multi-form-head-content">
                            <h3><strong>Step {step}/5</strong></h3>
                            <h1>Want's To Join Our Institute?</h1>
                            <h5>Please Fill The given Form and get a chance to Learn with us!</h5>
                            </div>
                        </div>
                        :
                        <div className="multi-form-head">
                            <div className="multi-form-head-content">
                            <h1>Summary</h1>
                            <div className="multi-form-head-content-spans">
                            <span>{formData.user_name}</span>
                            <span>{formData.email_address}</span>
                            <span>{formData.course}</span>
                            <span>{formData.working_hours}</span>

                            {
                                (formData.regular && formData.consistent && formData.sincere && formData.hard_working) !== "" ?
                                <div>
                                    <h3> You Assure, you will be:</h3>
                                    <span>{formData.regular}</span>
                                    <span>{formData.consistent}</span>
                                    <span>{formData.sincere}</span>
                                    <span>{formData.hard_working}</span>
                                </div>
                                :
                                ""
                            }

                        {
                                formData.comments !== "" ? 
                                <div>
                                <h3>Your Add on:</h3>
                                <p>{formData.comments}</p>
                                </div>
                                :
                                ""
                        }
                            </div>
                            </div>
                        </div>
                        }
                    </div>
                        <div className="col-lg-6 col-md-6 col-sm-12  p-0">
                        <div className="individual-form">
                        {
                         step != 6 ? 
                         updateStep(step) :
                         <div>
                         <h1>Your Form Have Been Submitted.</h1><div/>
                        <button type="button" className="custom-btn" onClick={handleReset} >Done</button>
                        </div>
                        }
                        </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}

export default MultiStep;