import { createContext } from "react";
import { useState , useEffect } from "react";
const AppContext = createContext();

const initialData = {
    user_name : "",
    email_address : "",
    password : "",
    course : "",
    skill_level : "",
    working_hours : "",
    regular : "",
    consistent : "",
    sincere : "",
    hard_working : "",
    comments : ""
};

const MultiStepProvider = ({children}) => {
    let[step , setStep] = useState(1);
    const[error , setError] = useState("");
    const [resetClicked, setResetClicked] = useState(false)
    const[formHead , setFormHead] = useState("Plese Enter Your Details"); 
    const [formData , setFormData] = useState(initialData);

    const handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setFormData(data => {
            return {
                ...data,
                [name] : value
            }
        })
    }

    const handleNext = () => {
            if(step === 1 ){
                if(formData.user_name && formData.email_address && formData.password)
                {
                    setError("");
                    setStep(step + 1);
                }
                else{
                    setError("Please Enter The Complete Data!");
                }
            }
            if(step === 2 ){
                if(formData.course)
                {
                    setError("");
                    setStep(step + 1);
                }
                else{
                    setError("Please Select One Of the Option!");
                }
            }
            if(step === 3 ){
                if(formData.skill_level)
                {
                    setError("");
                    setStep(step + 1);
                }
                else{
                    setError("Please Select One Of the Option!");
                }
            }
            if(step === 4 ){
                if(formData.working_hours)
                {
                    setError("");
                    setStep(step + 1);
                }
                else{
                    setError("Please Select One Of The Working Hours");
                }
            }
            if(step === 5 ){

                if(formData.regular && formData.sincere && formData.password && formData.hard_working)
                {
                    setError("");
                    setStep(step + 1);
                }
                else{
                    setError("Please Ensure The Options");
                }
            }
    }
    const handlePrev = () => {
        setStep(step - 1);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(step = 6);
    }

    const handleReset = () => {
        setFormData(initialData);
        setStep(1);
        setResetClicked(true); 
    }

    useEffect(() => {
        const storedFormData = localStorage.getItem("formData");
        if (storedFormData) {
          setFormData(JSON.parse(storedFormData));
        }

        const storedStep = localStorage.getItem("step");
        if (storedStep) {
          setStep(parseInt(storedStep));
        }
      }, []);

    useEffect(() => {

        if (resetClicked) {
            localStorage.removeItem("formData"); 
            localStorage.removeItem("step");
            setResetClicked(false); 
          }
        if(formData !== initialData){
            localStorage.setItem("formData", JSON.stringify(formData));
            localStorage.setItem("step", step.toString());
        }
       
      
        if (step === 1) {
          setFormHead("Personal Info");
        } else if (step === 2) {
          setFormHead("Please Select Your Area Of Interest");
        } else if (step === 3) {
          setFormHead("Please Select Your Level Of Expertise");
        } else if (step === 4) {
          setFormHead("Please Select Hours you Can Take");
        } else if (step === 5) {
          setFormHead("I Assure, i Will be:");
        }
      }, [step, formData , resetClicked]);


    
    return(
    <AppContext.Provider value={{step , setStep , formHead , setFormHead , formData , setFormData , handleInput , handleNext , handlePrev, handleSubmit , error , setError , handleReset}} >
        {children}
    </AppContext.Provider>
    )
}

export {AppContext , MultiStepProvider};