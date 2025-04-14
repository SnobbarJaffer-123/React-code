//import React from 'react'

type CardProps = {
    username: string;
    city:string;
    age:number;
  };

function Card({username,city,age}:CardProps){
    console.log(username);

    return (
        <div className="flex flex-col items-center gap-5 p-7 md:flex-row md:gap-8 rounded-2xl bg-gray-500 m-10">
        <div >
          <img className="size-56 m-b-12 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/20065970/pexels-photo-20065970/free-photo-of-blue-hour-moments.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div className=" items-center md:items-start">
          <span className="text-4xl font-medium m-2 ">{username}</span>
          <span className="flex font-medium text-sky-500">{city}</span>
          <span className="flex gap-2 font-medium text-black dark:text-gray-400">
            <span>{age}</span>
            <span>·</span>
            <span>.</span>
          </span>
        </div>
      </div>
    )

}
export default Card
