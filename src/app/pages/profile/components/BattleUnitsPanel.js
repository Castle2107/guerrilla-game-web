import React from 'react';

const BattleUnitsPanel = (props) => {
    return (
        <div className="container">
            <h1 className="display-4 mt-5 text-center">Battle Units</h1>
            <p className="lead text-center mt-5 mb-3 ">These are the battle units you currently have. 
                You can buy as much battle units as you can! </p>
            <div className="row">
                <div className="col-md-6">
                    <h4>Offense</h4>
                    {props.offense}
                </div>
                <div className="col-md-6">
                    <h4>Defense</h4>
                    {props.defense}
                </div>
            </div>
            <div className="row">
                <div className="col-4 mx-auto text-center mt-3">
                    <button className="btn btn-success btn-lg"
                        onClick={props.saveBattleUnit}>
                        Buy battle units!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BattleUnitsPanel;