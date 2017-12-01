import React from 'react';

const Resources = (props) => {
    return (
        <div>
            <p className="lead text-center mb-3">These are the resources you currently have</p>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>Resource</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Oil</td>
                        <td>{props.resources.oil}</td>
                    </tr>
                    <tr>
                        <td>People</td>
                        <td>{props.resources.people}</td>
                    </tr>
                    <tr>
                        <td>Money</td>
                        <td>{props.resources.money}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Resources;