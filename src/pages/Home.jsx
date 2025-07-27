import React from "react";
import Banner from "../component/Banner";
import Heading from "../component/Heading";
import Categories from "../component/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {


    const categories = useLoaderData()

  return (
    <div className="">
      {/* Heading */}
      <Banner></Banner>
      <Heading
        title="Welcome to Our Coffee Shop"
        subtitle="Explore our wide range of coffees"
      ></Heading>
      {/* Category Tab Section  */}
      <Categories categories={categories}></Categories>
      {/* Dynamic Nested Component  */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
