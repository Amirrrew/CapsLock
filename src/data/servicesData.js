import { CgWebsite } from "react-icons/cg";
import { FaDesktop } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { CiPen } from "react-icons/ci";


let servs = [
    {id: 0,title: "Website Designing" ,desc: 'Website design and development according to customer needs and tastes' ,icon: <CgWebsite /> ,techs: ['React JS' ,'Django' ,'HTML' ,'CSS']},
    {id: 1,title: "Desktop Applications" ,desc: 'Windows Application development including accounting ,management , and ... using update tools' ,icon: <FaDesktop /> ,techs: ['C#' ,'SQL' ,'SQL Server' ,'Stimulsoft']},
    {id: 2,title: "UI / UX Designing" ,desc: 'designing your apps and websites using figma and ... with up to date methods and rules' ,icon: <MdDesignServices /> ,techs: ['Figma' ,'Photoshop']},
    {id: 3,title: "Managing and Supporting" ,desc: '24/7 support for your website .solving any bugs and problems ,and keeping it update' ,icon: <FaScrewdriverWrench /> ,techs: []},
    {id: 4,title: "Editing" ,desc: 'Editing your apps and websites' ,icon: <CiPen /> ,techs: []},
]

export default servs;