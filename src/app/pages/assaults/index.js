import React, { Component } from 'react';
import ResultTable from './components/ResultTable';
import Guerrilla from '../../services/api/Guerrilla';
import { getAuthenticatedUser } from '../../../store';

class AssaultReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            attacker: {
                resources_lost: {},
                defense_lost: {},
                offense_lost: {}
            },
            target: {
                resources_lost: {},
                defense_lost: {},
                offense_lost: {}
            }
        }
    }

    componentDidMount() {
        const data = {
            target_id: this.props.match.params.targetId,
            attacker_id: getAuthenticatedUser()
        }

        Guerrilla.attackGuerrilla(data)
            .then(response => {
                this.setState({
                    result: response.result, 
                    attacker: response.attacker,
                    target: response.target
                })
            })
            .catch(errors => {
                alert('Damn! Error at assaults/index');
                console.log(errors)
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron text-center">
                        <h1 className="display-3">Assault Report</h1>
                        <hr />
                        <h4>Results</h4>
                        {this.state.attacker.username + ' vs ' + this.state.target.username}
                    </div>
                    <div className="result-panel">
                        <div className="row">
                            <div className="col-md-6">
                                <ResultTable guerrilla={this.state.attacker} />
                            </div>
                            <div className="col-md-6">
                                <ResultTable guerrilla={this.state.target} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AssaultReport;