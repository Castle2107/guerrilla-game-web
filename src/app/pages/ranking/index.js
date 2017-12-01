import React, {Component} from 'react';
import RankingTable from './components/RankingTable';
import Guerrilla from '../../services/api/Guerrilla';

class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guerrillas: []
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
    }

    attack(targetId) {
        this.props.history.push('/assault_report/' + targetId);
    }

    render() {
        return(
            <div>
                <Header />
                <div className="container">
                    <RankingTable 
                        guerrillas={this.state.guerrillas}
                        attack={this.attack}
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