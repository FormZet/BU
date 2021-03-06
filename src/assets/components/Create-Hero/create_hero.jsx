import React from "react";
import scss from "../../styles/main.scss";
import HeroCard from '../Hero-Card/hero_card.jsx';

export default class CreateHero extends React.Component {


    createHero(e) {
        e.preventDefault();
        let newHero = {
            name: this.inputName.value,
            desc: this.inputDesc.value
        };
        this.props.addNewHero(newHero);
        this.props.history.push('/heroList');
    }

    render() {
        return (

          <>
            <div className="container">
            <>

                <div className="objectName">Hero Name</div>


                <>
                    <div className="createhero_flex">


                        <>


                            <form onSubmit={(e) => {
                                this.createHero(e);
                            }} className="heroForm">
                                <div className="form-group c_un_mar">
                                    <label htmlFor="exampleFormControlInput1">Hero Name</label>
                                    <input type="text" className="form-control heroInput" id="formGroupExampleInput"
                                           placeholder="Put hero name here" ref={(el) => {
                                        this.inputName = el;
                                    }}/>
                                </div>
                                <label htmlFor="exampleFormControlInput1">Role</label><br></br>
                                <div className="form-check form-check-inline c_un_mar">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                           id="inlineRadio1"
                                           value="option1"/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">First</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                           id="inlineRadio2"
                                           value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Secondary</label>
                                </div>

                                <div className="form-group c_un_mar">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control heroDesc" id="exampleTextarea" rows="3"
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

                            <>
                                <div className="hero_img">
                                </div>
                            </>
                        </>
                    </div>
                </>
            </>
            </div>
              </>
        )
    }
}