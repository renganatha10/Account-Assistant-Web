import React,{Component} from 'react';

export default class DepositorForm extends Component {

    render() {
        var style = {marginLeft : 10}
        return (
            <div className="container-fluid">
              <h2>Depositor விபரம்</h2>
              <form className = "form-horizontal" >
                <div className="form-group">
                  <label className = "col-xs-4 control-label"  htmlFor="name">பெயர்</label>
                  <div className ="col-xs-8" >
                    <input type="text" className="form-control" id="name" placeholder="பெயர்"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className = "col-xs-4 control-label"  htmlFor="name">தொகை</label>
                  <div className ="col-xs-8" >
                    <input type="text" className="form-control" id="name" placeholder="தொகை"/>
                  </div>
                </div>
                <div className="flex-container">
                  <button type="submit" className="btn btn-success btn-lg">Submit</button>
                  <button  style = {style} className="btn btn-default btn-lg">Reset</button>
                </div>
              </form>
            </div>
        );
    }
}
