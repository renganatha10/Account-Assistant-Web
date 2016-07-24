import React, {Component} from 'react';

export default class Enamuna extends Component {

  render() {
    var style = {marginLeft : 10}
    return (
      <div className="container-fluid">
        <h2>E Namuna</h2>
        <form className = "form-horizontal" >
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">பெயர்</label>
            <div className ="col-xs-8" >
              <input type="text" className="form-control" id="name" placeholder="பெயர்"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">கடன் தொகை</label>
            <div className ="col-xs-8" >
              <input type="text" className="form-control" id="name" placeholder="கடன் தொகை"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">பொருட்களின் விபரம்</label>
            <div className ="col-xs-8" >
              <input type="text" className="form-control" id="name" placeholder="பெயர்"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">உருப்படி எண்ணம்</label>
            <div className ="col-xs-8" >
              <input type="text" className="form-control" id="name" placeholder="உருப்படி எண்ணம்"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">மொத்த எடை</label>
            <div className ="col-xs-8" >
              <input type="email" className="form-control" id="name" placeholder="மொத்த எடை"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">நொட்டிஸ் தேதி</label>
            <div className ="col-xs-8" id="todate"  >
              <input type="text" className="form-control" placeholder="நொட்டிஸ் தேதி"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">வட்டி தொகை</label>
            <div className ="col-xs-8 " >
              <input type="text" className="form-control" id="name" placeholder="வட்டி தொகை"/>
            </div>
          </div>

          <div className="flex-container">
            <button type="submit" className="btn btn-success btn-lg">Submit</button>
            <button  style = { style } className="btn btn-default btn-lg">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}
