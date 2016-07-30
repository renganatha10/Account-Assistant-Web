import React, {Component} from 'react';
import { Link } from 'react-router'
export default class Navbar extends Component {

  render() {
    console.log(this.props);
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className = "navbar-brand" >AVL அடகு கடை</Link>

          </div>


          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link activeClassName = "activeLink" to="/wholeregister">Whole Register <span className="sr-only">(current) </span></Link></li>
              <li><Link activeClassName = "activeLink" to="/pawnregister">அடகு Register</Link></li>
              <li><Link activeClassName = "activeLink" to="/depositordetail">Depositor விபரம்</Link></li>
              <li><Link activeClassName = "activeLink" to="/pawndetail">அடகு விபரம்</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
