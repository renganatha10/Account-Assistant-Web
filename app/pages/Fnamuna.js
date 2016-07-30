import React, {Component} from 'react';
import Navbar from './../components/Navbar'
import GetDetailsById from './../containers/GetDetailsByIDContainer'
export default class Fnamuna extends Component {

  handleEditPawnIdSubmit(value){
    this.props.editPawnDetails(value);
  }

  render() {
    var style = { marginLeft: 10 }

    const { fields:
      { name, amount, particulars, noOfItems, totalgrams, place, returnDate, interestPerMonth},
      handleSubmit, resetForm, submitting} = this.props

    return (
      <div className="container-fluid">
        <Navbar />
        <h2>F Namuna</h2>
        <GetDetailsById type="pawn" />
        <form className = "form-horizontal"  onSubmit={handleSubmit(this.handleEditPawnIdSubmit.bind(this)) } >
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">பெயர்</label>
            <div className ="col-xs-8" >
              <input type="text"  value = {this.props.pawn.name}   disabled={this.props.pawn.name === "" ? false : "disabled" } className="form-control" {...name}  id="name" placeholder="பெயர்"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">கடன் தொகை</label>
            <div className ="col-xs-8" >
              <input type="text" value = {this.props.pawn.amount}  disabled={this.props.pawn.amount === "" ? false : "disabled" } className="form-control" {...amount} id="name" placeholder="கடன் தொகை"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">பொருட்களின் விபரம்</label>
            <div className ="col-xs-8" >
              <input type="text"  value = {this.props.pawn.particulars} disabled={this.props.pawn.particulars === "" ? false : "disabled" } className="form-control" {...particulars}  id="name" placeholder="பெயர்"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">உருப்படி எண்ணம்</label>
            <div className ="col-xs-8" >
              <input type="text" value ={ this.props.pawn.noOfItems }  disabled={this.props.pawn.noOfItems === "" ? false : "disabled" } className="form-control" id="name" {...noOfItems} placeholder="உருப்படி எண்ணம்"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">மொத்த எடை</label>
            <div className ="col-xs-8" >
              <input type="email" value = {this.props.pawn.totalgrams} disabled={this.props.pawn.totalgrams === "" ? false : "disabled" } className="form-control" id="name" {...totalgrams}  placeholder="மொத்த எடை"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">நொட்டிஸ் தேதி</label>
            <div className ="col-xs-8" id="todate"  >
              <input type="text" value ={ this.props.pawn.returnDate}  disabled={this.props.pawn.returnDate === "" ? false : "disabled" } className="form-control" {...returnDate} placeholder="நொட்டிஸ் தேதி"/>
            </div>
          </div>
          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="name">வட்டி தொகை</label>
            <div className ="col-xs-8 " >
              <input  value = {this.props.pawn.interestPerMonth}  type="text" disabled={this.props.pawn.interestPerMonth === "" ? false : "disabled" } className="form-control" id="name" {...interestPerMonth} placeholder="வட்டி தொகை"/>
            </div>
          </div>

          <div className="form-group">
            <label className = "col-xs-4 control-label"  htmlFor="place">இடம்</label>
            <div className ="col-xs-8 " >
              <input type="text" disabled={this.props.pawn.place === "" ? false : "disabled" } className="form-control" {...place} id="name" placeholder="இடம்"/>
            </div>
          </div>

          <div className="flex-container">
            <button type="submit" className="btn btn-success btn-lg">கணக்கு தீர்ந்தது</button>
            <button  style = { style } className="btn btn-default btn-lg">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}
