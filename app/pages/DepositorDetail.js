import React,{Component} from 'react';
import Navbar from './../components/Navbar'

import GetDetailsById from './../containers/GetDetailsByIDContainer'

export default class DepositorDetail extends Component {
    render() {
        return (
        <div className="container-fluid">
            <Navbar />
            <h2>Depostitor விபரம்</h2>
            <GetDetailsById type = "depositor" />
            <div className="dividerline" ></div>
            <div className="container-fluid"  >
            <h2>{this.props.depositor.deposit.name} விபரம் -  Rs {this.props.depositor.deposit.amount}</h2>
            <table className ="table table-striped" >
              <thead>
                <tr>
                  <th>தேதி</th>
                  <th>விபரம்</th>
                  <th>வரவு</th>
                  <th>பற்று</th>
                </tr>
              </thead>
              <tbody>
                {this.props.depositor.daybook.map((daybook , index) => {
                    return (
                        <tr>
                          <th>{daybook.updatedAt}</th>
                          <th>{daybook.particulars}</th>
                          <th>{daybook.amount}</th>
                          <th>0</th>
                        </tr>
                    )
                }) }
              </tbody>
            </table>
            </div>
          </div>
        );
    }
}
