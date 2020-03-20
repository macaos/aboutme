import React, { useState, useEffect } from "react";
import CareerItem from "./Components/CareerItem";
import classnames from "classnames";

const Career = () => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOn(true);
    }, 500);
  }, []);
  const info = [
    {
      terms: "2018 - NOW",
      companyname: ["samsungfire", "insurance", "service"],
      part: "Lead Professional / UI Dept.",
      doit: ["nodejs", "React", "Typescript", "Javascript"]
    },
    {
      terms: "2012 - 2017",
      companyname: ["kobaltlab"],
      part: "co-founder / UX Dept.",
      doit: ["Actionscript", "Swift", "Javascript"]
    },
    {
      terms: "2011 - 2011",
      companyname: ["mrstory"],
      part: "ceo / founder",
      doit: ["PHP", "Objective C", "UI Design"]
    },
    {
      terms: "2007 - 2010",
      companyname: ["kobalt60"],
      part: "Team Leader / UX Dept.",
      doit: ["Actionscript", "AfterEffect", "MotionGraphic"]
    },
    {
      terms: "2001 - 2006",
      companyname: ["Kaywon", "University of ", "Art & Design"],
      part: "Student / Multimedia Design",
      doit: [""]
    }
  ];

  return (
    <ul className={classnames(["depth1 view-Career", { on: isOn }])}>
      <CareerItem data={info[0]} />
      <CareerItem data={info[1]} />
      <CareerItem data={info[2]} />
      <CareerItem data={info[3]} />
      <CareerItem data={info[4]} />
    </ul>
  );
};

export default Career;
