import { useState } from "react";
import PDF from "../assets/resume .pdf"


export default function Resume() {
    const [showPDF, setshowPDF] = useState(false);
    const handleclick= () => {
        setshowPDF(!showPDF)

    }
    return (
        //     <div className='resume' id='resume'>
        //     <a className='resume_link' href=''></a>
        //     <h1 className='resume'>Resume</h1>
        //     <div className='resume_text'>
        //         <h2> As a entry level developer, I am very passionate and dedicated to launching my career in the feild of software development.
        //             I have recenlty completed my eduction at the University of Central Florida Fullstack development course. I am eager to display my development skills.
        //         </h2>
        //     </div>
        // </div>
        <div>
            <div class="resume-text">
                <h1 className='resume'>Resume</h1>
                <div className='resume_text'>
                    <h3> As a entry level developer, I am very passionate and dedicated to launching my career in the feild of software development.
                        I have recenlty completed my eduction at the University of Central Florida Fullstack development course. I am eager to display my development skills.
                    </h3>
                </div>
                <h6 className="resume-link">Print or Download My <a href="#resumepdf" onClick={handleclick}>Resume</a></h6>

                {showPDF ? (  <div className="w-100">
                <object aria-label="pdf resume" width="100%" height="800" data={PDF} type="application/pdf" />
            </div>):(<div>
          <ul className="skills">
            Front-end Proficiencies
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
          </ul>
          <ul className="skills">
            Back-end Proficiencies
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL & Sequelize</li>
            <li>MongoDB & Mongoose</li>
            <li>REST APIs</li>
            <li>GraphQL</li>
          </ul>
        </div>)}
            </div>
            
        </div>
    );
}