import React from 'react';

const Offense = (props) => {
    return (
        <div>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>Battle Unit</th>
                        <th>Total</th>
                        <th>Buy</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.offense).map((key, index) => (
                        <tr key={index}>
                            <td>{key[0].toUpperCase() + key.slice(1)}</td>
                            <td>{props.offense[key]}</td>
                            <td>
                                <button className="btn btn-default btn-sm"
                                    onClick={() => props.onClick(key)}>
                                    {props.offensePurchase[key]} +
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Offense;