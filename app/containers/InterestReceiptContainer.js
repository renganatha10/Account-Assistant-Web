import React,{Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm, change } from 'redux-form'
import IntererstReceipt from './../pages/interestReceipt'
import { addDayBookDetails } from './../async/daybook'
import { resetIndividualPawn} from './../actions/pawn'

const AddDayBookDetailsHelper =  async  (val, dispatch) => {
   try{
      var result =  await addDayBookDetails(val);
      dispatch(resetIndividualPawn())
  }catch(e){
      console.log(e);
  }
}

function mapStateToProps(store){
    return {
        pawn : store.pawn.individualPawn.pawn,
        initialValues : store.pawn.individualPawn.pawn,
    };
}

function mapDispatchToProps(dispatch){
    return {
        addDayBookDetails : (val) =>  AddDayBookDetailsHelper (val,dispatch),
        resetIndividualPawn : () => dispatch(resetIndividualPawn())
    }
}

export default reduxForm({
    form: 'IntrestReceiptForm',
    fields: [ 'name', 'amount', 'particulars', 'noOfItems', 'totalgrams', 'place', 'returnDate' ,'interestPerMonth'],
}, mapStateToProps, mapDispatchToProps)(IntererstReceipt)
