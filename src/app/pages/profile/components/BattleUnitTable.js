import React, { Component } from 'react';

class BattleUnitTable extends Component {

    onChange(e, key) {
        this.props.onChange(key, e.target.value);
    }

    render() {
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
                        {Object.keys(this.props.battleUnits).map((key, index) => (
                            <tr key={index}>
                                <td>{key[0].toUpperCase() + key.slice(1)}</td>
                                <td>{this.props.battleUnits[key]}</td>
                                <td>
                                    <input type="number" min="0" pattern="\d+" 
                                        value={this.props.battleUnitsPurchase[key]}
                                        onChange={(e) => this.onChange(e, key)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    
}

export default BattleUnitTable;