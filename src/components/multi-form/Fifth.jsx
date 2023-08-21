import { useContext } from "react";
import { AppContext } from "./MultiStepContext";

const Fifth = () => {
    const { formHead, handlePrev, error, handleInput, handleSubmit, handleReset } = useContext(AppContext);
    return (
        <>
            <form className="fifth-step" >
                <h1>{formHead}</h1>

                {error ?
                    <div class="alert alert-dismissible fade show" role="alert">
                        <strong>{error}</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    :
                    ""}

                <input type="checkbox" value="Regular" name="regular" onChange={handleInput} className="btn-check" id="btn-check-4" autoComplete="off" />
                <label className="btn mx-2" htmlFor="btn-check-4">Regular</label>

                <input type="checkbox" value="Consistent" name="consistent" onChange={handleInput} className="btn-check" id="btn-check-5" autoComplete="off" />
                <label className="btn mx-2" htmlFor="btn-check-5">Consistent</label>

                <input type="checkbox" value="Sincere" name="sincere" onChange={handleInput} className="btn-check" id="btn-check-6" autoComplete="off" />
                <label className="btn mx-2" htmlFor="btn-check-6">Sincere</label>

                <input type="checkbox" value="Harworking" name="hard_working" onChange={handleInput} className="btn-check" id="btn-check-7" autoComplete="off" />
                <label className="btn mx-2" htmlFor="btn-check-7">Harworking</label>

                <h4>Want to Add On Something?</h4>

                <div className="form-floating mb-4 mt-3">
                    <textarea className="form-control" name="comments" onChange={handleInput} placeholder="Leave a comment here" id="floatingTextarea2" style={{ width: '100%', height: '150px' }}></textarea>
                    <label forhtml="floatingTextarea2">Comments</label>
                </div>

                <div className="btns">
                    <button type="button" className="custom-btn" onClick={handlePrev}>Prev</button>
                    <button type="button" className="custom-btn" onClick={handleSubmit}>Submit</button>
                    <button type="button" className="custom-btn" onClick={handleReset} >Reset</button>
                </div>
            </form>
        </>
    )
}

export default Fifth;