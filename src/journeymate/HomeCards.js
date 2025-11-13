import React from "react";

const HomeCards = () => {
  const cardsData = [
    {
      title: "Beach Escapes",
      text: "Relax on the world’s most beautiful beaches and soak up the sun, sea, and serenity.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "Mountain Adventures",
      text: "Feel the rush of adrenaline as you trek, climb, or camp in breathtaking mountain ranges.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      title: "Cultural Heritage",
      text: "Dive into diverse cultures, visit heritage sites, and experience authentic local traditions.",
      img: "https://images.unsplash.com/photo-1724398915427-edc535c546fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VsdHVyYWwlMjBoZXJpdGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      title: "City Getaways",
      text: "Discover iconic skylines, vibrant nightlife, and endless shopping in modern cities.",
      img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
    },
    {
      title: "Desert Safaris",
      text: "Embark on thrilling desert adventures with dune bashing, camel rides, and sunset views.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Wildlife Exploration",
      text: "Get closer to nature by exploring jungles, safaris, and national parks teeming with wildlife.",
      img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    },
    {
      title: "Luxury Cruises",
      text: "Sail across oceans and enjoy world-class comfort, fine dining, and panoramic views onboard.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Island Retreats",
      text: "Escape to tropical islands surrounded by turquoise waters, coral reefs, and palm trees.",
      img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    },
  ];

  return (
    <section className="container py-5 text-center">
      <h2 className="fw-bold mb-4">Explore Our Top Travel Experiences</h2>
      <p className="text-muted mb-5">
        Whether you crave adventure, culture, or relaxation — JourneyMate brings
        you the best destinations around the globe.
      </p>
      <div className="row g-4">
        {cardsData.map((card, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={card.img}
                className="card-img-top"
                alt={card.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{card.title}</h5>
                <p className="card-text text-muted">{card.text}</p>
              </div>
              <div className="card-footer bg-white border-0">
                <button className="btn btn-outline-primary btn-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCards;
