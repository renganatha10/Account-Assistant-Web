import React, {Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form'

import {getDepositorById} from './../async/depositor';
import {getPawnById} from './../async/pawn';
import {displayPawnDetailsById} from './../actions/pawn';
import {displayDepositorDetails} from './../actions/depositor'

import GetDetailsById from './../components/GetDetailsById';

function mapStateToProps(store) {
    return {

    };
}

const GetDepositorDetailByIdHelper = async(val , dispatch) => {
    try {
        var result = await(getDepositorById(val));
        dispatch(displayDepositorDetails(result))
    } catch (e) {
        console.log(e);
    }
}

const GetPawnDetailByIdHelper = async(val , dispatch) => {
    try {
        var result = await(getPawnById(val));
        console.log(result);
        dispatch(displayPawnDetailsById(result))
    } catch (e) {
        console.log(e);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDepositorDetailById : (val) => GetDepositorDetailByIdHelper(val,dispatch),
        getPawnById : (id) =>  GetPawnDetailByIdHelper(id , dispatch)
    }
}

export default reduxForm({
    form: 'GetDetailsByIdForm',
    fields: ['no']
}, mapStateToProps, mapDispatchToProps)(GetDetailsById)
