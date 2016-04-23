import React, { Component } from 'react'

import HeadContainer from '../containers/HeadContainer'
import BodyContainer from '../containers/BodyContainer'

class App extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <HeadContainer />
                <div className="panel-body">
                    <BodyContainer id= {0} parentId = {0} />
                </div>

            </div>
        )
    }
}

export default App