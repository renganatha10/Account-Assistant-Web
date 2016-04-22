
import React, { Component } from 'react'

import Item from './Item' 

class Body extends Component{
     
    render(){
        return(
           <div className="panel-body">
                    <ul>
                        {
                            this.props.items.map(item =>
                               <Item  id = {item.id} name={item.name}  items= {item.children} />
                             )
                        }
                    </ul>        
            </div>)
    }
}


export default Body