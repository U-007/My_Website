"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs,} from 'react-icons/fa';

import {SiTailwindcss, SiNextdotjs} from 'react-icons/si';

const about={
    title: "About Me",
    description: "I am a full-stack developer with a passion for design. I have experience in building web applications and websites using modern technologies. I am a quick learner and always eager to learn new things.",
    info:[
        {
            fieldName: "Name",
            fieldValue: "Mridul Sharma"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 9343441220"
        },
        {
            fieldName: "Expereince",
            fieldValue: "1+ years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian"
        },
        {
            fieldName: "Email",
            fieldValue: "sharmamridul1612@gmail.com"
        },
        {
            fieldName: "FreeLancer",
            fieldValue: "Available"
        },
        {
            fieldName:"Languages",
            fieldValue: "English, Hindi"
        }
    ]
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My Experience",
    description: "I have worked with various companies to build web applications and websites. I have experience in building responsive and user-friendly web applications.",
    items:[
        {
            company: ""
        }
    ]
}

const Resume = () => {
    return <div>resume page</div>;
};

export default Resume;