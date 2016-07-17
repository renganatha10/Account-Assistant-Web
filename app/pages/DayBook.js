import React, {Component} from 'react';

export default class DayBook extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>தினசரி கணக்கு விபரம்</h2>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-xs-4 control-label" for="name">விபரம்</label>
            <div className="col-xs-8">
              <input type="text" className="form-control" id="name" placeholder="விபரம்"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-4 control-label" for="name">தொகை</label>
            <div className="col-xs-8">
              <input type="text" className="form-control" id="name" placeholder="தொகை"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-4  control-label">செலவு வகை</label>
            <div className="col-xs-8">
              <select className="form-control">
                <option>
                  select
                </option>
                <option>
                  வரவு
                </option>
                <option>
                  பற்று
                </option>
              </select>
            </div>
          </div>
          <div className="flex-container">
            <button type="submit" className="btn btn-success btn-lg">Submit</button>
            <button style="margin-left:10px " className="btn btn-default btn-lg">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}
