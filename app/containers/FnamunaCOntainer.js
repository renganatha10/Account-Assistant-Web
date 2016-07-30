import React,{Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm, change } from 'redux-form'
import {getPawnById, editPawnDetails} from './../async/pawn';
import {displayPawnDetailsById} from './../actions/pawn'

import Fnamuna from './../pages/Fnamuna'

const EditPawnDetailsHelper = async(val , dispatch) => {
    try {
        var result = await(editPawnDetails(val));
        console.log(result);
        dispatch(displayPawnDetailsById(result))
    } catch (e) {
        console.log(e);
    }
}

function mapStateToProps(store){
    return {
        pawn : store.pawn.individualPawn
    }
}

function mapDispatchToProps(dispatch){
    return {
        editPawnDetails : (values) => EditPawnDetailsHelper(values , dispatch)
    }
}

export default reduxForm({
    form: 'FnamunaForm',
    fields: [ 'name', 'amount', 'particulars', 'noOfItems', 'totalgrams', 'place', 'returnDate' ,'interestPerMonth']
}, mapStateToProps, mapDispatchToProps)(Fnamuna)
