import React, {Component} from 'react';
export default class Enamuna extends Component {

  handleSubmit(data){
    this.props.addPawnDetails(data);
    this.props.resetForm();
  }

  render() {
    var style = {marginLeft : 10}

    const { fields :
        {name, amount, particulars, noOfItems, totalgrams, place, returnDate, interestPerMonth},
     handleSubmit , resetForm, submitting} = this.props

    return (
      <div className="container-fluid">
        <h2>E Namuna</h2>
        <form className = "form-horizontal" onSubmit={handleSubmit(this.handleSubmit.bind(this))} >
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">பெயர்</label>
            <div className ="col-xs-8" >
              <input type="text" className="form-control" id="name" {...name}  placeholder="பெயர்"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">கடன் தொகை</label>
            <div className ="col-xs-8" >
              <input type="text" className="form-control" id="name" {...amount}  placeholder="கடன் தொகை"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">பொருட்களின் விபரம்</label>
            <div className ="col-xs-8" >
              <input type="text" className="form-control" id="name" {...particulars} placeholder="பெயர்"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">உருப்படி எண்ணம்</label>
            <div className ="col-xs-8" >
              <input type="text" className="form-control" id="name" {...noOfItems} placeholder="உருப்படி எண்ணம்"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">மொத்த எடை</label>
            <div className ="col-xs-8" >
              <input type="text" className="form-control" id="name"  {...totalgrams} placeholder="மொத்த எடை"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">நொட்டிஸ் தேதி</label>
            <div className ="col-xs-8" id="todate"  >
              <input type="text" className="form-control" {...returnDate} placeholder="நொட்டிஸ் தேதி"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">வட்டி தொகை</label>
            <div className ="col-xs-8 " >
              <input type="text" className="form-control" {...interestPerMonth} id="name" placeholder="வட்டி தொகை"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="place">இடம்</label>
            <div className ="col-xs-8 " >
              <input type="text" className="form-control" {...place} id="name" placeholder="வட்டி தொகை"/>
            </div>
          </div>

          <div className="flex-container">
            <button type="submit" disabled={submitting}  className="btn btn-success btn-lg"> {submitting ? <i/> : <i/>} Submit</button>
            <button  style = { style } disabled={submitting} onClick={resetForm} className="btn btn-default btn-lg">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}
