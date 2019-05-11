import React, {Component} from 'react';

export default class LocationList extends React.Component {
    render() {
        let locations = this.props.locations.map((location, j) => {
            return(
                <div className="col-md-3" key={j}>
                    <div className="card">

                        <div className="card-body ">


                            <h2>{location.name}</h2>
                            <h3>{location.desc}</h3>

                        </div>
                    </div>
                </div>
            )
        });


        return(
            <>
                <div className="container">
                    <h1>Список Локаций</h1>
                    <div className="row">
                        {locations}
                    </div>
                </div>
            </>
        );
    }
}