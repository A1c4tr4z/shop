import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      items: [
        {
          id:1,
          title: 'Iphone 15 Pro Gold',
          img: '1.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectur adipisicing.',
          category: 'phones',
          price: '990.99'
        },
        {
          id:2,
          title: 'Iphone 15 Black',
          img: '2.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectur adipisicing.',
          category: 'phones',
          price: '599.99'
        },
        {
          id:3,
          title: 'Iphone 15 White',
          img: '3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectur adipisicing.',
          category: 'phones',
          price: '599.99'
        },
        {
          id:4,
          title: 'Iphone 15 Pro Onyx',
          img: '4.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectur adipisicing.',
          category: 'phones',
          price: '990.99'
        },
        {
          id:5,
          title: 'Iphone 15 Pro Gold',
          img: '1.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectur adipisicing.',
          category: 'phones',
          price: '990.99'
        },
        

      ]
    }
  }
  render(){
  return (
    <div className="wrapper">
      <Header/>
      <Items items={this.state.items} />
      <Footer/>
    </div>
  )
}
}

export default App;
