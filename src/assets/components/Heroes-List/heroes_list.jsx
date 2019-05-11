import React, {Component} from 'react';

export default class HeroList extends React.Component {
    render() {
        let heroes = this.props.heroes.map((hero, i) => {
            return(
                <div className="col-md-3" key={i}>
                    <div className="card">

                        <div className="card-body">

                            <img src={hero.img}/>
                            <h2>{hero.name}</h2>


                        </div>
                    </div>
                </div>
            )
        });


        return(
            <>
                <div className="container">
                    <h1>Список героев</h1>
                    <div className="row">
                        {heroes}
                    </div>
                </div>
            </>
        );
    }
}