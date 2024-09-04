"use client";

import { useState, useEffect } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const about = {
    title: "About Me",
    description: "I am a passionate full-stack developer with a flair for design. I specialize in creating sleek, responsive, and user-friendly web applications. My constant drive to learn and adapt to new technologies makes me a valuable asset to any team.",
    info: [
        { fieldName: "Name", fieldValue: "Mridul Sharma" },
        { fieldName: "Phone", fieldValue: "(+91) 9343441220" },
        { fieldName: "Experience", fieldValue: "1+ years" },
        { fieldName: "Nationality", fieldValue: "Indian" },
        { fieldName: "Email", fieldValue: "sharmamridul1612@gmail.com" },
        { fieldName: "Freelancer", fieldValue: "Available" },
        { fieldName: "Languages", fieldValue: "English, Hindi" }
    ]
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My Experience",
    description: "I have contributed to various projects, from developing responsive web applications to conducting deep learning research. My experiences span multiple industries, enabling me to bring a well-rounded perspective to my work.",
    items: [
        { company: "Cropway", position: "Data Analytics Intern", duration: "Aug 2024 - Present", description: "Working on enhancing data pipelines and analytics tools for agricultural datasets." },
        { company: "Amrita Hospital, Kochi", position: "Deep Learning Researcher", duration: "Jan 2024 - Jul 2024", description: "Developed AI models for medical imaging, contributing to cutting-edge healthcare solutions." },
        { company: "ACM, Association for Computing Machinery", position: "Research Intern", duration: "Oct 2023 - Dec 2023", description: "Conducted research on AI-driven software solutions, publishing findings in ACM conferences." },
        { company: "IIT Bhilai", position: "iOS App Developer", duration: "Aug 2023 - Sep 2023", description: "Designed and developed an iOS app focused on student productivity and time management." }
    ]
};

const education = {
    icon: '/assets/resume/cap.svg',
    title: "My Education",
    description: "I am pursuing a Bachelor's degree in Computer Science, which has equipped me with a strong foundation in programming, algorithms, and software engineering principles.",
    items: [
        { degree: "Bachelor's in Technology Degree in Computer Science", institute: "Amrita Vishwa Vidyapeetham, Amritapuri", duration: "2021 - 2025", description: "Focus on software development, data structures, and AI." },
        { degree: "High School", institute: "Delhi Public School, Durg", duration: "2020 - 2021", description: "Graduated with honors, excelling in mathematics and computer science." }
    ]
};

const skills = {
    title: "My Skills",
    description: "Proficient in a wide range of technologies, I am particularly skilled in the following areas:",
    items: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <FaCss3 className="text-blue-600" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { name: "React", icon: <FaReact className="text-cyan-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-600" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> }
    ]
};

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: {delay: 1.2, duration: 0.6, ease: "easeOut" } }
};

const stagger = {
    animate: { transition: { staggerChildren: 0.15 } }
};

const Resume = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500); 

        return () => clearTimeout(timer);
    }, []);

    if (!isLoaded) {
        return null;
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            className="min-h-screen flex items-start justify-center py-12 xl:py-16 bg-slate-950 text-white"
        >
            <div className="container mx-auto px-4">
                <Tabs defaultValue="about">
                    <div className="flex flex-col xl:flex-row items-start gap-10">
                        <TabsList className="flex flex-col w-full max-w-[320px] xl:max-w-[250px] mx-auto xl:mx-0 gap-4">
                            <TabsTrigger value="about" className="rounded-xl bg-white/20 p-3 text-center shadow-md hover:bg-white/30 transition-all duration-300">About</TabsTrigger>
                            <TabsTrigger value="experience" className="rounded-xl bg-white/20 p-3 text-center shadow-md hover:bg-white/30 transition-all duration-300">Experience</TabsTrigger>
                            <TabsTrigger value="education" className="rounded-xl bg-white/20 p-3 text-center shadow-md hover:bg-white/30 transition-all duration-300">Education</TabsTrigger>
                            <TabsTrigger value="skills" className="rounded-xl bg-white/20 p-3 text-center shadow-md hover:bg-white/30 transition-all duration-300">Skills</TabsTrigger>
                        </TabsList>

                        <div className="min-h-[70vh] w-full xl:flex-1 bg-slate-900 p-6 rounded-lg shadow-md">
                            <TabsContent value="about" className="w-full">
                                <motion.div variants={stagger}>
                                    <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4 text-blue-500">{about.title}</motion.h2>
                                    <motion.p variants={fadeInUp} className="mb-6">{about.description}</motion.p>
                                    <motion.ul variants={fadeInUp} className="space-y-4">
                                        {about.info.map((item, index) => (
                                            <li key={index} className="flex justify-between">
                                                <span className="font-semibold">{item.fieldName}</span>
                                                <span>{item.fieldValue}</span>
                                            </li>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="experience" className="w-full">
                                <motion.div variants={stagger}>
                                    <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4 text-blue-500">{experience.title}</motion.h2>
                                    <motion.p variants={fadeInUp} className="mb-6">{experience.description}</motion.p>
                                    <motion.ul variants={fadeInUp} className="space-y-8">
                                        {experience.items.map((item, index) => (
                                            <li key={index} className="flex flex-col space-y-1">
                                                <span className="text-xl font-semibold">{item.position}</span>
                                                <span className="text-sm text-gray-300">{item.company} - {item.duration}</span>
                                                <p className="text-gray-400">{item.description}</p>
                                            </li>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="education" className="w-full">
                                <motion.div variants={stagger}>
                                    <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4 text-blue-500">{education.title}</motion.h2>
                                    <motion.p variants={fadeInUp} className="mb-6">{education.description}</motion.p>
                                    <motion.ul variants={fadeInUp} className="space-y-8">
                                        {education.items.map((item, index) => (
                                            <li key={index} className="flex flex-col space-y-1">
                                                <span className="text-xl font-semibold">{item.degree}</span>
                                                <span className="text-sm text-gray-300">{item.institute} - {item.duration}</span>
                                                <p className="text-gray-400">{item.description}</p>
                                            </li>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="skills" className="w-full">
                                <motion.div variants={stagger}>
                                    <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4 text-blue-500">{skills.title}</motion.h2>
                                    <motion.p variants={fadeInUp} className="mb-6">{skills.description}</motion.p>
                                    <motion.ul variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                        {skills.items.map((skill, index) => (
                                            <li key={index} className="flex flex-col items-center">
                                                <div className="text-5xl mb-2">{skill.icon}</div>
                                                <span className="text-lg">{skill.name}</span>
                                            </li>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            </TabsContent>
                        </div>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
