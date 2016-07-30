import React,{Component} from 'react';

export default class GetDetailsById extends Component {

    handleSubmit(value){
        if(this.props.type = "depositor"){
            this.props.getDepositorDetailById(value.no);
        }else{
            this.props.getPawnById(value.no);
        }

    }

    render() {
        const { fields : {no},  handleSubmit } = this.props

        return (
            <form className = "form-horizontal" onSubmit={handleSubmit(this.handleSubmit.bind(this)) } >
                <div className="form-group">
                  <label className = "col-xs-4 control-label" htmlFor="name">அடகு எண்</label>
                  <div className ="col-xs-7" >
                    <input type="text" className="form-control" {...no} id="name" placeholder="அடகு எண்"/>
                  </div>
                  <div className ="col-xs-1" >
                    <a className="btn btn-primary" href="#" role="button">தேடுக</a>
                  </div>
                </div>
              </form>
        );
    }
}
