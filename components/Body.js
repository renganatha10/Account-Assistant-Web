
import React, { Component } from 'react'
import classnames from 'classnames'
import BodyContainer from '../containers/BodyContainer'


class Body extends Component {
    handleTraversal() {
        this.props.finalTraversal(this.props.id, this.props.parentId);
    }
    
    

    render() {
        return (
            <ul>
                <li key = { this.props.id  }  ><span 
                className={classnames('icon-size','glyphicon' , {'glyphicon-file' : !this.props.items.isFolder},{'glyphicon-folder-close' : this.props.items.isFolder} )}    ></span>
                    <span  className={classnames({ selected: this.props.items.id === this.props.traverse.currentID }) }
                        onClick = {this.handleTraversal.bind(this) }      > { '  ' }  {this.props.items.name}</span>
                    { this.props.items.childIds.map(item => <BodyContainer id={item}  parentId = {this.props.id}  />) }
                </li>
            </ul>
        )
    }
}


export default Body