import { useContext } from "react";
import { AppContext } from "./MultiStepContext";

const Second = () => {
    const { formHead, error, handleNext, handlePrev, handleInput, handleReset } = useContext(AppContext);
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} >
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
                <select name="course" onChange={handleInput} className="form-select sec-select" defaultChecked multiple aria-label="Multiple select example">
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
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

export default Second;