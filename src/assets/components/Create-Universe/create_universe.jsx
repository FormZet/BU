import React from "react";
import scss from "../../styles/main.scss";



export default class createUniverse extends React.Component {

    render() {
        return (
            <>
            <h1>Create Universe</h1>

            <form>
                <div className="form-group c_un_mar">
                    <label htmlFor="exampleFormControlInput1">Universe Name</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="how u will call it?"/>
                </div>
                <label htmlFor="exampleFormControlInput1">Universe Scale</label><br></br>
                <div className="form-check form-check-inline c_un_mar">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                           value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">small</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                           value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">medium</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                           value="option3"/>
                        <label className="form-check-label" htmlFor="inlineRadio3">high</label>
                </div>
                <div className="form-group c_un_mar">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="custom-file c_un_mar">
                    <input type="file" className="custom-file-input" id="customFile"/>
                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>
            </form>
                </>
        )
    }
}