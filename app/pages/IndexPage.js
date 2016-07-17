import React,{Component} from 'react';

export default class IndexPage extends Component {

    render() {
        return (
            <div class="header">
        <h1 class="text-muted text-center">AVL அடகு கடை</h1>
      </div>

      <div class="mainbox" >
        <div class ="flex-container" >
            <a class="btn btn-lg btn-success" href="#">E நமுனா</a>
            <a class="btn btn-lg btn-success" href="#">F நமுனா</a>
            <a class="btn btn-lg btn-success" href="#">வட்டி ரசிது</a>
        </div>
        <div class ="flex-container" >
          <a class="btn btn-lg btn-success" href="#">அடகு Register</a>
          <a class="btn btn-lg btn-success" href="#">மொத்த Register</a>
        </div>
        <div class ="flex-container" >
          <a class="btn btn-lg btn-success balance-sheet" href="#">Balance Sheet</a>
          <a class="btn btn-lg btn-success" href="#">Profit and Loss</a>
        </div>
        <div class ="flex-container" >
          <a class="btn btn-lg btn-success depositor" href="#">Depositor விபரம்</a>
          <a class="btn btn-lg btn-success" href="#">அடகு விபரம்</a>
        </div>
      </div>
        );
    }
}
