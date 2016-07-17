import React, {Component} from 'react';

export default class PawnRegister extends Component {

  render() {
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
        <button type="button" style = "position : absolute;bottom : 20px; right : 20px"  className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>

      </div>
    );
  }
}
