import "./App.css";
import { React, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";
import { toast } from "react-hot-toast";

function LinkShorter() {
  const [userInput, setUserInput] = useState("");
  const [shortendLink, setShortendLink] = useState("");

  //...
  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      setShortendLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };

  const success = () => {
    toast.success("successfully Copied the link");
  };

  return (
    <div className=" container h-screen flex justify-center items-center">
      <div className=" text-center">
        <h1 className=" text-2xl font-medium text-blue-500 mb-4">
          Our <span className=" text-yellow-400">URL Shortener</span>
        </h1>
        <div>
          <input
            className="outline-none border-2 border-blue-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3"
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            placeholder="Enter link to be shortened"
          />
          <button
            className=" bg-blue-500 text-white px-8 py-3 ml-4 rounded-md"
            onClick={() => {
              fetchData();
            }}
          >
            Submit URL
          </button>
          {/* <div className="mt-5">
            {shortendLink}
            <button className="border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md">
              Copy URL to Clipboard
            </button>
          </div> */}
          <div className=" mt-10">
            <p>{shortendLink}</p> <br />
            <CopyToClipboard text={shortendLink}>
              <button
                className="border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md"
                onClick={success}
              >
                Copy URL to Clipboard
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LinkShorter;
