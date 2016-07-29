import React,{Component} from 'react';
import {connect} from 'react-redux';

import {getAllDetails} from './../async/daybook'
import {displayAllDetails} from './../actions/daybook'



import WholeRegister from './../pages/WholeRegister'

function mapStateToProps(store){
    return {
        daybooks : store.daybook.daybooks
    };
}


const GetAllDetailsHelper = async (dispatch) => {
    try {
        var result = await getAllDetails();
        dispatch(displayAllDetails(result))
    } catch (e) {
        console.log(e);
    }
}

function mapDispatchToProps(dispatch){
    return {
        getAllDetails : () => GetAllDetailsHelper(dispatch)
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(WholeRegister);
