import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state= {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'shoulder-bag',
                    name: 'Shoulder Bags'
                },
                {
                    key: 'messenger-bag',
                    name: 'Messenger Bags'
                },
                {
                    key: 'cross-bag',
                    name: 'Crossbody Bags'
                },
                {
                    key: 'tote-bags',
                    name: 'Tote Bags'
                },
                {
                    key: 'armani',
                    name: 'Armani'
                },
                {
                    key: 'valentino',
                    name: 'Valentino'
                },
            ]
        }
    }
    render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el=>(
            <div key={el.key} onClick={()=>this.props.chooseCategory(el.key)} >{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories