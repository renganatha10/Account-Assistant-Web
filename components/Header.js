import React, { PropTypes, Component } from 'react'


class Header extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            text: ''
        }
    }

    handleAddFile() {
        var childId = this.props.actions.addFile((this.state.text== '') ? "NewFile" : this.state.text ).nodeId;
        this.setState({ text: '' })
        this.props.actions.addChild(this.props.item, childId);
        
    }

    handleAddFolder() {
        var childId = this.props.actions.addFolder((this.state.text== '') ? "NewFolder" : this.state.text ).nodeId;
        this.setState({ text: '' })
        this.props.actions.addChild(this.props.item, childId);
        
    }

    handleDetleteFile() {
        var id = this.props.item.currentID;
        var parentId = this.props.item.parentId;

        this.props.actions.removeChild(id, parentId);
        this.props.actions.deleteItem(id);
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }
    
    handleEditItemName(){
        this.props.actions.editItem(this.state.text,this.props.item.currentID);
    }


    render() {
        return (
            <div className="panel-heading">
                <center><h2 className="panel-title">Folder Structure</h2></center>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Enter Name</label>
                    <input onChange={this.handleChange.bind(this) } value={this.state.text} type="email" className="form-control" id="fileName" placeholder="Enter Name" />
                </div>

                <center>
                    <div className="btn-group" role="group" aria-label="...">
                        <button type="button" onClick={this.handleAddFile.bind(this) } className="btn btn-default"><i className="glyphicon glyphicon-file"  ></i></button>
                        <button type="button" onClick={this.handleAddFolder.bind(this) }  className="btn btn-default"><i className="glyphicon glyphicon-folder-open"  ></i></button>
                        <button type="button" onClick={this.handleEditItemName.bind(this) }  className="btn btn-default"><i className="glyphicon glyphicon-tag"  ></i></button>
                        <button type="button" onClick={this.handleDetleteFile.bind(this) }   className="btn btn-default"><i className="glyphicon glyphicon-trash"  ></i></button>
                    </div>
                </center>
            </div>)
    }
}


export default Header