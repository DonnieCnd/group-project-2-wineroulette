import React, { Component } from 'react';
// import Bouton from "../boutonGenerantURL/Bouton"
import Colorbutton from "../Colorbutton"
import Redsubcriterion from "../Redsubcriterion"
import "./bouton.css"

// const url = 'https://lcboapi.com/products?q=red+wine+chile+Sauvignon&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm'

class Bouton extends Component {
  constructor() {
    super();
    this.state = {
    	// redstate:{this.props.color},
      // red:true,
      // white:false,
      // pink: false,
      // champagne:false,

      // alcohol:false,

      // Sweet:false,
      // Xdry:false,
      // Dry:false,
      // Roulette:false,

      isLoaded: false,
      items: []
	};
};


// 	alcoholSelection =() => {
//     this.setState ({alcohol:!this.state.alcohol})
// }


// 	Sweetsugar_contentSelection =() => {
//     this.setState ({Sweet:!this.state.Sweet,
// 				    Xdry:false,
// 				    Dry:false})
// }

// 	Xdrysugar_contentSelection =() => {
//     this.setState ({Sweet:false,
// 				    Xdry:!this.state.Xdry,
// 				    Dry:false})
// }

// 	Drysugar_contentSelection =() => {
//     this.setState ({Sweet:false,
// 				    Xdry:false,
// 				    Dry:!this.state.Dry})
//        //   	console.log(this.state.white)
// 	     	// console.log(this.state.Sweet)
// 	     	// console.log(this.state.Xdry)
// 	     	// console.log(this.state.Dry)
// 	     	// console.log('--------------')
// }


// 	 // 	RouletteRed = () => {
//  	// 	this.setState({result:this.state.itemsred[Math.floor(Math.random() * (200) + 1)]})
//  	// 	console.log(this.state.itemsred[0])
//  	// }

//  	RouletteChampagne =() => {
//  		this.setState({Roulette:true});
//  		console.log(this.state.Roulette)
//  		console.log('sdjhfgjhsdfg')
//  	}






  componentDidMount() {

  	for (let i = 1; i < 11; i++) {
  	
	    fetch(`https://lcboapi.com/products?page=${i}&per_page=100&where_not=is_dead&q=france+wine&access_key=MDoyNjlmZmU0OC1jNjUxLTExZTgtOWY5Mi0yYjJmNjhlYmVlM2M6bERDcURrS3ZtekVLWU1RYzBQQ2dWdEx6dGRlcjl3RnVhemlm`)
	      .then(res => res.json())
	      .then(json => {
	          	this.setState( prevState => {
	          		return {
	          			items: prevState.items.concat(json)
	          		}
		            
	                });
		   })
	      .then(this.setState({isLoaded: true}))
  	}
}

  

  render() {
  	const {isLoaded, items} = this.state;
  	console.log(items)


  	// console.log(items)

    // const itemsred = items.filter((item,id) => item.secondary_category === "Red Wine")
	// const itemswhite = items.filter((item,id) => item.secondary_category === "White Wine")
	// const itemspink = items.filter((item,id) => item.secondary_category === "Rosé Wine")
	// const itemschampagne = items.filter((item,id) => item.secondary_category === "Champagne")
	// const itemsredalcohol = itemsred.filter((item,id) => item.alcohol_content === 1300)
	// const itemswhiteSweet = itemswhite.filter((item,id) => item.sugar_content === "S - Sweet")
	// const itemswhiteXdry = itemswhite.filter((item,id) => item.sugar_content === "XD - Extra Dry")
	// const itemswhiteDry = itemswhite.filter((item,id) => item.sugar_content === "D - Dry")


    if (!isLoaded) return <div>Loading...</div>;

	else return (
		<div>
			<Colorbutton />
			<ul>
			{items.map((item, id) => ( item.result.map( (item2,id) => 
                 <li key={id}>
                     <p>Vin numero : {id+1}</p>
                     <p> Domaine :  {item2.name}</p>
                     <p>Prix : {(item2.price_in_cents/100).toFixed(2)} $</p> 
                     <img src={item2.image_url} alt={item2.name}/>
                 </li>)))}
            </ul>



		</div>
		)
    }

}

