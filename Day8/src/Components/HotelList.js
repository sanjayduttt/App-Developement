import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HotelList.css"; // Import your CSS file here
import img from "./HotelImg/hlo1.jpg";
import img11 from "./HotelImg/hlo1.jpg"
import img22 from "./HotelImg/hlo2.jpg"
import img33 from "./HotelImg/hlo3.jpg";
import img44 from "./HotelImg/hlo4.jpg";
import img55 from "./HotelImg/hlo5.jpg";
import img66 from "./HotelImg/hlo6.jpg";

const HotelList = () => {
  const [hotel, setHotel] = useState("");
  const navigate = useNavigate(); 
  console.log(hotel);
  const handleBookNowClick = (hotelName) => {
    setHotel(hotelName);
    navigate("/bookingpage");
  };
  // Define an array of hotels with their names, available spots, and images
  const hotels = [
    {
      name: "Lakeside Retreat Hotel",
      image: img,
      description:
        "Nestled on the serene shores of Tranquil Waters, our Lakeside Retreat Hotel offers a tranquil escape from the hustle and bustle of city life. Enjoy breathtaking lake views from your cozy room, savor gourmet cuisine at our lakeside restaurantand unwind with lakeside activities. ",
      Location: "123 Seaside Avenue, Beach City, CA 90210",
      Standard: "$9000 per day(Include meals)",
      Dual: "$17000 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "The Fullerton Hotel",
      image: img11,
      description:
        "The Fullerton Hotel is a luxurious historic landmark nestled in the heart of the city. It exudes timeless elegance and offers impeccable service. With its stunning architecture and waterfront location, it's a haven of sophistication and charm.",
      Location:
        "312, Bharathiyar Road, Coimbatore - 641 044, Tamil Nadu, India",
      Standard: "$10000 per day(Include meals)",
      Dual: "$25000 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "Hotel Cityscape Suites",
      image: img22,
      description:
        "Discover urban elegance at its finest. Cityscape Suites offers beautiful accommodations, stunning city views, and top-notch amenities for a memorable stay in the heart of the city. Experience luxury with a touch of modern sophistication.",
      Location: " 789 Downtown Boulevard, Metroville, NY 10001",
      Standard: "$11000 per day(Include meals)",
      Dual: "$21000 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "Royal Gardens Resort",
      image: img33,
      description:
        "Escape to a world of enchantment at Royal Gardens Resort, where lush botanical gardens, regal accommodations,Indulge in the opulence of this paradise and let your senses bloom amidst nature's splendor. Your royal experience awaits.",
      Location: "456 Pinecrest Road, Alpine Village, CO 80422",
      Standard: "$8500 per day(Include meals)",
      Dual: "$14000 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "Hotel Ocean View Resort",
      image: img44,
      description:
        "Immerse yourself in paradise at Ocean View Resort, where every room boasts breathtaking ocean vistas. Experience the beauty of nature's masterpiece, unwind on pristine beaches, and relish in the tranquility of coastal luxury.",
      Location: "123 Seaside Avenue, Beach City, CA 90210  ",
      Standard: "$21500 per day(Include meals)",
      Dual: "$40000 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "Emerald Oasis Hotel",
      image: img55,
      description:
        "Discover a hidden gem nestled amidst lush emerald landscapes. Emerald Oasis Hotel offers  beauty and refined elegance merge seamlessly. Immerse yourself in the serenity of this verdant paradise.",
      Location: "456 Pinecrest Road, Alpine Village, CO 80422",
      Standard: "$45000 per day(Include meals)",
      Dual: "$88000 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "Desert Mirage Resort",
      image: img66,
      description:
        "Step into a world of enchantment at Desert Mirage Resort, where the desert's natural beauty meets luxury oasis living. With stunning desert vistas, world-class amenities, and an ambiance of serenity.",
      Location: "789 Downtown Boulevard, Metroville, NY 10001",
      Standard: "$15300 per day(Include meals)",
      Dual: "$35000 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "Desert Mirage Resort",

      image: img66,
      description:
        "Experience the allure of the desert at Desert Mirage Resort, where golden sands meet azure skies. Our oasis of luxury offers breathtaking views, indulgent spa experiences, and unmatched tranquility.",
      Location: "345 Meadow Lane, Greenside Village, OR 97555",
      Standard: "$13550 per day(Include meals)",
      Dual: "$23500 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "Riverview Retreat Lodge",

      image: img66,
      description:
        "Nestled along the serene riverbanks, Riverview Retreat Lodge offers a peaceful escape with stunning water vistas. Immerse yourself in nature's harmony and find tranquility in our cozy accommodations by the river's edge..",
      Location: "678 Riverwalk Drive, Riverside Town, GA 30303",
      Standard: "$12500 per day(Include meals)",
      Dual: "$21500 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "Coastal Breeze Resort",

      image: img66,
      description:
        "Embrace the coastal breeze and unwind at Coastal Breeze Resort, where sea and sand meet luxury. Wake up to breathtaking ocean views, enjoy beachfront adventures, and let the soothing sound of waves lull you into relaxation.",
      Location: "222 Skyline Avenue, Metro Central, IL 60606",
      Standard: "$8000 per day(Include meals)",
      Dual: "$15500 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "Mountain Haven Inn",

      image: img66,
      description:
        "Discover solace in the heart of the mountains at Mountain Haven Inn. With a backdrop of majestic peaks, our inn offers a cozy retreat, perfect for nature enthusiasts. Escape the hustle and bustle and find your haven among the mountains.",
      Location: "789 Dune Road, Oasis Springs, NV 89123",
      Standard: "$11500 per day(Include meals)",
      Dual: "$37500 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "Majestic Pines Inn",

      image: img66,
      description:
        "Majestic Pines Inn welcomes you to a forested paradise, where towering pine trees surround our charming accommodations. Experience the grandeur of nature, indulge in forest hikes, and savor the peaceful ambiance of the woods.",
      Location: "101 Forest Trail, Woodland Valley, MT 59802",
      Standard: "$60300 per day(Include meals)",
      Dual: "$70000 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "Golden Gate Hotel",

      image: img66,
      description:
        "At the Golden Gate Hotel, elegance meets city allure. Located in the heart of the metropolis, our hotel offers refined luxury, exceptional service, and easy access to the vibrant culture and attractions of the city.",
      Location: "456 Downtown Street, Metroville, CA 90012",
      Standard: "$7000 per day(Include meals)",
      Dual: "$3560 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "Moonlight Manor Inn",

      image: img66,
      description:
        "Experience enchantment under the moonlight at Moonlight Manor Inn. Our historic manor invites you to step back in time with vintage charm, elegant suites, and an atmosphere that whispers of timeless romance.",
      Location: "123 Palm Beach Road, Paradise Island, HI 96801",
      Standard: "$15600 per day(Include meals)",
      Dual: "$2570 per day(Include meals)",
      Con: "9444244976",
    },
    {
      name: "Velvet Valley Retreat",
      image: img66,
      description:
        "Velvet Valley Retreat is a hidden gem nestled in a lush valley, where rolling hills and vineyards create a picturesque backdrop. Find serenity in our wine country escape, indulge in tastings, and let the valley's beauty ",
      Location: "789 Scenic Drive, Valleytown, AZ 85001",
      Standard: "$9000 per day(Include meals)",
      Dual: "$50000 per day(Include meals)",
      Con: "9444244976",
    },
  ];

  const [expandedHotel, setExpandedHotel] = useState(null);

  // Function to toggle card expansion
  const toggleCardExpansion = (index) => {
    if (expandedHotel === index) {
      setExpandedHotel(null);
    } else {
      setExpandedHotel(index);
    }
  };

  return (
    <div className="hotel-container">
      <h1 className="Hotel-h1">
        Hotel Accommodations
        <br />
      </h1>
      <div className="hotel-grid">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className={`hotel-card ${
              expandedHotel === index ? "expanded" : ""
            }`}
          >
            <div className="hotel-front">
              <img
                className="Hotel-Img"
                src={hotel.image}
                alt={`${hotel.name} `}
              />
              <h2 className="Hotel-h2">{hotel.name}</h2>
              <p className="available-spots">Available</p>
                <button className="book-now-button" onClick={() => handleBookNowClick(hotel.name)}>
                  Book Now
                </button>
              <button
                className="show-more-button"
                onClick={() => toggleCardExpansion(index)}
              >
                {expandedHotel === index ? "Show Less" : "Show More"}
              </button>
            </div>
            <div
              className={`back ${expandedHotel === index ? "expanded" : ""}`}
            >
              <div className="fg">
                <p className="description">{hotel.description}</p>
                <p className="location">Location: {hotel.Location}</p>
                <p className="location">Standard Room: {hotel.Standard}</p>
                <p className="location">Dual Room: {hotel.Dual}</p>
                <p className="location">Contact: {hotel.Con}</p>
              </div>
              <button
                className="show-more-button"
                onClick={() => toggleCardExpansion(index)}
              >
                Show Less
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;