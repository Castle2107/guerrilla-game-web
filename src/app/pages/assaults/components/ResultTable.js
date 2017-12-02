import React from 'react';

const ResultTable = (props) => {
    return (
        <div>
            <div className="card card-body">
                <h5 className="text-center">{props.guerrilla.username}</h5>
                <table className="table table-striped table-dark">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{props.guerrilla.id}</td>
                        </tr>
                        <tr>
                            <th>Faction</th>
                            <td>{props.guerrilla.faction}</td>
                        </tr>
                        <tr>
                            <th>Ranking</th>
                            <td>{props.guerrilla.ranking}</td>
                        </tr>
                        <tr>
                            <th>Points</th>
                            <td>{props.guerrilla.points}</td>
                        </tr>
                        <tr>
                            <th>Timestamp</th>
                            <td>{props.guerrilla.timestamp}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{props.guerrilla.email}</td>
                        </tr>
                        <tr>
                            <th>Resources Lost</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Oil</th>
                            <td>{props.guerrilla.resources_lost.oil}</td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Money</th>                            
                            <td>{props.guerrilla.resources_lost.money}</td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>People</th>
                            <td>{props.guerrilla.resources_lost.people}</td>
                        </tr>
                        <tr>
                            <th>Offense Lost</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Assault</th>
                            <td>{props.guerrilla.defense_lost.assault}</td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Engineers</th>
                            <td>{props.guerrilla.defense_lost.engineers}</td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Tanks</th>
                            <td>{props.guerrilla.defense_lost.tanks}</td>
                        </tr>
                        <tr>
                            <th>Defense Lost</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Bunkers</th>
                            <td>{props.guerrilla.offense_lost.bunkers}</td>
                        </tr>
                    </tbody> 
                </table>
            </div>
        </div>
    );
};

export default ResultTable;