import React, {Component} from 'react';

import moment from 'moment'
export default class WholeRegister extends Component {

    componentDidMount() {
        this.props.getAllDetails()


    }

    render() {
        console.log(this.props.daybooks);
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
                        {this.props.daybooks.map((daybook , index) => {
                                return (<tr key ={index} >
                                    <td>{moment(new Date(daybook.updatedAt)).format('DD/MM/YYYY')}</td>
                                    <td>{daybook.type}</td>
                                    <td>{daybook.name}</td>
                                    <td>{(daybook.type == "deposit" || daybook.type == "income") ? daybook.amount : "0"}</td>
                                    <td>{(daybook.type == "pawn" || daybook.type == "expense") ? daybook.amount : "0"}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>

            </div>
        );
    }
}
