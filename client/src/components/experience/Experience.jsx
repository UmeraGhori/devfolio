import {useState, useEffect} from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"


const ExperienceEducation = ({state}) => {
    const [education,setEducation]=useState("");
    const [experience,setExperience]=useState("");

    useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const education = await contract.methods.allEductationDetails().call();
            setEducation(education);
        }
        const experienceDetails=async()=>{
            const experience = await contract.methods.allExperienceDetails().call();
            setExperience(experience);
        }
        contract && educationDetails();
        contract && experienceDetails();
    },[state]) 
    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-title">Education</h1>
                    {education!=="" && education.map((edu, index)=>{
                        return (   
                        <div className="edu-card" key={index}>
                        <h3 className="card-text2">{edu.degree}</h3>
                        <p className="card-text4">
                        {edu.instutionName}
                        </p>
                    </div>)
                    })}
                 
                   
                </div>


                {/* experience */}
                <div className="education">
                    <h1 className="edu-title">Experience</h1>
                    {experience!=="" && experience.map((exp, index)=>{
                        return (   
                        <div className="edu-card" key={index}>
                        <p className="card-text1">{exp.date}</p>
                        <h3 className="card-text2">{exp.post}</h3>
                        <p className="card-text3">{exp.knowledgeAcquired}</p>
                        <p className="card-text4">
                        {exp.compamyName}
                        </p>
                    </div>)
                    })}
                 
                   
                </div>
                </div>
                </section>


//                 <div className="education">
//                     <h1 className="edu-title">Experience</h1>
//                     <div className="edu-card">
//                         <p className="card-text1">
//                             <SlCalender className='icon' /> 2021-2022
//                         </p>
//                         <h3 className="card-text2">Frontend Instructor</h3>
//                         <p className="card-text3">Delivered comprehensive instruction in frontend development, imparting essential skills
// to students in the latest web technologies and frameworks. Developed and executed
// lesson plans, ensuring a balance between theoretical concepts and hands-on practical
// exercises to enhance student learning. Created engaging and interactive learning
// materials, including coding exercises, projects, and assessments to assess and reinforce
// students' understanding.</p>
//                         <p className="card-text4">Shoppeal</p>
//                     </div>
//                     {/* card2 */}
//                     <div className="edu-card">
//                         <p className="card-text1">
//                             <SlCalender className='icon' />2022-2023
//                         </p>
//                         <h3 className="card-text2">Frontend Developer</h3>
//                         <p className="card-text3">Collaborated seamlessly with cross-functional teams, including backend developers and
// designers, to deliver cohesive and high-performance web applications. Successfully
// integrated frontend components with backend systems, ensuring seamless functionality
// and optimal performance. Spearheaded the development of modern and user-friendly
// interfaces that significantly improved user experience. Proactively embraced and
// implemented emerging frontend technologies and frameworks.</p>
//                         <p className="card-text4">Coding Invaders By Mentors Pro</p>
//                     </div>
//                     {/* card3 */}
//                     <div className="edu-card">
//                         <p className="card-text1">
//                             <SlCalender className='icon' />Present
//                         </p>
//                         <h3 className="card-text2">Founder/CEO</h3>
//                         <p className="card-text3">Deployed 5K NFTs on Opensea based on ERC-721 Smart Contract (created by me) in
// Polygon Blockchain.
// Link Of Project:
// https://opensea.io/collection/crypto-kukdu-ku-v2
// </p>
//                         <p className="card-text4">Crypto Kukdu Ku (Opensea)</p>
//                     </div>
//                 </div>
//             </div>
    )
}

export default ExperienceEducation