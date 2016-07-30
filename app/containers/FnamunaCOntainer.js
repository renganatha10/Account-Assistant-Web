import React,{Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm, change } from 'redux-form'
import {getPawnById, editPawnDetails} from './../async/pawn';
import {displayPawnDetailsById, resetIndividualPawn} from './../actions/pawn'

import Fnamuna from './../pages/Fnamuna'

const EditPawnDetailsHelper = async(val , dispatch) => {
    console.log(val ,"insiede container");
    try {
        var result = await(editPawnDetails(val));
        //dispatch(displayPawnDetailsById(result))
        dispatch(resetIndividualPawn())
    } catch (e) {
        console.log(e);
    }
}

function mapStateToProps(store){
    return {
        pawn : store.pawn.individualPawn.pawn,
        initialValues : store.pawn.individualPawn.pawn,
    }
}

function mapDispatchToProps(dispatch){
    return {
        editPawnDetails : (values) => EditPawnDetailsHelper(values , dispatch),
        resetIndividualPawn : () => dispatch(resetIndividualPawn())
    }
}

export default reduxForm({
    form: 'FnamunaForm',
    fields: [ 'name', 'amount', 'particulars', 'noOfItems', 'totalgrams', 'place', 'returnDate' ,'interestPerMonth'],
}, mapStateToProps, mapDispatchToProps)(Fnamuna)
