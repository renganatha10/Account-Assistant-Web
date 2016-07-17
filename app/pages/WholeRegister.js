import React, {Component} from 'react';

export default class WholeRegister extends Component {

    render() {
        return (
            <div className ="container-fluid" >
                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>தேதி</th>
                            <th>விபரம்</th>
                            <th>அதிக விபரம்</th>
                            <th>வரவு</th>
                            <th>பற்று</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>18.4.5</td>
                            <td>Renganatha</td>
                            <td>89239</td>
                            <td>10000</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}