export default Bouton;

     
   








  //    else if (this.state.white && !this.state.Sweet && !this.state.Xdry && !this.state.Dry  ) {
  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button className='selected' onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button onClick={this.champagneWineSelection}>Petillant</button>
		// 		<p></p>
		// 		<button onClick={this.Sweetsugar_contentSelection}>Sec</button>
		// 		<button onClick={this.Xdrysugar_contentSelection}>Demi-sec</button>
		// 		<button onClick={this.Drysugar_contentSelection}>Moelleux</button>
				

		// 		<ul>
		// 		{itemswhite.map((item, id) => (
	 //                <li key={id}>
	 //                    <p>Vin numero : {id+1}</p>
	 //                    <p> Domaine :  {item.name}</p>
	 //                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
	 //                    <img src={item.image_url} alt={item.name}/>
	 //                </li>))}
	 //            </ul>	
		// 	</div>

  //     );
  //   }

  //        else if (this.state.white && this.state.Sweet && !this.state.Xdry && !this.state.Dry  ) {

  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button className='selected' onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button onClick={this.champagneWineSelection}>Petillant</button>
		// 		<p></p>
		// 		<button className='selected' onClick={this.Sweetsugar_contentSelection}>Sec</button>
		// 		<button onClick={this.Xdrysugar_contentSelection}>Demi-sec</button>
		// 		<button onClick={this.Drysugar_contentSelection}>Moelleux</button>
				

		// 		<ul>
		// 		{itemswhiteSweet.map((item, id) => (
	 //                <li key={id}>
	 //                    <p>Vin numero : {id+1}</p>
	 //                    <p> Domaine :  {item.name}</p>
	 //                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
	 //                    <img src={item.image_url} alt={item.name}/>
	 //                </li>))}
	 //            </ul>	
		// 	</div>

  //     );
  //   }

  //        else if (this.state.white && !this.state.Sweet && this.state.Xdry && !this.state.Dry  ) {

  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button className='selected' onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button onClick={this.champagneWineSelection}>Petillant</button>
		// 		<p></p>
		// 		<button onClick={this.Sweetsugar_contentSelection}>Sec</button>
		// 		<button className='selected' onClick={this.Xdrysugar_contentSelection}>Demi-sec</button>
		// 		<button onClick={this.Drysugar_contentSelection}>Moelleux</button>
				

		// 		<ul>
		// 		{itemswhiteXdry.map((item, id) => (
	 //                <li key={id}>
	 //                    <p>Vin numero : {id+1}</p>
	 //                    <p> Domaine :  {item.name}</p>
	 //                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
	 //                    <img src={item.image_url} alt={item.name}/>
	 //                </li>))}
	 //            </ul>	
		// 	</div>

  //     );
  //   }

  //        else if (this.state.white && !this.state.Sweet && !this.state.Xdry && this.state.Dry  ) {

  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button className='selected' onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button onClick={this.champagneWineSelection}>Petillant</button>
		// 		<p></p>
		// 		<button onClick={this.Sweetsugar_contentSelection}>Sec</button>
		// 		<button onClick={this.Xdrysugar_contentSelection}>Demi-sec</button>
		// 		<button className='selected' onClick={this.Drysugar_contentSelection}>Moelleux</button>
				

		// 		<ul>
		// 		{itemswhiteDry.map((item, id) => (
	 //                <li key={id}>
	 //                    <p>Vin numero : {id+1}</p>
	 //                    <p> Domaine :  {item.name}</p>
	 //                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
	 //                    <img src={item.image_url} alt={item.name}/>
	 //                </li>))}
	 //            </ul>	
		// 	</div>

  //     );
  //   }











  //        else if (this.state.pink) {
  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button className='selected' onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button onClick={this.champagneWineSelection}>Petillant</button>
				

		// 		<ul>
				
				

  //             {itemspink.map((item, id) => (
  //               <li key={id}>
  //                   <p>Vin numero : {id+1}</p>
  //                   <p> Domaine :  {item.name}</p>
  //                   <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
  //                   <img src={item.image_url} alt={item.name}/>
  //               </li>))}
             
  //           </ul>	
		// 	</div>

  //     );
  //   }


  //    else if (this.state.champagne && !this.state.Roulette) {
  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button className='selected' onClick={this.champagneWineSelection}>Petillant</button>

		// 		<p></p><p></p><p></p><p></p>

		// 		<button className='selectedRoulette' onClick={this.RouletteChampagne}>Roulette</button>

		// 	</div>)}

  //  else if (this.state.champagne && this.state.Roulette) {

  //  			let alea = Math.floor(Math.random() * (40) + 1)
        

  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button className='selected' onClick={this.champagneWineSelection}>Petillant</button>

		// 		<p></p><p></p><p></p><p></p>

		// 		<button className='selectedRoulette' onClick={this.RouletteChampagne}>Roulette</button>

		// 		<ul>	

	 //                <li>
	 //                    <h4>Hé voilà votre vin :)</h4>
	 //                    <p> Domaine :  {(itemschampagne[ alea ]).name}</p>
	 //                    <p>Prix : {((itemschampagne[ alea ]).price_in_cents/100).toFixed(2)} $</p> 
	 //                    <img src={(itemschampagne[ alea ]).image_url} alt="PHOTO INDISPONIBLE"/>
	 //                    <p>Taux d'alcool : {(itemschampagne[ alea ]).alcohol_content/100}</p> 
	 //                    <p>Accord met-vin : {(itemschampagne[ alea ]).serving_suggestion}</p> 


	                    


	 //                </li>
	             
	 //            </ul>

		// 	</div>

  //     );
  //   }

  //   else {
  //       return (
		// 	<div>
		// 		<button onClick={this.redWineSelection}>Rouge</button>
		// 		<button onClick={this.whiteWineSelection}>Blanc</button>
		// 		<button onClick={this.pinkWineSelection}>Rosé</button>
		// 		<button onClick={this.champagneWineSelection}>Petillant</button>

		// 		<ul>	
				
	 //              {items.map((item, id) => (
	 //                <li key={id}>
	 //                    <p>Vin numero : {id+1}</p>
	 //                    <p> Domaine :  {item.name}</p>
	 //                    <p>Prix : {(item.price_in_cents/100).toFixed(2)} $</p> 
	 //                    <img src={item.image_url} alt={item.name}/>
	 //                </li>))}
	             
	 //            </ul>	
		// 	</div>

  //     );
  //   }



  // }





// Stella Artois