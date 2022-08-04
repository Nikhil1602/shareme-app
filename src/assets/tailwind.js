const tailwind = {
  header: {
    container:
      "pt-5 bg-white pb-3 w-full inline-flex justify-between shadow-lg fixed z-50",
    logo_container: "flex justify-center items-center ml-5",
    logo: "h-11",
    logo_title1:
      "text-3xl font-[Poppins] font-black text-cyan-300 ml-2 border-cyan-300 border-dashed border-b-4",
    logo_title2: "text-cyan-500",
    social_outer: "flex justify-center items-center",
    social_inner: "flex flex-col sm:flex-row",
    icons: (top) =>
      `fixed z-50 ${top} bg-cyan-800 p-3 w-14 left-0 cursor-pointer transition ease-in-out duration-500  sm:static sm:p-0 sm:w-8 sm:mx-5 sm:bg-white sm:hover:scale-150 sm:hover:rotate-[360deg] sm:hover:hue-rotate-180`,
  },
  main_body: {
    container: "flex flex-col md:flex-row  h-screen mx-5 pt-28",
    section1: "h-full w-full flex md:w-2/4",
    section2:
      "h-full w-full  hidden  justify-center items-center md:flex md:w-2/4",
    icon: "hidden md:block md:h-3/4",

    file_form: "w-full h-full transition-all duration-200 ease-in-out",
    file_section: (drag) =>
      `flex ${
        drag ? "bg-cyan-50" : "bg-white"
      } border-2 sm:border-4 justify-center items-center border-cyan-500 rounded border-dashed h-1/2 p-10 w-full`,
    file_input: "hidden",
    image: (drag, action) =>
      `${
        drag && action
      } w-20 absolute duration-200 ease-in-out transition-transform origin-bottom scale-90`,

    title:
      "mt-40 font-[Poppins] text-sm sm:text-base md:text-lg lg:text-2xl tracking-wide font-bold text-center",
    browse: "text-cyan-500 cursor-pointer",

    progress_bar: (show) =>
      `${
        !show && "hidden"
      }  bg-cyan-100 pr-5 transition-[width] duration-700 ease-linear rounded origin-left h-20 mt-2`,
    uploading: "font-[Poppins] ml-5 pt-2 font-semibold",
    progress: "font-[Poppins] ml-5 text-sm",
    line: "h-1 rounded w-full bg-cyan-300",

    link_container: (show) =>
      `${show && "hidden"} font-[Poppins] text-center w-full`,
    expires: "my-2",
    link_inner:
      "w-full border-2 text-base bg-cyan-50 border-cyan-300 border-dashed rounded flex p-3",
    link: "outline-none w-full border-none bg-cyan-50 font-semibold",
    copy_icon: "ml-2 cursor-pointer",

    mail_text: "my-2 font-[Poppins] text-center",
    mail_outer: "border-2 mb-10 p-5 rounded border-cyan-500",
    mail_inner: "flex justify-between mb-2",
    mail_label: "hidden sm:block md:text-lg",
    mail_input: "border-cyan-300 sm:w-auto w-full outline-none border-b-2",
    buttons: "flex flex-col sm:flex-row justify-evenly mt-4",
    button:
      "border-none bg-cyan-100 mb-2 sm:mb-0 py-2 px-10 border-cyan-500 hover:bg-cyan-200 transition duration-500 font-semibold text-cyan-600 rounded",
  },
  toast: (show) =>
    `${
      show ? "translate-y-24" : "translate-y-1"
    } absolute top-2.5 left-[50%] translate-x-[-50%] py-2.5 px-5 rounded-md bg-cyan-400 text-white shadow-md text-lg font-Poppins transition-all ease-in-out duration-500`,
};

export default tailwind;
