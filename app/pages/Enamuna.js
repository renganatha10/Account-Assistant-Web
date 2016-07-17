import React, {Component} from 'react';

export default class Enamuna extends Component {

  render() {
    return (
      <div className="container-fluid">
        <h2>E Namuna</h2>
        <form className = "form-horizontal" >
          <div className="form-group">
            <label className = "col-xs-4 control-label"  for="name">பெயர்</label>
            <div className ="col-xs-8" >
              <input type="text" className="form-control" id="name" placeholder="பெயர்"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  for="name">கடன் தொகை</label>
            <div className ="col-xs-8" >
              <input type="text" className="form-control" id="name" placeholder="கடன் தொகை"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  for="name">பொருட்களின் விபரம்</label>
            <div className ="col-xs-8" >
              <input type="text" className="form-control" id="name" placeholder="பெயர்"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  for="name">உருப்படி எண்ணம்</label>
            <div className ="col-xs-8" >
              <input type="text" className="form-control" id="name" placeholder="உருப்படி எண்ணம்"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  for="name">மொத்த எடை</label>
            <div className ="col-xs-8" >
              <input type="email" className="form-control" id="name" placeholder="மொத்த எடை"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  for="name">நொட்டிஸ் தேதி</label>
            <div className ="col-xs-8" id="todate"  >
              <input type="text" className="form-control" placeholder="நொட்டிஸ் தேதி"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  for="name">வட்டி தொகை</label>
            <div className ="col-xs-8 " >
              <input type="text" className="form-control" id="name" placeholder="வட்டி தொகை"/>
            </div>
          </div>

          <div className="flex-container">
            <button type="submit" className="btn btn-success btn-lg">Submit</button>
            <button  style = "margin-left:10px " className="btn btn-default btn-lg">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}
