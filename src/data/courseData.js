import { CgWebsite } from "react-icons/cg";
import { FaCodeFork } from "react-icons/fa6";
import { SlScreenDesktop } from "react-icons/sl";




let courses = [
    {id: 0,title: "Front-end courses" ,place: "Iran Modir CO" ,year: "Bahman 1401 - Tir 1403" ,techs: ["React JS" ,"JavaScript" ,"HTML" ,"CSS" ,"Tailwind" ,"Bootstrap"] ,icon: <CgWebsite size={20} />},
    {id: 1,title: "Back-end courses" ,place: "Nikan CO - Yoozify" ,year: "Ordibehesht 1404 - NOW" ,techs: ["C#","Python" ,"Django" ,"Stimulsoft" ,"Access" ,"SQL" ,"SQL Server"] , icon: <FaCodeFork size={20} />},
]
export {courses};