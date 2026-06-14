import './Resume.css'
import bayan from '../../assets/image13_watercolor2.png'

const Resume = () => {
    return (
        <>
    <div id="resume">
        <div className="container">
            <div className="leftPanel">
                <img src={bayan}/>
                <div className="details">
                    <div className="item bottomLineSeparator">
                        <h2>CONTACT</h2>
                        <div className="smallText">
                            <p>
                                <i className="fa fa-phone contactIcon" aria-hidden="true"></i>
                                +7 702 264 1780
                            </p>
                            <p>
                                <i className="fa fa-envelope contactIcon" aria-hidden="true"></i>
                                <a href="saparbayevabt@gmail.com">saparbayevabt@gmail.com</a>
                            </p>
                            <p>
                                <i className="fa fa-map-marker contactIcon" aria-hidden="true"></i>
                                Almaty, Kazakhstan
                            </p>
                            <p>
                                <i className="fa fa-linkedin-square contactIcon" aria-hidden="true"></i>
                                    <a href="https://www.linkedin.com/in/bayan-saparbayeva/">
                                        in/bayan-saparbayeva
                                    </a>
                            </p>
                            <p>
                                <i className="fa fa-github contactIcon" aria-hidden="true"></i>
                                    <a href="https://github.com/Bayan2019">
                                        github.com/Bayan2019
                                    </a>
                            </p>
                        </div>
                    </div>
                    <div className="item bottomLineSeparator">
                        <h2>SKILLS</h2>
                        <div className="skill">
                            <div><span>Python</span></div>
                        </div>
                        <div className="skill">
                            <div><span>Matlab</span></div>
                        </div>
                        <div className="skill">
                            <div><span>Javascript</span></div>
                        </div>
                        <div className="skill">
                            <div><span>Golang</span></div>
                        </div>
                        <div className="skill">
                            <div><span>Java</span></div>
                        </div>
                    </div>
                    <div className="item">
                        <h2>EDUCATION</h2>
                        <div className="smallText">
                            <p className="bolded white">PhD Mathematics</p>
                            <p>Novosibirsk State University</p>
                            <p>2012 - 2016</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightPanel">
                <div>
                    <h1>Bayan Saparbayeva</h1>
                    <div className="smallText">
                        <h3>Developer <i className="fa fa-code"></i></h3>
                    </div>
                </div>
                <div>
                    <h2>About me</h2>
                    <div className="smallText">
                        <p>
                            With over two years of experience as a Data Scientist and a Postdoctoral Researcher, 
                            I have developed a strong background in 
                            machine learning, modeling, mathematics, data collection, data analysis, data preprocessing, and data simulation. 
                            I have a PhD in Mathematics from Novosibirsk State University 
                            and a Postgraduate Degree in Big Data in Technology from University of California, Riverside. 
                            I also have multiple certifications in data visualization, data-driven decision making, financial statement analysis,
                            and backend developement.                        
                        </p>
                    </div>
                </div>
                <div className="workExperience">
                    <h2>Work experience</h2>
                    <ul>
                        <li>
                            <div className="jobPosition">
                                <span className="bolded">Statistical Technician</span>
                                <span>Jan 2023 – Oct 2023</span>
                            </div>
                            <div className="projectName bolded">
                                <span>Trade Capital Corporation</span>
                            </div>
                        </li>
                        <li>
                            <div className="jobPosition">
                                <span className="bolded">Postdoctoral Research Associate</span>
                                <span>Aug 2019 – Jul 2021</span>
                            </div>
                            <div className="projectName bolded">
                                <span>University of Rochester, Department of Biostatistics and Computational Biology</span>
                            </div> 
                        </li>
                        <li>
                            <div className="jobPosition">
                                <span className="bolded">Postdoctoral Research Associate</span>
                                <span>Aug 2017 – Jul 2019</span>
                            </div>
                            <div className="projectName bolded">
                                <span>University of Notre Dame, Department of Applied and Computational Mathematics and Statistics</span>
                            </div> 
                        </li>
                        <li>
                            <div className="jobPosition">
                                <span className="bolded">Teaching Assistant</span>
                                <span>Aug 2013 – Jul 2017</span>
                            </div>
                            <div className="projectName bolded">
                                <span>Novosibirsk State University</span>
                            </div> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Resume;