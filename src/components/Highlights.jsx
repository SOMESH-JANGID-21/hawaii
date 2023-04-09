import React, { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
// import { toast } from "react-toastify";

function Highlights() {
  // const [highLig,setHighLig] = useState([]);

  // const getData = async () => {
  //     try {
  //       const response = await fetch('https://web-dev.dev.kimo.ai/v1/highlights', {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       toast.error(error.message);
  //     }
  //   }

  // useEffect(() => {
  //     getData();
  // },[])

  const data = [
    {
      title: "Surfing",
      description: "Best Hawaiian islands for surfing.",
      image:
        "https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png",
    },
    {
      title: "Traditional Festivals",
      description: "Best places to attend traditional festivals in Hawaii",
      image:
        "https://storage.googleapis.com/topics-images/web-dev-images/traditional_festivals_low.png",
    },
    {
      title: "Volcanoes",
      description: "Volcanic conditions can change at any time.",
      image:
        "https://storage.googleapis.com/topics-images/web-dev-images/volcanoes_low.png",
    },
  ];

  return (
    <div className="container w-[80%] m-auto ">
      <div>
        <h2 className="py-[2%] px-[8%] text-center text-4xl ">Highlights...</h2>
        <hr className="w-1/5 mx-auto text-2xl"/>
      </div>
      {/* cards  */}
      <div className="grid grid-col-1 md:grid-cols-3 md:gap-3 justify-items-center">
        {/* 1st card  */}
        {data.map((item, index) => (
          <div key={index} className="py-3">
            <div className="rounded overflow-hidden shadow-lg max-w-sm">
              <img src={item.image} alt="Surfing img" className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p>{item.description}</p>
                <HiArrowRight className=" cursor-pointer piya"></HiArrowRight>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
