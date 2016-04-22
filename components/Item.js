import React, { PropTypes, Component } from 'react'

class Item extends Component {
    render(){
        return(
            <li key={this.props.id}  > <span>{this.props.name}</span>
             <ul>
                    {this.props.items.map(item =>
                          <Item  id = {item.id} name={item.name}  items= {item.children} />
                       )
                        }
                    </ul>     
            </li>
        );
    }
}

export default Item