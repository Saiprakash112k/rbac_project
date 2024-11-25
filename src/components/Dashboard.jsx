import React from "react";
import { Card } from "antd";
import Header from "../header/Header";
const Dashboard = () => {
  return (
    <div className="p-5">
    <Header/>
    <div className="flex justify-center items-center pt-4">
      <p className="w-2/4 text-justify font-normal text-md md:text-xl text-md sm:font-semibold lg:font-bold">
      Welcome to our esteemed clients! We are thrilled to have you with us and are committed to providing you with exceptional service and support. Your trust in us inspires our dedication to excellence, innovation, and results tailored to meet your unique needs. Together, we look forward to building a partnership founded on mutual respect and shared success. Thank you for choosing us as your trusted partner!</p>
    </div>
    </div>
  );
};

export default Dashboard;
