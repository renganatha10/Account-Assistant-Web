import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { reduxForm, change } from 'redux-form'

import { addDepositorDetails } from './../async/depositor'

import DepositorForm from './../pages/depositorForm'


const AddDepositorDetailsHelper =  async  (val, dispatch) => {
   try{
      var result =  await addDepositorDetails(val);
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
        addDepositorDetails : (val) =>  AddDepositorDetailsHelper (val,dispatch)
    }
}

export default reduxForm({
    form: 'DepositorForm',
    fields: ['name', 'amount']
}, mapStateToProps, mapDispatchToProps)(DepositorForm)
