// src/TestimonialCard.js
import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import { TestMonialCard } from "./TestMonialCard";
import girlAvatar from "../../Assets/girl.png";
import { Avatar } from "@chakra-ui/react";
import axios from "axios";
const dummy = [
  {
    title: "Anurag Singh",
    imageUrl: girlAvatar,
    description:
      "Impressed with Scrappe online scrap pickup service  efficient, convenient, and user friendly. Easy booking, punctual team.",
  },
  {
    title: "Sandhya Sharma​",
    imageUrl: girlAvatar,
    description:
      "Highly recommend Scrappe Online for reliable and convenient scrap disposal. Prompt, professional, and user-friendly. Keep it up the excellent work!",
  },
  {
    title: "Sumit Agarwal​​",
    imageUrl: Avatar,
    description:
      "The team from Scrappe Online arrived promptly at the scheduled time. They were friendly, professional, and handled the pickup with great care.",
  },
  {
    title: "Mahesh​​",
    imageUrl: Avatar,
    description:
      "Scrappe Online offers top-notch scrap pickup service! Their team is prompt, and friendly, and ensures hassle-free disposal. Impressed with their commitment!",
  },
];
const TestimonialCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/testimonial`
      );

      setData(response?.data?.length ? response.data : dummy);
    };

    fetchBlogs();
  }, []);
  return (
    <div className="testimonial_container">
      {data?.map((ele) => (
        <TestMonialCard
          avatar={ele.imageUrl}
          name={ele.title}
          content={ele.description}
        />
      ))}
    </div>
  );
};

export default TestimonialCard;
