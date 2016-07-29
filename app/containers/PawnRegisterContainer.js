import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getPawnDetails , searchPawnService} from './../async/pawn'
import {displayAllPawnDetails} from './../actions/pawn'
import { reduxForm, change } from 'redux-form'


import PawnRegister from './../pages/PawnRegister'

function mapStateToProps(store){
    console.log(store);
    return {
        pawns : store.pawn.pawns
    };
}

const GetPawnDetailsHelper = async(dispatch) => {
    try{
        var result = await getPawnDetails();
        dispatch(displayAllPawnDetails(result))
    }catch(e){
       console.log(e);
    }
}

const SearchPawnDetailsHelper = async(values , dispatch) => {
    try {
        var result = await searchPawnService(values)
        dispatch(displayAllPawnDetails(result))
    } catch (e) {
        console.log(e);
    }
}

function mapDispatchToProps(dispatch){
    return{
        getPawnDetails : () => GetPawnDetailsHelper(dispatch),
        searchPawnDetails :(values) => SearchPawnDetailsHelper(values , dispatch)
    }
}


export default reduxForm({
    form: 'PawnSearchForm',
    fields: ['name', 'amount', 'returnDate' ,'updatedAt']
}, mapStateToProps, mapDispatchToProps)(PawnRegister)
