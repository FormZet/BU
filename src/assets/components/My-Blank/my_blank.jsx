import React, {Component} from 'react';

export default class MyBlank extends React.Component {
    render() {
        let universes = this.props.universes.map((universe, q) => {
            return(
                <div className="col-md-3" key={q}>
                    <div className="card">

                        <div className="card-body">


                            <h2>{universe.name}</h2>
                            <h3>{universe.desc}</h3>

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
                        {universes}
                    </div>
                </div>
            </>
        );
    }
}