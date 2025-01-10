import React from "react";

//function Card({username}) {  console.log(username);} //destructing props method
//function Card(props){
   //console.log("props", props);
   //console.log(props.username );
   function Card({username ,btnText="Read More"}){
    
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-3">
        <img
          src="https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor </h2>
        </div>
        <p className="text-gray-300 mb-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {/*if some one not write the button text then it will show the default text 
            its not effective so we write in props
           {props.btnText ||"Read More"}*/}
            {btnText}
          </button>
      </div>
     
    )
}

export default Card;