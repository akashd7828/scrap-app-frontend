import React from "react";
import "./Blogs.css";
import { BlogCard } from "./BlogCard";
import MetalImg from "../../Assets/metal_scrap.jpg";
import PlasticImg from "../../Assets/plastic.jpg";
import ElecImg from "../../Assets/electronics-recycling.jpg";
import PaperImg from "../../Assets/paper_img.jpeg";

const blogData = [
  {
    title: "How to Sell Scrap Metal Online Efficiently",
    content:
      "Selling scrap metal online has never been easier. Learn how to assess the value of your scrap, find the right platforms, and maximize your profits while staying eco-friendly.",
    image: MetalImg, // Replace with actual image URL
  },
  {
    title: "Why Recycling Scrap Electronics is Important",
    content:
      "E-waste is one of the fastest-growing waste streams. Discover the benefits of recycling electronics and how online platforms help you dispose of old devices responsibly.",
    image: ElecImg, // Replace with actual image URL
  },
  {
    title: "Plastic Waste: The Impact on Environment and How You Can Help",
    content:
      "Plastic waste is a significant threat to the environment. Learn how recycling plastic can help reduce pollution and what steps you can take to recycle your household plastic waste effectively.",
    image: PlasticImg, // Replace with actual image URL
  },
  {
    title: "Scrap Paper: Earn Money While Saving Trees",
    content:
      "Scrap paper is one of the most recyclable materials. Find out how you can contribute to reducing deforestation by selling your scrap paper online and promoting a circular economy.",
    image: PaperImg, // Replace with actual image URL
  },
];
const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Our Blogs</h1>

      <div className="blogs-grid">
        {blogData.map((ele, index) => {
          return (
            <BlogCard
              image={ele.image}
              title={ele.title}
              content={ele.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
