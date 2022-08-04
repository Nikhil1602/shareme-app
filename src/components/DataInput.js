import React, { useRef, useState } from "react";
import tailwind from "../assets/tailwind";
import { useFetch, useLink } from "../hooks";
import FileDropIcon from "./FileDropIcon";
import GenerateLink from "./GenerateLink";
import ProgressBar from "./ProgressBar";
import ShareViaMail from "./ShareViaMail";

const DataInput = () => {
  const FileRef = useRef();
  const LinkRef = useRef();

  const [link, setLink, copyLink] = useLink(LinkRef);
  const [disable, setDisable] = useState(false);
  const [show, setShow] = useState(true);

  const showLink = ({ file: url }) => {
    setLink(url);
    setShow(false);
    setDisable(false);
    setProgress("0%");
  };

  const [progess, upload, postData, setProgress] = useFetch(
    showLink,
    FileRef,
    setShow,
    setLink
  );

  return (
    <>
      <form className={tailwind.main_body.file_form}>
        <FileDropIcon upload={upload} FileRef={FileRef} setLink={setLink} />
        <ProgressBar show={show} showProgress={progess} />
        <GenerateLink LinkRef={LinkRef} url={link} copyLink={copyLink} />
        <ShareViaMail
          link={link}
          postData={postData}
          disable={disable}
          setDisable={setDisable}
        />
      </form>
    </>
  );
};

export default DataInput;
