import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DayBook from './../pages/DayBook'
import { reduxForm, change } from 'redux-form'

import { addDayBookDetails } from './../async/daybook'

const AddDayBookDetailsHelper =  async  (val, dispatch) => {
   try{
      var result =  await addDayBookDetails(val);
      console.log(result);
  }catch(e){
      console.log(e);
  }
}


function mapStateToProps({}) {
    return {};
}

function mapDispatchToProps(dispatch) {
  return {
        addDayBookDetails : (val) =>  AddDayBookDetailsHelper (val,dispatch)
    }
}

export default reduxForm({
    form: 'DayBookForm',
    fields: ['type', 'amount', 'name']
}, mapStateToProps, mapDispatchToProps)(DayBook)
