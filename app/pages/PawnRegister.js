import React, {Component} from 'react';

export default class PawnRegister extends Component {

  render() {
    var style = { position: 'absolute', bottom: 20, right: 20 }
    return (
      <div className="container-fluid">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>அடகு NO</th>
              <th>தேதி</th>
              <th>பெயர்</th>
              <th>கடன் தொகை</th>
              <th>பொருட்களின் விபரம்</th>
              <th>உருப்படி எண்ணம்</th>
              <th>மொத்த எடை</th>
              <th>நொட்டிஸ் தேதி</th>
              <th>வட்டி தொகை</th>
              <th>தீர்ந்தது</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10001</td>
              <td>18.4.5</td>
              <td>Renganatha</td>
              <td>10000</td>
              <td>some thing</td>
              <td>4</td>
              <td>6.89 g</td>
              <td>19.7.8</td>
              <td>34</td>
              <td>no</td>
            </tr>
            <tr>
              <td>10001</td>
              <td>18.4.5</td>
              <td>Renganatha</td>
              <td>10000</td>
              <td>some thing</td>
              <td>4</td>
              <td>6.89 g</td>
              <td>19.7.8</td>
              <td>34</td>
              <td>no</td>
            </tr>
            <tr>
              <td>10001</td>
              <td>18.4.5</td>
              <td>Renganatha</td>
              <td>10000</td>
              <td>some thing</td>
              <td>4</td>
              <td>6.89 g</td>
              <td>19.7.8</td>
              <td>34</td>
              <td>no</td>
            </tr>
            <tr>
              <td>10001</td>
              <td>18.4.5</td>
              <td>Renganatha</td>
              <td>10000</td>
              <td>some thing</td>
              <td>4</td>
              <td>6.89 g</td>
              <td>19.7.8</td>
              <td>34</td>
              <td>no</td>
            </tr>
          </tbody>
        </table>
        <button type="button" style = {style}  className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>


        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times; </span></button>
                <h4 className="modal-title" id="myModalLabel">Filter And Search</h4>
              </div>
              <div className="modal-body">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label className="col-xs-4 control-label" htmlFor="name">பெயர்</label>
                    <div className="col-xs-8">
                      <input type="text" className="form-control" id="name" placeholder="பெயர்" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xs-4 control-label" htmlFor="name">கடன் தொகை</label>
                    <div className="col-xs-8">
                      <input type="text" className="form-control" id="name" placeholder="கடன் தொகை" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xs-4 control-label" htmlFor="name">தேதி</label>
                    <div className="col-xs-8" id="todate">
                      <input type="text" className="form-control" placeholder="நொட்டிஸ் தேதி" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xs-4 control-label" htmlFor="name">நொட்டிஸ் தேதி</label>
                    <div className="col-xs-8" id="todate">
                      <input type="text" className="form-control" placeholder="நொட்டிஸ் தேதி" />
                    </div>
                  </div>
                  <div className="flex-container">
                    <button type="submit" className="btn btn-success btn-lg">தெடுக</button>
                    <button style={{marginLeft : 10} } className="btn btn-default btn-lg">Reset</button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
