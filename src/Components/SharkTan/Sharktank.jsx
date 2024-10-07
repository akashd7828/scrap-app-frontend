import React, { useEffect, useState } from "react";
import "./SharkTank.css";
import MetalImg from "../../Assets/metal_scrap.jpg";
import PlasticImg from "../../Assets/plastic.jpg";
import ElecImg from "../../Assets/electronics-recycling.jpg";
import PaperImg from "../../Assets/paper_img.jpeg";
import axios from "axios";
import { BlogCard } from "../Blogs/BlogCard";

const blogData = [
  {
    title: "How to Sell Scrap Metal Online Efficiently",
    content:
      "Selling scrap metal online has never been easier. Learn how to assess the value of your scrap, find the right platforms, and maximize your profits while staying eco-friendly.",
    imageUrl: MetalImg, // Replace with actual image URL
  },
  {
    title: "Why Recycling Scrap Electronics is Important",
    content:
      "E-waste is one of the fastest-growing waste streams. Discover the benefits of recycling electronics and how online platforms help you dispose of old devices responsibly.",
    imageUrl: ElecImg, // Replace with actual image URL
  },
  {
    title: "Plastic Waste: The Impact on Environment and How You Can Help",
    content:
      "Plastic waste is a significant threat to the environment. Learn how recycling plastic can help reduce pollution and what steps you can take to recycle your household plastic waste effectively.",
    imageUrl: PlasticImg, // Replace with actual image URL
  },
  {
    title: "Scrap Paper: Earn Money While Saving Trees",
    content:
      "Scrap paper is one of the most recyclable materials. Find out how you can contribute to reducing deforestation by selling your scrap paper online and promoting a circular economy.",
    imageUrl: PaperImg, // Replace with actual image URL
  },
];
const AwardsSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/awards`
      );

      setData(response?.data || blogData);
    };

    fetchBlogs();
  }, []);
  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Our Awards</h1>

      <div className="blogs-grid">
        {data?.map((ele, index) => {
          return (
            <BlogCard
              image={ele.imageUrl}
              title={ele.title}
              content={ele.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AwardsSection;
