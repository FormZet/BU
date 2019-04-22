import React from "react";
import scss from "../../styles/main.scss";



export default class createLocation extends React.Component {
    render() {
        return (
            <>
                <div className="objectName">Location Name</div>


<>
        <div className="createLocation_flex">

            <div className="container">
                <form className="locationForm">
                    <div className="form-group c_un_mar">
                        <label htmlFor="exampleFormControlInput1">Location Name</label>
                        <input type="email" className="form-control loc_input" id="exampleFormControlInput1"
                               placeholder="how u will call it?"/>
                    </div>
                    <label htmlFor="exampleFormControlInput1">Population</label><br></br>
                    <select className="form-control loc_input">
                        <option>Default select</option>
                    </select>
                    <label htmlFor="exampleFormControlInput1">Size</label><br></br>
                    <div className="form-check form-check-inline c_un_mar">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                               value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Small</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Big</label>
                    </div>
                    <div className="form-group c_un_mar">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea className="form-control loc_input" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                </form>

            </div>
            <>
                <div className="location_img"></div>
            </>
        </div>
             </>
                </>


        )
    }
}