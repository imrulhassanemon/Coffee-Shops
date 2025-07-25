import React from "react";
import {  NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div
      role="tablist"
      className="tabs tabs-lift w-full my-9 flex justify-around"
    >
      {categories.map((category) => (
        <NavLink
          key={category.category}
          className={({ isActive }) => `tab text-2xl ${isActive ? 'tab-active' : ''}`}
          role="tab"
          to={`/category/${category.category}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
