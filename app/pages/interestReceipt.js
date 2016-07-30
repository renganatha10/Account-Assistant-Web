import React, {Component} from 'react';
import Navbar from './../components/Navbar'

import GetDetailsById from './../containers/GetDetailsByIDContainer'

export default class IntererstReceipt extends Component {

  constructor(props) {
    super(props);

  }

  handleSubmit(value){
    console.log(this.props.initialType , this.props);
    this.props.addDayBookDetails({ type : this.props.initialType , amount : value.interestPerMonth, name : value.name, pawnId : this.props.pawn._id})
    this.props.resetForm();
  }

  render() {

    var style = { marginLeft: 10 }

    const { fields:
      { name, amount, particulars, noOfItems, totalgrams, place, returnDate, interestPerMonth},
      handleSubmit, resetForm, submitting} = this.props



    return (
      <div className="container-fluid">
        <Navbar />
        <h2>வட்டி ரசிது</h2>
        <GetDetailsById type="pawn" />
        <form className = "form-horizontal" onSubmit={handleSubmit(this.handleSubmit.bind(this))} >
        <div className="form-group">
          <label className = "col-xs-4 control-label"  htmlFor="name">பெயர்</label>
          <div className ="col-xs-8" >
            <input type="text"   disabled={this.props.fields.name.value === "" ? "disabled" : false } className="form-control" {...name}  id="name" placeholder="பெயர்"/>
          </div>
        </div>
        <div className="form-group">
          <label className = "col-xs-4 control-label"  htmlFor="name">கடன் தொகை</label>
          <div className ="col-xs-8" >
            <input type="text"  disabled={this.props.fields.amount.value === "" ? "disabled" : false  } className="form-control" {...amount} id="name" placeholder="கடன் தொகை"/>
          </div>
        </div>
        <div className="form-group">
          <label className = "col-xs-4 control-label"  htmlFor="name">பொருட்களின் விபரம்</label>
          <div className ="col-xs-8" >
            <input type="text"    disabled={this.props.fields.particulars.value === "" ? "disabled" : false } className="form-control" {...particulars}  id="name" placeholder="பெயர்"/>
          </div>
        </div>
        <div className="form-group">
          <label className = "col-xs-4 control-label"  htmlFor="name">உருப்படி எண்ணம்</label>
          <div className ="col-xs-8" >
            <input type="text"  disabled={this.props.fields.noOfItems.value === "" ? "disabled" : false  } className="form-control" id="name" {...noOfItems} placeholder="உருப்படி எண்ணம்"/>
          </div>
        </div>
        <div className="form-group">
          <label className = "col-xs-4 control-label"  htmlFor="name">மொத்த எடை</label>
          <div className ="col-xs-8" >
            <input type="text"  disabled={this.props.fields.totalgrams.value === "" ? "disabled" : false } className="form-control" id="name" {...totalgrams}  placeholder="மொத்த எடை"/>
          </div>
        </div>
        <div className="form-group">
          <label className = "col-xs-4 control-label"  htmlFor="name">நொட்டிஸ் தேதி</label>
          <div className ="col-xs-8" id="todate"  >
            <input type="text"  disabled={this.props.fields.returnDate.value === "" ? "disabled" : false } className="form-control" {...returnDate} placeholder="நொட்டிஸ் தேதி"/>
          </div>
        </div>
        <div className="form-group">
          <label className = "col-xs-4 control-label"  htmlFor="name">வட்டி தொகை</label>
          <div className ="col-xs-8 " >
            <input  type="text" disabled={this.props.fields.interestPerMonth.value === "" ? "disabled" : false  } className="form-control" id="name" {...interestPerMonth} placeholder="வட்டி தொகை"/>
          </div>
        </div>

        <div className="form-group">
          <label className = "col-xs-4 control-label"  htmlFor="place">இடம்</label>
          <div className ="col-xs-8 " >
            <input type="text" disabled={this.props.fields.place.value === "" ? "disabled" : false  } className="form-control" {...place} id="name" placeholder="இடம்"/>
          </div>
        </div>

          <div className="flex-container">
            <button type="submit" className="btn btn-success btn-lg">வட்டி பெற்றுகொண்டேன்</button>
            <button onClick ={resetForm} style =  { style } className="btn btn-default btn-lg">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}
IntererstReceipt.defaultProps = { initialType : "income"}
