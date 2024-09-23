import React, { useEffect, useState } from "react";
import "./ScrapRates.css";
import { useNavigate } from "react-router-dom";

const defaultScrapItems = [
  {
    id: 1,
    scrapType: "Newspaper",
    amount: "Rs 14",
    unit: "kg",
    note: "Recently Newspaper Price is Dropped",
    minWeight: null,
    description: "Great for recycling and contributing to a greener planet!",
  },
  {
    id: 2,
    scrapType: "Books",
    amount: "Rs 13",
    unit: "kg",
    note: null,
    minWeight: null,
    description: "Old textbooks and novels in good condition can be sold.",
  },
  {
    id: 3,
    scrapType: "Gatta",
    amount: "Rs 7",
    unit: "kg",
    note: "Minimum 50Kg Required",
    minWeight: "50 Kg Minimum",
    description:
      "Used for various applications, making it valuable for recycling.",
  },
  {
    id: 4,
    scrapType: "Copper",
    amount: "Rs 570",
    unit: "kg",
    note: null,
    minWeight: null,
    description: "High demand due to its conductivity and recycling value.",
  },
  {
    id: 5,
    scrapType: "Aluminium",
    amount: "Rs 140",
    unit: "kg",
    note: null,
    minWeight: null,
    description: "Lightweight and recyclable, perfect for a range of products.",
  },
];

const ScrapRates = () => {
  const [scrapItems, setScrapItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchScrapRates = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/scrap-types`
        ); // Replace with your API endpoint
        const data = await response.json();
        console.log("@@data", data);
        if (data && data.length > 0) {
          setScrapItems(data);
        } else {
          setScrapItems(defaultScrapItems);
        }
      } catch (error) {
        console.error("@@Error fetching scrap rates:", error);
        setScrapItems(defaultScrapItems); // Fallback to default data on error
      } finally {
        setLoading(false);
      }
    };

    fetchScrapRates();
  }, []);

  const handleClick = () => {
    if (user) {
      navigate("/scraps");
    } else {
      navigate("/");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="scrap-rates">
      <h2>Scrap Rates</h2>
      <div className="note">
        <p>
          <strong>Note:</strong> Scrap Rates may be different for bulk Scrap.
          Call us at <strong>7828730958</strong> to get a quote for bulk Scrap.
          We don’t deal in toughened glass, wooden items, fabrics. Minimum Scrap
          Pickup Value Should be <strong>150Rs</strong> Required.
        </p>
      </div>
      <div className="static-content">
        <h2>Why Choose Us?</h2>
        <p>
          At ScrapPe, we value sustainability and are committed to providing
          fair prices for your scrap materials. Our expert team ensures a
          hassle-free pickup service, allowing you to contribute to a greener
          planet while getting the best rates for your scrap.
        </p>
        <p>
          Whether you're a homeowner or a business, we handle all types of
          scrap. Contact us today to discover how you can benefit from our
          services!
        </p>
      </div>
      <div className="scrap-rates-grid">
        {scrapItems.map((item) => (
          <div key={item.id} className="scrap-card">
            <h2>{item.scrapType}</h2>
            <p className="rate">
              {item.amount}/{item.unit}
            </p>
            {item.note && <p className="note">{item.note}</p>}
            {item.minWeight && <p className="min-weight">{item.minWeight}</p>}
            <p className="description">{item.description}</p>
            <button onClick={handleClick} className="book-button">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrapRates;
