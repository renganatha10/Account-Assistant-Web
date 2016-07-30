import React, {Component} from 'react';
import {connect} from 'react-redux';
import DepositorDetail from './../pages/DepositorDetail'

function mapStateToProps(store) {
    console.log(store.depositor);
    return {
        depositor : store.depositor
    };
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DepositorDetail)
