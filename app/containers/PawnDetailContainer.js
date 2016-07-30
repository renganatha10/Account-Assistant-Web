import React,{Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form'

import {getPawnById} from './../async/pawn';
import {displayPawnDetailsById} from './../actions/pawn'

import PawnDetail from './../pages/PawnDetail'

function mapStateToProps(store){
    return {
        pawn : store.pawn.individualPawn.pawn,
        daybook : store.pawn.individualPawn.daybook
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PawnDetail)
