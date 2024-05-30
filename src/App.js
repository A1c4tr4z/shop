import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      orders:[],
      currentItems: [],
      items: [
        
          {
            id:1,
            title: 'Harolds',
            img: '1s.jpg',
            desc: 'Antico Messenger bag leather brown',
            category: 'messenger-bag',
            price: '219.00'
          },
          {
            id:2,
            title: 'Valentino Bags',
            img: '2s.jpg',
            desc: 'Liuto Shoulder bag synthetic ivory',
            category: 'shoulder-bag',
            //category: 'valentino',
            price: '59.45'
          },
          {
            id:3,
            title: 'Emporio Armani',
            img: '3s.jpg',
            desc: 'My EA Crossbody bag synthetic black',
            category: 'cross-bag',
            price: '157.00'
          },
          {
            id:4,
            title: 'Michael Kors',
            img: '4s.jpg',
            desc: 'Jet Set Crossbody bag canvas ivory',
            category: 'cross-bag',
            price: '143.05'
          },
            {id:5,
            title: 'Valentino Bags',
            img: '5s.jpg',
            desc: 'Ocarina Crossbody bag synthetic ivory',
            category: 'cross-bag',
            price: '71.85'
          },
          {
            id:6,
            title: 'Valentino Bags',
            img: '6s.jpg',
            desc: 'Divina Tote bag synthetic black',
            category: 'tote-bags',
            price: '67.55'
          },
          {
            id:7,
            title: 'Bogner',
            img: '7s.jpg',
            desc: 'Klosters Neve Isalie Hobo bag nylon ivory',
            category: 'shoulder-bag',
            price: '225.00'
          }

      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems=this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder=this.deleteOrder.bind(this)
    this.chooseCategory=this.chooseCategory.bind(this)
    this.onShowItem=this.onShowItem.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders}  onDelete={this.deleteOrder}/>
      <Categories  chooseCategory={this.chooseCategory} />
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

      {this.state.showFullItem&&<ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
      <Footer/>
    </div>
  )
}

onShowItem(item){
  this.setState({fullItem:item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category){
  if(category==='all'){
    this.setState({currentItems: this.state.items})
    return
  }

  this.setState({
    currentItems: this.state.items.filter(el=>el.category===category)
  })
}
deleteOrder(id){
  this.setState({orders: this.state.orders.filter(el=>el.id !==id)})
}


addToOrder(item) {
  let isInArray = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
      isInArray = true
  })
  if(!isInArray)
    this.setState({ orders: [...this.state.orders, item]})
}
}

export default App;
