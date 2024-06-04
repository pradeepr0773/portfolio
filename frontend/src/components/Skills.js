import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { MdOutlinePhp } from "react-icons/md";
import { SiMysql } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";
export default function Skills(){
    return(
        <section className="p-5  " id="skills">
        <h3 className="text-4xl border-b-4 mb-5 w-[90px] font-bold  m-5>Skills">Skills</h3>
        <div className="flex justify-between custom-skill ">
            <div className="flex justify-around flex-col md:flex-row custom-skill custom-skills border-2 p-5 m-3 text-center  text-xl projectList">
                
                    <div className="p-5 m-3 custom-skills"><AiOutlineHtml5 size={40} /> <p >HTML</p></div>
                    <div className="p-5 m-3 custom-skills"><IoLogoCss3 size={40} /> <p>CSS</p></div> 
                    <div className="p-5 m-3 custom-skills"><AiOutlineJavaScript size={40} /> <p>JavaScript</p></div>
                    <div className="p-5 m-3 custom-skills"><SiMongodb size={40} /> <p>MongoDB</p></div>
                    <div className="p-5 m-3 custom-skills"><SiExpress size={40} /> <p >Express.js</p></div>
                    <div className="p-5 m-3 custom-skills"><IoLogoReact  size={40} />  <p>React</p></div>
                    <div className="p-5 m-3 custom-skills"><FaNode size={40} /><p >Node.js</p></div>
                    <div className="p-5 m-3 custom-skills"><MdOutlinePhp  size={40}/> <p >PHP</p></div>
                    <div className="p-5 m-3 custom-skills "><SiMysql  size={40}/> <p >MYSQL</p></div>
            </div>
            <div className="flex border-2 p-5 m-3 projectList text-xl">




                
                <h3 ><BsGit size={40} /><p className="pb-3">Git</p>
                <AiOutlineGithub  size={40} /><p className=" pb-3">Github</p>
                <VscVscode size={40} /><p className=" pb-3">VsCode</p></h3>
            </div>
        </div>
        </section>
    );
}