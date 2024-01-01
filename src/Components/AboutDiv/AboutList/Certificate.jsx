import React from "react";

const Certificate = () => {
  return (
    <div className="grid grid-cols-2 gap-2 text-sm">
      <a
        className="google  shadow-2xl hover:scale-110 dark:bg-slate-800 dark:shadow-black cursor-pointer p-2 m-4 rounded-2xl  items-center justify-center flex "
        href="https://coursera.org/share/fb1b1a59f856fe96145036fe51c4d74b"
        target="_blank"
      >
        <div className="icon  max-md:w-[80%]  w-[40%]">
          <img src={"./googleLogo.svg"} />
        </div>
      </a>
      <a
        className="harvard shadow-2xl hover:scale-110 dark:bg-slate-800 dark:shadow-black cursor-pointer p-2 m-4 rounded-2xl  items-center justify-center flex "
        href="https://certificates.cs50.io/4564061d-a886-430e-9862-f8d4d3c7d6e5"
        target="_blank"
      >
        <div className="icon  max-md:w-[80%]  w-[40%] ">
          <img src={"./havard.svg"} />
        </div>
      </a>
      <a
        className="mongoDb shadow-2xl hover:scale-110 dark:bg-slate-800 dark:shadow-black cursor-pointer p-2 m-4 rounded-2xl  items-center justify-center flex "
        href="https://university.mongodb.com/course_completion/4e88a833-dc60-4100-9355-daea467c6774?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing"
        target="_blank"
      >
        <div className="icon  max-md:w-[80%]  w-[40%] ">
          <img src={"./mongoDb.svg"} />
        </div>
      </a>
      <a
        className="redish shadow-2xl hover:scale-110 dark:bg-slate-800 dark:shadow-black cursor-pointer p-2 m-4 rounded-2xl  items-center justify-center flex "
        href="https://university.redis.com/certificates/ff6108d85e5640ecaa6b2b99bb933180"
        target="_blank"
      >
        <div className="icon  max-md:w-[80%]  w-[40%] ">
          <img src={"./redish.svg"} />
        </div>
      </a>
      <a
        className="cisco  shadow-2xl hover:scale-110 dark:bg-slate-800 dark:shadow-black cursor-pointer p-2 m-4 rounded-2xl  items-center justify-center flex "
        href="https://www.credly.com/badges/ec9261db-606c-421b-a557-3ccdeac83740/public_url"
        target="_blank"
      >
        <div className="icon  max-md:w-[80%]  w-[40%] ">
          <img src={"./cisco.svg"} />
        </div>
      </a>
      <a
        className="greatLearning shadow-2xl hover:scale-110 dark:bg-slate-800 dark:shadow-black cursor-pointer p-2 m-4 rounded-2xl  items-center justify-center flex "
        href="https://olympus1.mygreatlearning.com/course_certificate/KABPOTPS"
        target="_blank"
      >
        <div className="icon  max-md:w-[80%]  w-[40%] ">
          <img src={"./greatLearning.svg"} />
        </div>
      </a>
    </div>
  );
};

export default Certificate;
