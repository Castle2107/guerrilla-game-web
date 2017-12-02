import React, { Component } from 'react';
import Guerrilla from '../../services/api/Guerrilla';
import Header from './components/Header';
import Resources from './components/Resources';
import BattleUnitTable from './components/BattleUnitTable';
import BattleUnitsPanel from './components/BattleUnitsPanel';
import AlertContainer from 'react-alert';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            defense: {},
            offense: {},
            resources: {},
            offensePurchase: {
                assault: 0,
                engineers: 0,
                tanks: 0
            },
            defensePurchase: {
                bunkers: 0
            }
        };
    }

    componentDidMount() {
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
            .catch(error => {
                console.log(error);
                this.showAlert(`Whoops! The information related to the guerrilla couldn't be obtained.`, 'error');
                this.showAlert(error.data.errors, 'info');
            });     
    }

    addDefense = (battleUnit, value) => {
        let defP = this.state.defensePurchase;
        defP[battleUnit] = value;
        
        this.setState({
            defensePurchase: defP
        });
    }

    addOffense = (battleUnit, value) => {
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
                this.setState({
                    defense: response.defense,
                    offense: response.offense,
                    resources: response.resources,
                });
                if (response.hasOwnProperty('info'))
                    this.displayPurchaseAlerts(response.info);
                else
                    this.showAlert(`Good! No problem reported`); 
            })
            .catch(error => {
                this.showAlert(`Couldn't buy the battle units specified.`, 'error');
            });

        this.resetBattleUnitPurchase();
    }

    resetBattleUnitPurchase() {
        this.setState({
           offensePurchase: {assault: 0, engineers: 0, tanks: 0},
           defensePurchase: {bunkers: 0} 
        });
    }

    displayPurchaseAlerts = (info) => {
        Object.keys(info).map((battleUnit) => {
            if (info[battleUnit].success)
                this.showAlert(`${info[battleUnit].msg}`, 'success');
            else
                this.showAlert(`${info[battleUnit].msg}`, 'error');
        });
    }

    alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'dark',
        time: 0,
        transition: 'fade'
    }

    showAlert = (messageText, messageType) => {
        this.msg.show(messageText, {
            type: messageType
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
                    saveBattleUnit={this.saveBattleUnit} 
                />

                <div className="mt-5 mb-3">
                    <hr />
                    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                </div>
            </div>
        );
    }  

}

export default Profile;