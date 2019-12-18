import React, {Component} from 'react'

class Try extends Component{
  constructor (props) {
    super(props)
    this.state = {
      showMore: false
    }
  }
  handleClick() {
    this.setState({showMore: true})
  }
  render(){
    const list = [
      'list 1',
      'list 2',
      'item 3',
      'item 4',
      'item 5',
      'item 6',
      'item 7',
      'item 8',
      'item 9',
      'item 10',
      'item 11',
      'item 12',
      'item 12',
      'item 14',
      'item 15',
      'item 16',
      'item 17',
      'item 18',
      'item 19',
      'item 20',
      'item 21',
      'item 22',
    ]
    
    const numberOfItems = this.state.showMore ?  list.lenght : 6
    return (
     <div>
        {list.slice(0, numberOfItems).map((item)=> {
          return (
          <div>{item}</div>
           )
        })}
        <button onClick={()=> this.handleClick()}>Show more</button>
     </div>
    );
  }
}
export default Try