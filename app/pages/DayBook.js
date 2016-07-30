import React, {Component} from 'react';

import Navbar from './../components/Navbar'

export default class DayBook extends Component {


  handleSubmit(data){
    this.props.addDayBookDetails(data)
    this.props.resetForm();
  }




  render() {
    const { fields :
        {type, amount, name},
     handleSubmit , resetForm, submitting} = this.props

    var style = {marginLeft : 10}

    return (
      <div className="container-fluid">
        <Navbar />
        <h2>தினசரி கணக்கு விபரம்</h2>
        <form className="form-horizontal" onSubmit = { handleSubmit(this.handleSubmit.bind(this)) } >
          <div className="form-group">
            <label className="col-xs-4 control-label" htmlFor="name">விபரம்</label>
            <div className="col-xs-8">
              <input type="text" className="form-control" id="name"   {...name}  placeholder="விபரம்"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-4 control-label" htmlFor="name">தொகை</label>
            <div className="col-xs-8">
              <input type="text" className="form-control" id="name"  {...amount}  placeholder="தொகை"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-4  control-label">செலவு வகை</label>
            <div className="col-xs-8">
              <select {...type} className="form-control">
                <option>
                  select
                </option>
                <option>
                  Income
                </option>
                <option>
                  Expense
                </option>
              </select>
            </div>
          </div>
          <div className="flex-container">
            <button type="submit"  disabled =  {submitting}  className="btn btn-success btn-lg">Submit</button>
            <button style={style}  disabled =  {submitting}  onClick = { resetForm }  className="btn btn-default btn-lg">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}
