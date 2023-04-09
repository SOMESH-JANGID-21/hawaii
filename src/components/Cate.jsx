import React from 'react'
import { HiArrowRight } from "react-icons/hi";


function Cate() {

    const data =[
        {
        "name": "Adventure",
        "activities": [
        {
        "title": "Surfing in the waves of Waikiki"
        },
        {
        "title": "Hiking the Diamond Head trail in Oahu"
        },
        {
        "title": "Exploring Hawaii Volcanoes National Park"
        },
        {
        "title": "Snorkeling at the beaches of Maui"
        },
        {
        "title": "Taking a helicopter tour to see the active volcanoes and waterfalls"
        }
        ]
        },
        {
        "name": "Culinary",
        "activities": [
        {
        "title": "Taking a Hawaiian cooking class"
        },
        {
        "title": "Trying Poke at a local restaurant"
        },
        {
        "title": "Going on a coffee tasting tour in the Big Island"
        },
        {
        "title": "Attending a Hawaiian luau dinner show"
        },
        {
        "title": "Visiting a local market to taste exotic fruits and other local products"
        }
        ]
        },
        {
        "name": "Eco-tourism",
        "activities": [
        {
        "title": "Hiking in the lush forests of the Big Island"
        },
        {
        "title": "Kayaking through the mangroves of Maui"
        },
        {
        "title": "Whale watching during the winter months"
        },
        {
        "title": "Snorkeling with sea turtles at the Turtle Bay on Oahu"
        },
        {
        "title": "Visiting the Akaka Falls State Park on the Big Island to see the stunning waterfall"
        }
        ]
        },
        {
        "name": "Family",
        "activities": [
        {
        "title": "Visiting the Waikiki Aquarium in Oahu"
        },
        {
        "title": "Going on a scenic drive to see the Road to Hana on Maui"
        },
        {
        "title": "Exploring the Polynesian Cultural Center on Oahu"
        },
        {
        "title": "Taking a sunset dinner cruise along the coast of Maui"
        },
        {
        "title": "Attending a hula show or a Hawaiian music concert as a family"
        }
        ]
        },
        {
        "name": "Sport",
        "activities": [
        {
        "title": "Playing golf on one of Hawaii's world-famous courses"
        },
        {
        "title": "Going on a deep-sea fishing excursion"
        },
        {
        "title": "Participating in a beach volleyball game on Waikiki Beach"
        },
        {
        "title": "Hiking the challenging trails of the Koko Head Crater on Oahu"
        },
        {
        "title": "Surfing lessons on the North Shore of Oahu"
        }
        ]
        }
        ]
  return (
    <>
    <div className='bg-blue-100'>
        <div className="container w-[100%] m-auto pb-4 ">
      {/* cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0.2 justify-items-center">
        {/* 1st col  */}
        <div>
            <h1 className='my-4 text-xl'>Category...</h1>
        {data.map((item, index) => (
          <div key={index} className="py-1 w-96 mx-auto my-1">
            <div className="rounded-md row-span-5 overflow-hidden shadow-lg max-w-md bg-white">
              <div className=" flex justify-between px-6 py-3 ">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <HiArrowRight className=" cursor-pointer piya "></HiArrowRight>
              </div>
            </div>
          </div>
        ))}
        </div>

        {/* 2nd col  */}
            <div className="container w-[100%]  ">
                <h1 className="my-4 text-xl ms-32 md:ms-24">Travel Guide...</h1>
                <div className="py-1 w-96 mx-auto my-1">
            <div className="rounded-md row-span-5 overflow-hidden shadow-lg max-w-lg bg-white">
              <div className=" grid grid-cols-2  justify-items-center px-6 py-3 ">
                <div>
                <h2 className='font-bold text-xl mb-2'>Zia Zia..</h2>
                <p>Guide Since 2012</p>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-6'>Contact</button>
                </div>
                <div>
                    <img src="./images/ziaZia.avif" alt="photo" className="rounded" />
                </div>
                
              </div>
            </div>
          </div>
            </div>

      </div>
    </div>
    </div>
  </>
  )
}

export default Cate
