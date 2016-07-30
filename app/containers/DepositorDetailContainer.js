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


function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepositorDetail)
