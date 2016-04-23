import React, { PropTypes, Component } from 'react'


class Header extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            text: ''
        }
    }

    handleAddFile() {
        var childId = this.props.actions.addFile(this.state.text).nodeId;
        this.props.actions.addChild(this.props.item, childId);
    }

    handleAddFolder() {
        var childId = this.props.actions.addFolder(this.state.text).nodeId;
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


    render() {
        return (
            <div className="panel-heading">
                <h3 className="panel-title">Folder Structure</h3>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Enter Name</label>
                    <input onChange={this.handleChange.bind(this) } type="email" className="form-control" id="fileName" placeholder="Email" />
                </div>

                <center>
                    <div className="btn-group" role="group" aria-label="...">
                        <button type="button" onClick={this.handleAddFile.bind(this) } className="btn btn-default">New File</button>
                        <button type="button" onClick={this.handleAddFolder.bind(this) }  className="btn btn-default">New Folder</button>
                        <button type="button" onClick={this.handleDetleteFile.bind(this) }   className="btn btn-default">Delete Folder</button>
                    </div>
                </center>
            </div>)
    }
}


export default Header