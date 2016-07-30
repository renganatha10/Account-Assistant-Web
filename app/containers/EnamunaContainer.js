import React, {Component} from 'react';
import {connect} from 'react-redux';

import { reduxForm, change } from 'redux-form'
import Enamuna from './../pages/Enamuna';
import {addPawnDetails} from './../async/pawn'

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}


const AddPawnDetailsHelper =  async  (val, dispatch) => {
   try{
      var result =  await addPawnDetails(val);
  }catch(e){
      console.log(e);
  }
}

function mapStateToProps({}) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return{
        addPawnDetails : (val) => AddPawnDetailsHelper(val,dispatch)
    }
}

export default reduxForm({
    form: 'EnamunaForm',
    fields: ['name', 'amount', 'particulars', 'noOfItems', 'totalgrams', 'place', 'returnDate' ,'interestPerMonth']
}, mapStateToProps, mapDispatchToProps)(Enamuna)
