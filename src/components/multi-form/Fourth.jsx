import { useContext } from "react";
import { AppContext } from "./MultiStepContext";
const Fourth = () => {
    const { formHead, handleNext, error, handlePrev, handleInput, handleReset } = useContext(AppContext);
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} className="fourth-step" >
                <h1>{formHead}</h1>
                {error ?
                    <div class="alert alert-dismissible fade show" role="alert">
                        <strong>{error}</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    :
                    ""}

                <select name="working_hours" onChange={handleInput} className="form-select" aria-label="Default select example">
                    <option value="3-4 hours">3-4 hours</option>
                    <option value="5-7 hours">5-7 hours</option>
                    <option value="8-12 hours">8-12 hours</option>
                </select>
                <div className="btns">
                    <button type="button" className="custom-btn" onClick={handlePrev}>Prev</button>
                    <button type="button" className="custom-btn" onClick={handleNext}>Next</button>
                    <button type="button" className="custom-btn" onClick={handleReset} >Reset</button>
                </div>
            </form>
        </>
    )
}

export default Fourth;