import React,{Component} from 'react';

import Navbar from './../components/Navbar'

export default class DepositorForm extends Component {

    handleSubmit(data){
        this.props.addDepositorDetails(data)
        this.props.resetForm();
    }

    render() {
        var style = {marginLeft : 10}

        const { fields :
        {name, amount},
     handleSubmit , resetForm, submitting} = this.props

    var style = {marginLeft : 10}
        return (
            <div className="container-fluid">
                <Navbar />
              <h2>Depositor விபரம்</h2>
              <form className = "form-horizontal" onSubmit = {handleSubmit(this.handleSubmit.bind(this))} >
                <div className="form-group">
                  <label className = "col-xs-4 control-label"  htmlFor="name">பெயர்</label>
                  <div className ="col-xs-8" >
                    <input type="text" className="form-control" id="name" { ...name  } placeholder="பெயர்"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className = "col-xs-4 control-label"  htmlFor="name">தொகை</label>
                  <div className ="col-xs-8" >
                    <input type="text" className="form-control"  {...amount } id="name" placeholder="தொகை"/>
                  </div>
                </div>
                <div className="flex-container">
                  <button type="submit" className="btn btn-success btn-lg">Submit</button>
                  <button  style = {style}  onClick= {resetForm } className="btn btn-default btn-lg">Reset</button>
                </div>
              </form>
            </div>
        );
    }
}
