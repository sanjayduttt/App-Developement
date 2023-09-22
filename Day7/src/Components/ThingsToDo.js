import React, { Component } from 'react';
import './ThingsToDo.css';
import img from "./Images/ooty.jpg";
import img1 from "./Images/thiru.jpg";
import img2 from "./Images/europe.jpg";
import img3 from "./Images/kaniya.jpg";
import img4 from "./Images/mal.jpg";
import img5 from "./Images/mildives.jpg";
import img6 from "./Images/singp.jpg";
import img7 from "./Images/banglore.jpg";
import img8 from "./Images/goa.jpg";
import img9 from "./Images/spain.jpg";
import img10 from "./Images/kerala.jpg";
import img11 from "./Images/austria.jpg";

class thing extends Component {
    
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      touristSpots: [
        {
          name: 'Ooty',
          description: 'Ooty, short for Udhagamandalam, is a picturesque hill station nestled in the Nilgiri Hills of Tamil Nadu, India. Known as the "Queen of Hill Stations," Ooty is celebrated for its enchanting natural beauty and pleasant climate. Ooty offers several attractions, including the Nilgiri Mountain Railway, Ooty Botanical Gardens, Ooty Lake, and Doddabetta Peak, providing breathtaking panoramic views of the surrounding landscape.',
          imageUrl: img,
        },
        {
          name: 'Thiruvananthapuram',
          description: 'Thiruvananthapuram, the capital of Kerala, is a city steeped in history and culture. From the majestic Padmanabhaswamy Temple to its colonial-era architecture and vibrant arts scene, the city offers a blend of tradition and modernity. Nestled along the Arabian Sea, Thiruvananthapuram coastline and lush green surroundings add to its allure, making it a unique destination for those seeking a glimpse of Keralas rich heritage and natural beauty..',
          imageUrl: img1,
        },
        {
          name: 'Europe',
          description: 'Europe is a continent renowned for its rich history, diverse cultures, and stunning landscapes. It encompasses a multitude of countries, each with its own unique charm and character. Europe is famed for its iconic landmarks, including the Eiffel Tower in France, the Colosseum in Italy, and the Acropolis in Greece. The continent offers a wealth of cultural experiences, from the art galleries of Florence to the historic streets of Prague.',
          imageUrl: img2,
        },
        {
          name: 'KaniyaKumari',
          description: 'Kanyakumari, also known as Cape Comorin, is a coastal town located at the southernmost tip of the Indian subcontinent, in the state of Tamil Nadu. It holds a unique geographical significance as it is the point where the Arabian Sea, the Bay of Bengal, and the Indian Ocean meet, creating a mesmerizing confluence of waters known as the "Triveni Sangam.',
          imageUrl: img3,
        },
        {
          name: 'Malaysia',
          description: 'Malaysia, a captivating Southeast Asian nation, boasts a rich tapestry of cultural diversity, where Malay, Chinese, Indian, and indigenous influences harmoniously converge. From the gleaming modernity of Kuala Lumpur with its iconic Petronas Twin Towers to the tranquil beauty of Langkawis beaches and the lush rainforests of Borneo, Malaysia offers a stunning blend of urban sophistication and natural splendor. Its vibrant street markets, flavorful cuisine, and cultural celebrations add depth to the Malaysian experience, making it a must-visit destination for travelers seeking a diverse and enriching adventure.',
          imageUrl: img4,
        },
        {
          name: 'Singapore',
          description: 'Singapore, a dynamic city-state situated at the southern tip of the Malay Peninsula, is renowned for its exceptional modernity, thriving economy, and impeccable urban planning. This island nation is characterized by its gleaming skyscrapers, lush green spaces, and a diverse cultural tapestry that includes Chinese, Malay, Indian, and Western influences. Singapore is celebrated for its impeccable cleanliness, efficient public transportation, and stunning landmarks like the futuristic Gardens by the Bay and the iconic Merlion statue',
          imageUrl: img6,
        },
        {
            name: 'Maldives',
            description: 'The Maldives, a tropical paradise located in the Indian Ocean southwest of Sri Lanka, is a nation of islands celebrated for its breathtaking natural beauty, luxurious resorts, and vibrant marine life. Comprising 26 atolls and over 1,000 coral islands, the Maldives offers pristine white-sand beaches, crystal-clear turquoise waters, and stunning coral reefs, making it a dream destination for beach lovers, snorkelers, and divers. The countrys overwater bungalows, perched above the clear lagoons, provide unparalleled luxury and privacy.',
            imageUrl: img5,
          },
          {
            name: 'Bangalore',
            description: 'Bangalore, often referred to as the "Silicon Valley of India," is a bustling metropolis in the southern state of Karnataka. Its a hub of technological innovation, home to numerous IT companies and startups, earning its reputation as Indias tech capital. Beyond its tech prowess, Bangalore boasts a vibrant cultural scene, with theaters, music festivals, and art galleries. The city s pleasant climate and green spaces have earned it the nickname "Garden City of India." Its diverse cuisine, craft beer culture, and a mix of old-world charm and modernity make Bangalore an eclectic and dynamic place, attracting professionals, students, and tourists alike..',
            imageUrl: img7,
          },
          {
            name: 'Goa',
            description: 'Goa, India s coastal gem, is a haven of natural beauty, with its pristine beaches, lush landscapes, and captivating waterfalls. This scenic paradise is further enriched by its cultural diversity, a delightful blend of Indian and Portuguese influences, evident in its vibrant festivals, unique architecture, and mouthwatering cuisine,making Goa an irresistible destination for travelers seeking both relaxation and cultural immersion.',
            imageUrl: img8,
          },
          {
            name: 'Barcelona, Spain',
             description: 'Barcelona, Spains enchanting coastal city on the northeastern Mediterranean coast, is a captivating blend of art, culture, and history. Renowned for its unique architecture, notably Antoni Gauds masterpieces like Sagrada Família and Park Güell, Barcelona offers a visual feast for art enthusiasts. The Gothic Quarters narrow streets reveal centuries of history, while vibrant markets like La Boqueria showcase its culinary diversity. The citys golden beaches, including Barceloneta,relaxation and stunning seafront views.',
            imageUrl: img9,
          },
          {
            name: 'kerala',
            description: ' Kerala, often referred to as "God s Own Country," is a state in southern India celebrated for its breathtaking natural beauty and rich cultural heritage. It is renowned for its tranquil backwaters, palm-fringed beaches, lush green hills, and serene tea plantations. Kerala  diverse landscape offers a range of experiences, from houseboat cruises in Alleppey to wildlife safaris in Periyar National Park. The state is also famous for its Ayurvedic treatments and traditional art forms like Kathakali and Mohiniyattam.',
            imageUrl: img10,
          },
          {
            name: 'Hallstatt, Austria',
            description: 'Hallstatt, Austria, is a postcard-perfect village nestled amidst the majestic Dachstein Alps and beside the serene Lake Hallstatt. This idyllic UNESCO World Heritage site is a harmonious blend of natural beauty and historical significance. Visitors are captivated by its charming alpine architecture, centuries-old salt mines, and rich cultural heritage. Surrounded by breathtaking vistas, Hallstatt offers a tranquil escape for those seeking outdoor adventures such as hiking and skiing, as well as a glimpse into its ancient past through its well-preserved historical sites.',
            imageUrl: img11,
          },
        // Add more tourist spots as needed
      ],
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const filteredSpots = this.state.touristSpots.filter((spot) =>
      spot.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <div className='in2'>
        <div className='things-container'>
      <div className="touriest">
        <h1>Tourist Spots</h1>
        <div className='tb1'>
       <div className='search-bar'> <input className='in1'
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={this.handleSearchChange}
        /></div></div>
        <div className="tourist-spot-list">
          {filteredSpots.map((spot, index) => (
            <div key={index} className="tourist-spot">
              <h2>{spot.name}</h2>
              <p>{spot.description}</p>
              <img src={spot.imageUrl} alt={spot.name} />
            </div>
          ))}
        </div>
      </div></div>
      </div>
    );
  }
}

export default thing;
