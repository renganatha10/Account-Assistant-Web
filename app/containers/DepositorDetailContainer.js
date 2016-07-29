import React, {Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form'
import {getDepositorById} from './../async/depositor';
import {displayDepositorDetails} from './../actions/depositor'

import DepositorDetail from './../pages/DepositorDetail'

function mapStateToProps(store) {
    return {
        depositor : store.depositor
    };
}

const GetDepositorDetailByIdHelper = async(val , dispatch) => {
    try {
        var result = await(getDepositorById(val));
        console.log(result);
        dispatch(displayDepositorDetails(result))
    } catch (e) {
        console.log(e);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDepositorDetailById : (val) => GetDepositorDetailByIdHelper(val,dispatch)
    }
}

export default reduxForm({
    form: 'DepositorDetailForm',
    fields: ['no']
}, mapStateToProps, mapDispatchToProps)(DepositorDetail)
