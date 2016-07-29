import React, {Component} from 'react';

import moment from 'moment'

export default class PawnRegister extends Component {

  componentDidMount() {
    this.props.getPawnDetails();
  }


  handleSubmit(values) {
    this.props.searchPawnDetails(values);
  }
  render() {
    var style = { position: 'absolute', bottom: 20, right: 20 }

    const { fields: {name, amount, returnDate, updatedAt },
      handleSubmit, resetForm, submitting} = this.props

    return (
      <div className="container-fluid">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>அடகு NO</th>
              <th>தேதி</th>
              <th>பெயர்</th>
              <th>கடன் தொகை</th>
              <th>பொருட்களின் விபரம்</th>
              <th>உருப்படி எண்ணம்</th>
              <th>மொத்த எடை</th>
              <th>நொட்டிஸ் தேதி</th>
              <th>வட்டி தொகை</th>
              <th>தீர்ந்தது</th>
            </tr>
          </thead>
          <tbody>
            {this.props.pawns.map((pawn, index) => {

              return (<tr  key = {index} >
                <td>{pawn.pawnId}</td>
                <td>{moment(new Date(pawn.updatedAt)).format('DD/MM/YYYY') }</td>
                <td>{pawn.name}</td>
                <td>{pawn.amount}</td>
                <td>{pawn.particulars}</td>
                <td>{pawn.noOfItems}</td>
                <td>{`${pawn.totalgrams} g`}</td>
                <td>{moment(new Date(pawn.returnDate)).format('DD/MM/YYYY') }</td>
                <td>{pawn.interestPerMonth}</td>
                <td>{(pawn.done ? "done" : "Pending") }</td>
              </tr>)
            }) }
          </tbody>
        </table>
        <button type="button" style = {style}  className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times; </span></button>
                <h4 className="modal-title" id="myModalLabel">Filter And Search</h4>
              </div>
              <div className="modal-body">
                <form className="form-horizontal"  onSubmit={handleSubmit(this.handleSubmit.bind(this)) } >
                  <div className="form-group">
                    <label className="col-xs-4 control-label"  htmlFor="name">பெயர்</label>
                    <div className="col-xs-8">
                      <input type="text" className="form-control" id="name"  {...name}  placeholder="பெயர்" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xs-4 control-label" htmlFor="name">கடன் தொகை</label>
                    <div className="col-xs-8">
                      <input type="text" className="form-control" id="name"  {...amount}  placeholder="கடன் தொகை" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xs-4 control-label" htmlFor="name">தேதி</label>
                    <div className="col-xs-8" id="todate">
                      <input type="text" className="form-control"   { ...returnDate} placeholder="நொட்டிஸ் தேதி" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xs-4 control-label" htmlFor="name">நொட்டிஸ் தேதி</label>
                    <div className="col-xs-8" id="todate">
                      <input type="text" className="form-control" { ...updatedAt } placeholder="நொட்டிஸ் தேதி" />
                    </div>
                  </div>
                  <div className="flex-container">
                    <button type="submit" className="btn btn-success btn-lg">தெடுக</button>
                    <button style={{ marginLeft: 10 } } onClick={resetForm} className="btn btn-default btn-lg">Reset</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
