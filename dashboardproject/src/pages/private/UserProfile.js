import React from "react";
import '../../helper/userprofile.css'
export default function UserProfile()
{
    return(
        <>
        <div className="flex-down center">
            <h2>Amandeep Singh</h2>
            {/* <h3>Software Developer</h3> */}
            <div className="flex-right space-around">
                
                <span>57 Brentwood Drive </span>
                <span>Brampton, ON, CA</span>
                <span>L6T 1R1</span>
                </div>
                <div className="flex-right space-around">
                    <span>(+1) 647-866-0390</span>
                    <span>amandeeprajput96@gmail.com</span>
                    </div>
                <p>Hard-working college graduate with Bachelor of Technology in Electronics and Communication Engineering(7.50 CGPA) with 2.5 year of work Expperience. Aiming to leverage academic experience and a proven knowlwdge of database development, competitive programming and web designing to successfully play Software Developer Role

                </p>
        </div>
        <br/>
        <div className="heading">
            <h1>Experience</h1>
        </div>
        <div className="flex-down">
            <div className="flex-right space-between margin5">
            <h3>Data Engineer + Data Analyst</h3>
            <span>July,2019 to Dec., 2021</span>
            </div>
            <h3 className="margin5">Reliance JIO</h3>
            <p className="margin5">Daily Job is expanding and optimizing data and data pipeline architecture, as well as optimizing data flow and collection for cross functional teams. Working on Big Data Lake(Apache Hadoop). Get requirement from Business team and analyses the data and make it's Visulization on Zoomdata</p>
            <br/><br/>

            <div className="flex-right space-between margin5">
            <h3>PYTHON DEVELOPER INTERN</h3>
            <span>June 2018 - July 2018</span>
            </div>
            <h3 className="margin5">Korecent Solutions</h3>
            <p className="margin5">Worked on integration of Finger print sensor in authentication process in a project.</p>
            <br/>
        </div>

        {/* Education */}

        <div className="heading">
            <h1>Education</h1>
        </div>

        <div className="flex-down">
            <div className="flex-right space-between margin5">
            <h3>Georgian College, Barrie</h3>
            <span>Jan 2022 - Present</span>
            </div>
            <h3 className="margin5">Mobile Application Development Graduate Program</h3>
            <p className="margin5">Status : Persuing</p>
            <p className="margin5">GPA : 3.5</p>
            <br/><br/>

            <div className="flex-right space-between margin5">
            <h3>Dr. B.R. Ambedkar National Institute of Technology</h3>
            <span>August 2015 - May 2019</span>
            </div>
            <h3 className="margin5">Bachelor of Technology</h3>
            <p className="margin5">Electronics and Communication</p>
            <p className="margin5">CGPA : 7.50</p>
            <br/>


            <div className="flex-right space-between margin5">
            <h3>Guru Nanak Public Senior Secondary School</h3>
            <span>March 2012 - March 2015</span>
            </div>
            <h3 className="margin5">Matriculation and High Secondary</h3>
            <p className="margin5">Scored 95.5%</p>
            <br/>


        </div>



        </>
    )
}