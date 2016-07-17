import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import WholeRegister from './../pages/WholeRegister'

function mapStateToProps({}){
    return {};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({},dispatch);
}

export default connect (mapStateToProps,mapDispatchToProps)(WholeRegister);
