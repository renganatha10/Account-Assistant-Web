import React, { Component } from 'react'

import Header from './Header'
import Body from './Body'

class App extends Component{
    render(){
        return(
               <div className="panel panel-default">
                        <Header />
                        <Body items={this.props.init.data} />
                </div>
        )   
        
    }
}

export default App