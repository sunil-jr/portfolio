import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const Work = () => {
  return (
    <div className="grid grid-cols-3 items-center  max-md:grid-cols-1 dark:text-white">
      <div className="digitalCanteen p-8 m-4  shadow-2xl flex flex-col h-5/6 justify-between dark:bg-slate-800 rounded-3xl dark:shadow-black ">
        <div className="title flex justify-between text-[18px]">
          Digital Canteen<a href="https://github.com/bot-alert/Digital-Canteen" target="_blank">
          <div className="link">
            <BiLinkExternal href="" className="hover:fill-blueColor w-8 h-8 cursor-pointer" />
          </div></a>
        </div>
        <div className="content m-1 text-[12px]">
          Digital Canteen is a cafeteria management system designed to simplify
          food ordering and reduce crowding. It features a user-friendly
          interface, e-sewa payment option, unique profiles, a token system, QR
          code generation and scanning, and analytics for administrators. It is
          an Android application currently catering to school students with
          plans to expand to public cafeterias.
        </div>
        <div className="techstack m-2 flex flex-row-reverse items-center">
          <img className="w-8 m-1" src="./photoshop.png" />
          <img className="w-6 m-1" src="./firebase.png" />
          <img className="w-8 m-1" src="./xml.png" />
          <img className="w-8 m-1" src="./java.png" />
          <img className="w-8 m-1" src="./android.png" />
        </div>
      </div>
      <div className="digitalPahicahn p-8 m-4  shadow-2xl flex flex-col h-5/6 justify-between dark:bg-slate-800 rounded-3xl dark:shadow-black ">
        <div className="title flex justify-between text-[18px]">
          Digital Pahicahn<a href="https://github.com/bot-alert/Digital-Pahichan" target="_blank">
          <div className="link">
            <BiLinkExternal className="hover:fill-blueColor w-8 h-8 cursor-pointer" />
          </div></a>
        </div>
        <div className="content m-1 text-[12px]">
          Digital Pahichan is an Android app that simplifies government services
          by providing a secure way to manage digital identity. It offers
          emergency services with location details and integrates with
          e-government apps. With its innovative features and user-friendly
          design, it is set to transform the way citizens interact with their
          government and usher in a new era of digital society.{" "}
        </div>
        <div className="techstack m-2 flex flex-row-reverse items-center">
          <img className="w-8 m-1" src="./photoshop.png" />
          <img className="w-6 m-1" src="./firebase.png" />
          <img className="w-8 m-1" src="./xml.png" />
          <img className="w-8 m-1" src="./java.png" />
          <img className="w-8 m-1" src="./android.png" />
        </div>
      </div>
      <div className="fileShare p-8 m-4  shadow-2xl flex flex-col h-5/6 justify-between dark:bg-slate-800 rounded-3xl dark:shadow-black ">
        <div className="title flex justify-between text-[18px]">
          File Share<a href="https://github.com/bot-alert/Fileshare" target="_blank">
          <div className="link">
            <BiLinkExternal className="hover:fill-blueColor w-8 h-8 cursor-pointer" />
          </div></a>
        </div>
        <div className="content m-1 text-[12px]">
          Fileshare is a modern and secure web application for file sharing
          without the need for registration or login. Its minimalist user
          interface is easy to use, and data is saved directly to the database.
          With its responsive design, users can easily access and share files on
          any device.{" "}
        </div>
        <div className="techstack m-2 flex flex-row-reverse items-center">
          <img className="w-6 m-1" src="./sql-file.png" />
          <img className="w-8 m-1" src="./java.png" />
          <img className="h-4 m-1" src="./spring.png" />
        </div>
      </div>
      <div className="nikeStore p-8 m-4  shadow-2xl flex flex-col h-5/6 justify-between dark:bg-slate-800 rounded-3xl dark:shadow-black ">
        <div className="title flex justify-between text-[18px]">
          Nike Shoe<a href="https://github.com/bot-alert/NikeShoe" target="_blank">
          <div className="link">
            <BiLinkExternal className="hover:fill-blueColor w-8 h-8 cursor-pointer" />
          </div></a>
        </div>
        <div className="content m-1 text-[12px]">
          NikeShoe is a static website showcasing Nike shoes with minor
          animations. The website provides a visually appealing experience for
          users interested in browsing Nike shoes.
        </div>
        <div className="techstack m-2 flex flex-row-reverse items-center">
          <img className="h-6 m-1" src="./html-5.png" />
          <img className="h-6 m-1" src="./css-3.png" />
          <img className="w-6 m-1" src="./js.png" />
          <svg viewBox="0 0 248 31" className="text-slate-900  h-3">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
              fill="#38bdf8"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div className="blockchain p-8 m-4  shadow-2xl flex flex-col h-5/6 justify-between dark:bg-slate-800 rounded-3xl dark:shadow-black ">
        <div className="title flex justify-between text-[18px]">
          Blockchain<a href="https://github.com/bot-alert/blockchain" target="_blank">
          <div className="link">
            <BiLinkExternal className="hover:fill-blueColor w-8 h-8 cursor-pointer" />
          </div></a>
        </div>
        <div className="content m-1 text-[12px]">
          Blockchain is a secure application using spring-framework for
          implementing blockchain technology. Its key feature is that tampering
          with any block invalidates the entire chain. Hashes and timestamps
          ensure easy tracking and verification of transactions. Users create a
          genesis block and add blocks as needed. Blockchain provides reliable
          tracking of data and transactions.{" "}
        </div>
        <div className="techstack m-2 flex flex-row-reverse items-center">
          <img className="h-6 m-1" src="./mongoDb.svg" />
          <img className="w-8 m-1" src="./java.png" />
          <img className="h-4 m-1" src="./spring.png" />
        </div>
      </div>
      <div className="eatFast p-8 m-4  shadow-2xl flex flex-col h-5/6 justify-between dark:bg-slate-800 rounded-3xl dark:shadow-black ">
        <div className="title flex justify-between text-[18px]">
          Eat Fast<a href="https://github.com/bot-alert/EatFast" target="_blank">
          <div className="link">
            <BiLinkExternal className="hover:fill-blueColor w-8 h-8 cursor-pointer" />
          </div></a>
        </div>
        <div className="content m-1 text-[12px]">
          EatFirst is a restaurant business website designed with a simple user
          interface using Tailwind CSS. The website provides an efficient and
          easy-to-use platform for customers to access restaurant menus, place
          orders, and browse restaurant information.
        </div>
        <div className="techstack m-2 flex flex-row-reverse items-center">
          <img className="h-6 m-1" src="./html-5.png" />
          <img className="h-6 m-1" src="./css-3.png" />
          <img className="w-6 m-1" src="./js.png" />
          <svg viewBox="0 0 248 31" className="text-slate-900  h-3">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
              fill="#38bdf8"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Work;
