import React, {Component} from 'react';
import { Redirect } from "react-router-dom";

import RankingTable from './components/RankingTable';
import Guerrilla from '../../services/api/Guerrilla';
import { getAuthenticatedUser } from '../../../store';

class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guerrillas: [],
            authenticatedUser: ''
        };
        this.attack = this.attack.bind(this);
    }

    componentWillMount() {
        Guerrilla
            .list()
            .then(response => {
                this.setState({
                    guerrillas: response
                })
            })
            .catch(errors => {
                alert('Shit! Error at ranking/index.js');
                console.log(errors);
            });
        
        this.setState({authenticatedUser: getAuthenticatedUser()});
    }

    attack(targetId) {
        this.props.history.push('/assault_report/' + targetId);
    }

    render() {
         if (!getAuthenticatedUser) {
            return <Redirect to='/'/>;
        }

        return(
            <div>
                <Header />
                <div className="container">
                    <RankingTable 
                        guerrillas={this.state.guerrillas}
                        attack={this.attack}
                        authenticatedUser={this.state.authenticatedUser}
                    />
                </div>
            </div>
        );
    }
}

const Header = () => (
    <div className="mx-auto text-center">
        <h1 className="display-3">Ranking</h1>
        <hr className="col-7 mx-auto" />
    </div>
);

export default Ranking;