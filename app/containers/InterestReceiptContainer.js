import React,{Component} from 'react';
import {connect} from 'react-redux';

import { reduxForm, change } from 'redux-form'

import IntererstReceipt from './../pages/interestReceipt'

import { addDayBookDetails } from './../async/daybook'

const AddDayBookDetailsHelper =  async  (val, dispatch) => {
   try{
      var result =  await addDayBookDetails(val);
      console.log(result);
  }catch(e){
      console.log(e);
  }
}

function mapStateToProps(store){
    return {
        pawn : store.pawn.individualPawn
    };
}

function mapDispatchToProps(dispatch){
    return {
        addDayBookDetails : (val) =>  AddDayBookDetailsHelper (val,dispatch)
    }
}


export default reduxForm({
    form: 'IntrestReceiptForm',
    fields: ['type', 'amount', 'name' , 'pawnId'],
    initialValues : {type : 'income'}
}, mapStateToProps, mapDispatchToProps)(IntererstReceipt)
