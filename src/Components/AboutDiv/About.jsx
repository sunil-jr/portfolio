import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import Certificate from "./AboutList/Certificate";
import Education from "./AboutList/Education";
import Experience from "./AboutList/Experience";
import TechStack from "./AboutList/TechStack";
import Skill from "./AboutList/Skill";

const About = () => {
  const [currentObject, setCurrentObject] = useState(0);
  let objectList = {
    Certificate: <Certificate />,
    Education: <Education />,
    Skill: <Skill />,
    TechStack: <TechStack />,
    Experience: <Experience />,
  };
  let lengthObjectList = Object.keys(objectList).length;
  function increaseCurrentObject() {
      setCurrentObject((currentObject) => (currentObject + 1) % lengthObjectList);
 
  }
  function decreaseCurrentObject() {
    setCurrentObject(
      (currentObject) =>
        (currentObject + lengthObjectList - 1) % lengthObjectList
    );
  }

  return (
    <div className="flex flex-row max-md:flex-col h-[38rem]">
      <div className="left text-[48px] w-[40%] max-md:w-full flex justify-center items-center">
        <div className="content  flex flex-col justify-center items-center">
          <SlArrowUp
            className="m-8 max-md:m-4 dark:fill-white hover:fill-blueColor"
            onClick={increaseCurrentObject}
          />
          <p className="text-[22px] text-slate-300 dark:text-white">
            {Object.keys(objectList)[(currentObject + 1) % lengthObjectList]}
          </p>
          <p className=" text-[34px] text-blueColor">
            {Object.keys(objectList)[currentObject]}
          </p>
          <p className="text-[22px] text-slate-300 dark:text-white">
            {
              Object.keys(objectList)[
                (currentObject + lengthObjectList - 1) % lengthObjectList
              ]
            }
          </p>

          <SlArrowDown
            className="m-8 max-md:m-4 dark:fill-white  hover:fill-blueColor"
            onClick={decreaseCurrentObject}
          />
        </div>
      </div>
      <div className="right w-[60%] max-md:w-full dark:text-white">
        {Object.values(objectList)[currentObject]}
      </div>
    </div>
  );
};

export default About;
