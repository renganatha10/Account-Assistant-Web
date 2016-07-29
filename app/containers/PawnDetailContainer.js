import React,{Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form'

import {getPawnById} from './../async/pawn';
import {displayPawnDetailsById} from './../actions/depositor'

import PawnDetail from './../pages/PawnDetail'

const GetPawnDetailByIdHelper = async(val , dispatch) => {
    try {
        var result = await(getPawnById(val));
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
        getPawnById : (id) =>  GetPawnDetailByIdHelper(id , dispatch)
    }
}


export default reduxForm({
    form: 'PawnDetailForm',
    fields: ['no']
}, mapStateToProps, mapDispatchToProps)(PawnDetail)
