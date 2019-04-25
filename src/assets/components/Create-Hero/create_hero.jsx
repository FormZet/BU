import React from "react";
import scss from "../../styles/main.scss";


export default class CreateHero extends React.Component {
    render() {
        return (
                <>
                    <div className="objectName">Hero Name</div>


            <>
            <div className="createhero_flex">
                <>
                    <div className="hero_img2">
                    </div>
                </>
                <>
                <div className="hero_img">
                </div>
                    </>
            <>


                <form className="heroForm">
                    <div className="form-group c_un_mar">
                        <label htmlFor="exampleFormControlInput1">Hero Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="how u will call it?"/>
                    </div>
                    <label htmlFor="exampleFormControlInput1">Role</label><br></br>
                    <div className="form-check form-check-inline c_un_mar">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                               value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">First</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Secondary</label>
                    </div>

                    <div className="form-group c_un_mar">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="doneBtn">Done!</div>
                </form>


            </>
                </div>
                </>
                    </>
        )
    }
}