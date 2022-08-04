import { useContext, useState } from "react";
import axios from "axios";
import { Toast } from "../App";

const useFetch = (showLink, FileRef, setShow, setLink) => {
  const [progress, setProgress] = useState("0%");
  const HOST = "https://shareme-backend-app.herokuapp.com/";
  const uploadURL = `${HOST}api/files`;
  const emailURL = `${HOST}api/files/send`;
  const maxSizeAllowed = 100 * 1024 * 1024;
  const { setData } = useContext(Toast);

  const config = {
    onUploadProgress: (e) => {
      const percent = Math.round((e.loaded / e.total) * 100);
      setProgress(`${percent}%`);
    },
  };

  const resetFile = () => {
    FileRef.current.value = "";
  };

  const upload = async () => {
    try {
      if (FileRef.current.files.length > 1) {
        resetFile();
        setData({ show: true, message: "File limit exceeds: 1" });
        return;
      }

      const file = FileRef.current.files[0];
      if (file.size > maxSizeAllowed) {
        setData({ show: true, message: "Size limit exceeds: 100MB" });
        resetFile();
        return;
      }

      setShow(true);
      const formData = new FormData();
      formData.append("myfile", file);
      const response = await axios.post(uploadURL, formData, config);
      showLink(response.data);
    } catch (e) {
      console.log(e.message);
      setData({ show: true, message: "File not detected" });
    }
  };

  const postData = async (formData) => {
    try {
      const response = await axios.post(emailURL, formData);
      response.data.success && setLink("");
      console.log(response);
    } catch (e) {
      console.log(e.message);
      setData({ show: true, message: "Something went wrong" });
    }
  };

  return [progress, upload, postData, setProgress];
};

export default useFetch;
