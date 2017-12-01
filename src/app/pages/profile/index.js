import React, { Component } from 'react';
import Guerrilla from '../../services/api/Guerrilla';
import Header from './components/Header';
import Resources from './components/Resources';
import BattleUnitTable from './components/BattleUnitTable';
import BattleUnitsPanel from './components/BattleUnitsPanel';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            defense: {},
            offense: {},
            resources: {},
            isBuying: false,
            offensePurchase: {
                assault: 0,
                engineers: 0,
                tanks: 0
            },
            defensePurchase: {
                bunkers: 0
            },
            alerts: {}
        };
    }

    componentWillMount() {
        // TODO: this data should be bound from store.js (redux)
        Guerrilla.getGuerrilla(13)
            .then(response => {
                this.setState({
                    username: response.username,
                    email: response.email,
                    defense: response.defense,
                    offense: response.offense,
                    resources: response.resources
                });
            })
            .catch(errors => {
                this.setState({
                    alerts: errors
                })
            });
    }

    addDefense = (battleUnit, value) => {
        this.setState({
            isBuying: true
        });
        
        let defP = this.state.defensePurchase;
        defP[battleUnit] = value;
        
        this.setState({
            defensePurchase: defP
        });
    }

    addOffense = (battleUnit, value) => {
        this.setState({
            isBuying: true
        });
        
        let offP = this.state.offensePurchase;
        offP[battleUnit] = value;
        
        this.setState({
            offensePurchase: offP
        });
    }

    saveBattleUnit = () => {
        
        let data = {
            username: this.state.username,
            defense: this.state.defensePurchase,
            offense: this.state.offensePurchase
        }

        Guerrilla.buyGuerrilla(data)
            .then(response => {
                console.log(response, 'res buy_guerrilla');
                this.setState({
                    defense: response.defense,
                    offense: response.offense,
                    resources: response.resources,
                    alerts: response.info
                })
            });

        this.resetBattleUnitPurchase();
    }

    resetBattleUnitPurchase() {
        this.setState({
           offensePurchase: {assault: 0, engineers: 0, tanks: 0},
           defensePurchase: {bunkers: 0} 
        });
    }

    render() {
        return (
            <div className="card card-body">
                <Header username={this.state.username} />
                
                <div className="col-md-6 mx-auto mt-3">
                    <Resources resources={this.state.resources} />
                </div>
                
                <hr className="col-md-8 mx-auto" />

                <BattleUnitsPanel
                    offense={
                        <BattleUnitTable 
                            battleUnits={this.state.offense}
                            battleUnitsPurchase={this.state.offensePurchase}
                            onChange={this.addOffense} />
                        } 
                    defense={
                        <BattleUnitTable 
                            battleUnits={this.state.defense}
                            battleUnitsPurchase={this.state.defensePurchase}
                            onChange={this.addDefense}
                        />
                    }
                    isBuying={() => this.state.isBuying}
                    saveBattleUnit={this.saveBattleUnit} 
                />
            </div>
        );
    }

}

export default Profile;