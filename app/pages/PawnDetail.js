import React, {Component} from 'react';

export default class PawnDetail extends Component {

  handleSubmit(value) {
    this.props.getDepositorDetailById(value.no);
  }

  render() {
    const { fields: {no}, handleSubmit } = this.props

    return (
      <div className="container-fluid">
        <h2>அடகு விபரம்</h2>
        <form className = "form-horizontal" onSubmit={handleSubmit(this.handleSubmit.bind(this)) } >
          <div className="form-group">
            <label className = "col-xs-4 control-label" htmlFor="name">அடகு எண்</label>
            <div className ="col-xs-7" >
              <input type="text" className="form-control" {...no}  id="name" placeholder="அடகு எண்"/>
            </div>
            <div className ="col-xs-1" >
              <a onClick = {handleSubmit(this.handleSubmit.bind(this)) }  className="btn btn-primary" href="#" role="button">தேடுக</a>
            </div>
          </div>
        </form>
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
