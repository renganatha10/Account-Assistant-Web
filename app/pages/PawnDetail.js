import React, {Component} from 'react';

import Navbar from './../components/Navbar'

import GetDetailsById from './../containers/GetDetailsByIDContainer'

export default class PawnDetail extends Component {
  render() {

    return (
      <div className="container-fluid">
       <Navbar />
        <h2>அடகு விபரம்</h2>
        <GetDetailsById type = "pawn" />
        <div className="dividerline" ></div>
        <div className="container-fluid"  >
          <h2>{this.props.pawn.name} விபரம் -  Rs {this.props.pawn.amount} - {this.props.pawn.particulars} - {this.props.pawn.noOfItems} உருப்படி</h2>
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
            {this.props.pawn.daybook.map((daybook , index) => {
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
