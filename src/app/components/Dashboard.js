import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="card card-body">
                    <h1 className="display-4 text-center">Dashboard</h1>
                    <hr />
                    <h2>Guerrilla Game REST WebService</h2>
                    
                    <p>Project # 3 for the course Networking and Data Comunication at UCR</p>
                    <ul>
                        Developed by:
                        <li>Daniel Castillo</li>
                        <li>Priscilla Mena</li>
                        <li>Bryan Morales</li>
                        <li>Adrian Serrano</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Dashboard;