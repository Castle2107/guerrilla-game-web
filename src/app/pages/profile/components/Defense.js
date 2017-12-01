import React, {Component} from 'react';

class Defense extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

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
                        {Object.keys(this.props.defense).map((key, index) => (
                            <tr key={index}>
                                <td>{key[0].toUpperCase() + key.slice(1)}</td>
                                <td>{this.props.defense[key]}</td>
                                <td>
                                    <input type="number" min="0" 
                                        value={this.props.defensePurchase[key]}
                                        onChange={(e) => this.onChange(e, key)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default Defense;