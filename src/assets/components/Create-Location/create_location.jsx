import React from "react";
import scss from "../../styles/main.scss";



export default class CreateLocation extends React.Component {

    createLocation(e) {
        e.preventDefault();
        let newLocation = {
            name: this.inputName.value,
            desc: this.inputDesc.value
        };
        this.props.addNewLocation(newLocation);
        this.props.history.push('/locationList');
    }


    render() {
        return (
            <>
                <div className="objectName">Location Name</div>


<>

    <div className="container">
        <div className="createLocation_flex">

            <div className="container">
                <form className="locationForm"
                      onSubmit={(e) => {
                          this.createLocation(e);
                      }}>
                    <div className="form-group c_un_mar">
                        <label htmlFor="exampleFormControlInput1">Location Name</label>
                        <input type="text" className="form-control loc_input" id="exampleFormControlInput1"
                               placeholder="how u will call it?" ref={(el) => {
                            this.inputName = el;
                        }}
                        />
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
                        <textarea className="form-control loc_input" id="exampleFormControlTextarea1" rows="3"
                                  ref={(el) => {
                                      this.inputDesc = el;
                                  }}></textarea>
                    </div>
                    <div className="custom-file c_un_mar">
                        <input type="file" className="custom-file-input" id="customFile"/>
                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>

                    </div>
                    <button type="submit" className="btn btn-primary doneBtn">Submit</button>

                </form>

            </div>
            <>
                <div className="location_img"></div>
            </>
        </div>
    </div>
             </>
                </>


        )
    }
}