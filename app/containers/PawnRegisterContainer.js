import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getPawnDetails} from './../async/pawn'
import {displayAllPawnDetails} from './../actions/pawn'

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
        console.log(result);
        dispatch(displayAllPawnDetails(result))
    }catch(e){
       console.log(e);
    }

}

function mapDispatchToProps(dispatch){
    return{
        getPawnDetails : () => GetPawnDetailsHelper(dispatch)
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(PawnRegister);
