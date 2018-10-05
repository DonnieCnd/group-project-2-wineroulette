import React, { Component } from 'react';
import Bouton from "../boutonGenerantURL/Bouton"
import "./Winelist.css"

// const redWineSelection = () => {
//     /*if (this.state.red ===true) return */
//     this.setState ({red: !this.state.red,
//               white:false,
//             pink: false,
//             Bubble:false})
//   }

// const whiteWineSelection =() => {
//     this.setState ({red: false,
//               white:!this.state.white,
//             pink: false,
//             Bubble:false})

//   }
// const pinkWineSelection =() => {
//     this.setState ({red: false,
//               white:false,
//             pink: !this.state.whpinkite,
//             Bubble:false})
//   }
// const bubbleWineSelection =() => {
//     this.setState ({red: false,
//               white:false,
//             pink: false,
//             Bubble:!this.state.Bubble})
//   }

// let bouton = document.querySelector('#red')
// bouton.addEventListener("click", bubbleWineSelection(), false);


const url = 'https://lcboapi.com/products?q=red+wine+chile+Sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'


class Winelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      red:true,
      white:false,
      pink: false,
      Bubble:false,
      url2:'urlinit'
    };
      //url: url.url
    };
  

   redWineSelection = () => {
    /*if (this.state.red ===true) return */
    this.setState ({red: !this.state.red,
              white:false,
            pink: false,
            Bubble:false})
  }

 whiteWineSelection =() => {
    this.setState ({red: false,
              white:!this.state.white,
            pink: false,
            Bubble:false})

  }
 pinkWineSelection =() => {
    this.setState ({red: false,
              white:false,
            pink: !this.state.whpinkite,
            Bubble:false})
  }
 bubbleWineSelection =() => {
    this.setState ({red: false,
              white:false,
            pink: false,
            Bubble:!this.state.Bubble})
  }

  // gogo = () => {
  //   this.setState ({url2: 'alllllller'})
  // }



  componentDidMount() {
    this.state.url2 = this.state.Bubble
    console.log(this.state.url2)
    console.log('_________', url)
    fetch('https://lcboapi.com/products?q=red+wine+chile+Sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm')
      .then(res => res.json())
      .then((json) => {
          	this.setState({
	            isLoaded: true,
	            items: json.result
                });
	   });
  }

  render() {

    console.log(this.state.red,this.state.white,this.state.pink,this.state.Bubble,)
    console.log('urlr=',this.state.url2)


    const {isLoaded, items } = this.state;

    if (!isLoaded) return <div>Loading...</div>;

   else {
      return (
      	<div>
     

        <button onClick={this.redWineSelection}>Rouge</button>
        <button onClick={this.whiteWineSelection}>Blanc</button>
        <button onClick={this.pinkWineSelection}>Rosé</button>
        <button onClick={this.bubbleWineSelection}>Petillant</button>
          <ul>
            {items.map((item, poulet) => (
              <li>
                  <p id="fan">Vin numero : {poulet+1}</p>
                  <p> Domaine :  {item.name}</p>
                  <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
                  <img src={item.image_url} alt="photo du vin"/>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Winelist;




