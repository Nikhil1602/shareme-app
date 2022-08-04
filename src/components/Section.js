import React, { useRef, useState } from "react";
import BANNER from "../assets/images/banner.png";
import FILE from "../assets/images/file.svg";
import COPY from "../assets/icons/copy_icon.svg";

const Section = () => {
  const [drag, setDrag] = useState("");
  const [progess, setProgress] = useState("0%");
  const [show, setShow] = useState(true);
  const [link, setLink] = useState("");
  const [disable, setDisable] = useState(false);
  const [email, setEmail] = useState({
    your_email: "",
    receiver_email: "",
  });
  const FileRef = useRef();
  const urlRef = useRef();

  const HOST = "https://innshare.herokuapp.com/";
  const uploadURL = `${HOST}api/files`;
  const emailURL = `${HOST}api/files/send`;

  const updateProgress = (e) => {
    // console.log(e);
    const percent = Math.round((e.loaded / e.total) * 100);
    setProgress(`${percent}%`);
  };

  const showLink = ({ file: url }) => {
    console.log(url);
    FileRef.current.files = "";
    setLink(url);
    setShow(false);
    setDisable(false);

    // setProgress("0%");
  };

  const uploadFile = () => {
    setShow(true);
    const file = FileRef.current.files[0];
    const formData = new FormData();
    formData.append("myFile", file);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      // console.log(xhr.readyState);
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // console.log(xhr.response);
        showLink(JSON.parse(xhr.response));
      }
    };
    xhr.upload.onprogress = updateProgress;
    xhr.open("POST", uploadURL);
    xhr.send(formData);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDrag("dragged");
  };

  const handleDrageLeave = (e) => {
    setDrag("");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDrag("");
    const files = e.dataTransfer.files;
    // console.table(files);
    if (files.length) {
      FileRef.current.files = files;
      uploadFile();
    }
  };

  const handleRef = () => {
    FileRef.current.click();
  };

  const handleChange = () => {
    uploadFile();
  };

  const handleCopy = () => {
    urlRef.current.select();
    document.execCommand("copy");
  };

  const handleEmail1 = (e) => {
    setEmail({ ...email, your_email: e.target.value });
  };

  const handleEmail2 = (e) => {
    setEmail({ ...email, receiver_email: e.target.value });
  };

  const handleReset = () => {
    setEmail({ your_email: "", receiver_email: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      uuid: link.split("/").splice(-1, 1)[0],
      to: email.receiver_email,
      from: email.your_email,
    };

    setDisable(true);
    fetch(emailURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(({ success }) => {
        if (success) {
          setLink("");
        }
      });
  };

  return (
    <div className="flex-inline border  border-cyan-600">
      <div className="lg:flex md:flex-inline lg:justify-between">
        <form className="w-full">
          <section
            onDragOver={handleDragOver}
            onDragLeave={handleDrageLeave}
            onDrop={handleDrop}
            id="drop-zone"
            // className="border-4 sm:w-full md:w-11/12 lg:w-10/12 bg-white border-cyan-500 rounded border-dashed h-96 m-7">
            className={`border-4 sm:w-full md:w-11/12 lg:w-10/12 transition-all ${
              drag === "dragged" ? "bg-cyan-50" : "bg-white"
            } border-cyan-500 rounded border-dashed h-96 m-7`}>
            <input
              type="file"
              onChange={handleChange}
              className="hidden"
              ref={FileRef}
            />
            <div className="flex justify-center items-center relative h-5/6">
              <img
                src={FILE}
                // className="w-20 absolute duration-200 ease-in-out transition-transform origin-bottom scale-90 grayscale-[50] dragged:translate-x-[20px] dragged:rotate-[10deg]"
                className={`w-20 absolute duration-200 ease-in-out transition-transform origin-bottom scale-90 grayscale-[50] ${
                  drag === "dragged" ? "translate-x-[20px] rotate-[10deg]" : ""
                }`}
                alt="file"
                draggable="false"
              />
              <img
                src={FILE}
                // className="w-20 absolute duration-200 ease-in-out transition-transform origin-bottom z-10 dragged:translate-y-[-5px]"
                className={`w-20 absolute duration-200 ease-in-out transition-transform origin-bottom z-10 ${
                  drag ? "translate-y-[-5px]" : ""
                }`}
                alt="file"
                draggable="false"
              />
              <img
                src={FILE}
                // className="w-20 duration-200 ease-in-out transition-transform origin-bottom scale-90 grayscale-[50] absolute dragged:rotate-[-10deg] dragged:translate-x-[-20px]"
                className={`w-20 duration-200 ease-in-out transition-transform origin-bottom scale-90 grayscale-[50] absolute ${
                  drag ? "rotate-[-10deg] translate-x-[-20px]" : ""
                }`}
                alt="file"
                draggable="false"
              />
              <div className="mt-40 font-[Poppins] text-2xl tracking-wide font-bold text-center">
                Drop your files here or,{" "}
                <span
                  onClick={handleRef}
                  className="text-cyan-500 cursor-pointer">
                  browse
                </span>
              </div>
            </div>
          </section>
          <div
            className={`sm:w-full md:w-11/12 lg:w-10/12 rounded h-20 border ml-7`}>
            <div
              style={{ width: progess }}
              className={`bg-cyan-100
                ${show ? "flex-inline" : "hidden"} 
                } pr-5 transition-[width] duration-700 ease-linear rounded origin-left h-full`}>
              <div className="font-[Poppins] ml-5 pt-2 font-semibold">
                Uploading...
              </div>
              <div className="font-[Poppins] ml-5 text-sm">
                <span>{progess}</span>
                <div className="h-1 rounded w-full bg-cyan-300"></div>
              </div>
            </div>
            <div
              className={`font-[Poppins] 
                ${show ? "" : "hidden"} 
                text-center w-full border`}>
              <p>Link expires in 24 hrs</p>
              <div className="w-full border-2 text-base bg-cyan-50 border-cyan-300 border-dashed rounded flex p-3">
                <input
                  type="text"
                  id="fileURL"
                  ref={urlRef}
                  readOnly={true}
                  className="outline-none w-full border-none bg-cyan-50 font-semibold"
                  // value={`${HOST}/files/de3cd7b-4btw-23kl00fadeccsd-dsfgc-adk`}
                  value={link}
                />
                <img
                  src={COPY}
                  className="ml-2 cursor-pointer"
                  alt="copy-icon"
                  onClick={handleCopy}
                />
              </div>
              <p className="my-5">Or send via Email</p>
              <div className="border-2 mb-10 p-5 rounded border-cyan-500">
                <form onSubmit={handleSubmit}>
                  <div className="flex justify-between mb-2">
                    <label className="text-lg" for="sender">
                      Your email
                    </label>
                    <input
                      className="border-cyan-300 outline-none border-b-2"
                      type="email"
                      required
                      name="from"
                      id="sender"
                      value={email.your_email}
                      onChange={handleEmail1}
                    />
                  </div>
                  <div className="flex justify-between mb-2">
                    <label className="text-lg" for="receiver">
                      Receiver's email
                    </label>
                    <input
                      className="border-cyan-300 outline-none border-b-2"
                      type="email"
                      required
                      name="to"
                      id="receiver"
                      value={email.receiver_email}
                      onChange={handleEmail2}
                    />
                  </div>
                  <div className="flex justify-evenly mt-10">
                    <button
                      type="submit"
                      disabled={disable}
                      className="border-none bg-cyan-100 py-2 px-10 border-cyan-500 hover:bg-cyan-200 transition duration-500 font-semibold text-cyan-600 rounded">
                      Send
                    </button>
                    <button
                      type="reset"
                      onClick={handleReset}
                      className="border-none bg-cyan-100 py-2 px-10 border-cyan-500 hover:bg-cyan-200 transition duration-500 font-semibold text-cyan-600 rounded">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </form>
        <img className="h-96 " src={BANNER} alt="banner" />
      </div>
    </div>
  );
};

export default Section;
