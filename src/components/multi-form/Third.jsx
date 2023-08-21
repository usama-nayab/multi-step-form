import { useContext } from "react";
import { AppContext } from "./MultiStepContext";
const Third = () => {
    const { formHead, formData, handleNext, error, handlePrev, handleInput, handleReset } = useContext(AppContext);
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} className="third-form">
                <h1>{formHead}</h1>
                {error ?
                    <div class="alert alert-dismissible fade show" role="alert">
                        <strong>{error}</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    :
                    ""}
                <div className="form-check">
                    <input className="form-check-input" onChange={handleInput} type="radio" name="skill_level" id="exampleRadios1" defaultValue={formData.skill_level === "on"} />
                    <label className="form-check-label" fortml="exampleRadios1">
                        Beginner Level
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" onChange={handleInput} type="radio" name="skill_level" id="exampleRadios2" value="Intermediate Level" />
                    <label className="form-check-label" forhtml="exampleRadios2">
                        Intermediate Level
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" onChange={handleInput} type="radio" name="skill_level" id="exampleRadios3" value="Advance Level" />
                    <label className="form-check-label" forhtml="exampleRadios3">
                        Advance Level
                    </label>
                </div>

                <div className="btns">
                    <button type="button" className="custom-btn" onClick={handlePrev}>Prev</button>
                    <button type="button" className="custom-btn" onClick={handleNext}>Next</button>
                    <button type="button" className="custom-btn" onClick={handleReset} >Reset</button>

                </div>
            </form>
        </>
    )
}

export default Third;