import React, { Component } from 'react';
import FilterForm from './FilterForm';

class RankingTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterStr: ''
        }
        this.onFilterStrChange = this.onFilterStrChange.bind(this);
    }

    onFilterStrChange(filterStr) {
        this.setState({ filterStr: filterStr });
    }

    //TODO: obviously, it shouldn't be displayed the current logged player
    render() {
        const { guerrillas } = this.props;
        const { filterStr } = this.state;
        
        const filteredGuerrillas = guerrillas
            .filter((e) => e.username.includes(filterStr))
            .map((e, i) => (
                <tr key={i}>
                    <td>{e.rank}</td>
                    <td>{e.username}</td>
                    <td>
                        <button className="btn btn-default btn-sm" 
                            onClick={() => this.props.attack(e.id)}>
                            Attack
                        </button>
                    </td>
                </tr>
            ));

        return (
            <div>
                <div className="filterForm">
                    <FilterForm filterStr={filterStr} 
                        onChange={this.onFilterStrChange} />
                </div>
                <div className="ranking-table">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Company</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredGuerrillas}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default RankingTable;