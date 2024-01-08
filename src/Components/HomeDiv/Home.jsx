import React from "react";
import { TypeAnimation } from "react-type-animation";

const Body = () => {
  const onButtonClick = () => {
    fetch("SunilSubediCV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SunilSubediCV.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="relative ">
      <div className="boxes ">
    <div className="bg-gradient-to-r dark:shadow-black shadow-2xl right-[40rem] from-red-500 to-yellow-500 absolute w-[8rem] h-[8rem] rounded-full"></div>
    <div className="bg-gradient-to-r dark:shadow-black shadow-2xl top-[-3rem] right-[35rem] from-red-500 to-yellow-500 absolute w-[4rem] h-[4rem] rounded-full"></div>
    <div className="bg-gradient-to-r dark:shadow-black shadow-2xl top-[17rem] left-[-11.5rem] from-red-500 to-yellow-500 absolute w-[15rem] h-[15rem] rounded-full"></div>


      </div>
      <div className="absolute top-0 left-0 right-0 flex flex-row-reverse items-center  justify-center max-md:flex-col max-md:items-center ">
        <div className="image">
          <img
            className="h-[35rem] max-md:h-[10rem] drop-shadow-2xl "
            src={"./sunil.png"}
          />
        </div>
        <div className="gap w-[10%]"></div>
        <div className=" p-8 m-8 max-md:m-14 flex w-[40rem] flex-col max-md:text-center text-justify max-md:w-[100%]">
          <div className="introduction">
            <h1 className="text-[48px] dark:text-white"> Hi, I'm </h1>
            <h1 className="logo text-[48px] text-blueColor">
              <strong>Sunil</strong> Subedi
            </h1>
            <h1 className="text-[48px] dark:text-white">
              <TypeAnimation
                sequence={[
                  "Java Developer",
                  5000,
                  "Software Engineer",
                  5000,
                  "",
                  500,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </h1>
            <div className="about">
              <p className="text-gray-500 dark:text-gray-300 font-light text-sm p-2 +">
              A proficient Java developer specializing in Spring and Hibernate frameworks.
              Known for attention to detail and collaborative teamwork. Eager learner staying updated with the latest technologies for exceptional results.
              </p>
            </div>
            <div className="social flex flex-row max-md:justify-center">
              <a
                href="https://github.com/sunil-jr"
                target="_blank"
                className="w-[8%] max-md:w-[20%] m-2"
              >
                <svg
                  lable="github"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sunil-subedi-748940237"
                target="_blank"
                className="w-[8%] max-md:w-[20%] m-2"
              >
                {" "}
                <svg
                  lable="linkdinl"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/sunil.subedi.374549"
                target="_blank"
                className="w-[8%] max-md:w-[20%] m-2"
              >
                {" "}
                <svg
                  lable="facebook"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Ebene 1"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="#1877f2"
                    d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                  />
                  <path
                    fill="#fff"
                    d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/subedisunil495"
                target="_blank"
                className="w-[8%] max-md:w-[20%] m-2"
              >
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64"><rect width="512" height="509.64" rx="115.61" ry="115.61"/>
                  <path fill="#fff" fill-rule="nonzero" d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"/>
                </svg>
              </a>
              <a
                href="mailto:subedisunil495@gmail.com"
                className="w-[8%] max-md:w-[20%] m-2"
              >
                {" "}
                <svg
                  lable="gmail"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#ea4435"
                    d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
                  />
                  <path
                    fill="#00ac47"
                    d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
                    transform="rotate(180 26.5 16)"
                  />
                  <path
                    fill="#ffba00"
                    d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"
                  />
                  <path
                    fill="#4285f4"
                    d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
                  />
                  <path
                    fill="#c52528"
                    d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"
                  />
                </svg>
              </a>
              <a
                href="tel:+9779840031255"
                className="w-[8%] max-md:w-[20%] m-2"
              >
                <svg
                  lable="phone"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                >
                  <defs>
                    <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                      <stop offset="0%" stop-color="#86FC6F" />
                      <stop offset="100%" stop-color="#0CD419" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle cx="20" cy="20" r="20" fill="url(#a)" />
                    <path
                      fill="#FFF"
                      d="M23.1179863,24.9844003 C22.7849875,25.1958537 22.3681546,25.2262713 22.0079863,25.0654003 C21.2939863,24.6694003 19.9919863,23.7244003 18.1859863,21.9184003 C16.3799863,20.1124003 15.3509863,18.7234003 14.9519863,18.0184003 C14.7911153,17.658232 14.8215329,17.2413991 15.0329863,16.9084003 L16.0709863,15.0904003 C16.4429863,14.4454003 16.5269863,14.0374003 16.1219863,13.4104003 L13.4549863,9.32740033 C12.6959863,8.12740033 12.3089863,8.18140033 11.6549863,8.48140033 C8.25298626,10.0294003 6.92398626,12.2194003 11.7509863,19.8424003 C13.0529863,21.8974003 17.0309863,26.2474003 20.4239863,28.4494003 C27.6899863,33.1684003 30.0809863,31.7494003 31.4999863,28.4494003 C31.7999863,27.7834003 31.9319863,27.3964003 30.7889863,26.6494003 L26.6609863,24.0244003 C26.0339863,23.6224003 25.7279863,23.5174003 25.0799863,23.8924003 L23.1179863,24.9844003 Z"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <button
              onClick={onButtonClick}
              className=" drop-shadow-2xl hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300  rounded-2xl mt-8 text-[28px] px-4
           text-white bg-blueColor"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
