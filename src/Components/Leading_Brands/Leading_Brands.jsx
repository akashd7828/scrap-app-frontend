import React, { useEffect, useState } from "react";
import "./Leading_Brands.css";
import ISB from "../../Assets/ISB.jpeg";
import AIC from "../../Assets/AIC.jpeg";
import thub from "../../Assets/thub.png";
import axios from "axios";

const leadingDummy = [{ imageUrl: ISB }, { imageUrl: AIC }, { imageUrl: thub }];
const Leading_Brands = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/leadingBrands`
      );

      setData(response?.data?.length ? response?.data : leadingDummy);
    };

    fetchBlogs();
  }, []);
  return (
    <div className="leading-brands-container">
      <div className="heading">
        <p>Leading brands trust Scrappe</p>
      </div>
      <div className="images-wrapper">
        <div className="images-container">
          {/* ISB AIC Logo */}
          {data?.map((ele) => (
            <img src={ele.imageUrl} alt="leading brand" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leading_Brands;
