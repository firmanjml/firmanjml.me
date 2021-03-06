import React from "react"
import { Link } from 'gatsby';

import Layout from "../components/layout";
import Title from "../components/title";

const IndexPage = () => {
    return (
        <Layout>
            <Title text="Home"/>
            <h1>Introduction</h1>
            {/* <p>My name is Firman Jamal, I live in Sembawang, Singapore and currently working on <a href="https://www.kibblepaw.com" target="__blank" rel="noopener noreferrer">KibblePaw</a> - a platform for people to adopt or sell merchandise associating with Home Pets.</p> */}
            <p>My name is Firman Jamal and my hobby is programming, developing software and designing. I am a freelance full-stack developer on Fiverr. I am passionate about developing new ideas, solving problems and love giving advice to others for their projects.</p>
            <p>I am currently working on my own project called <a href="https://www.kibblepaw.com" target="__blank" rel="noopener noreferrer">KibblePaw</a> - a platform for people to adopt animals or sell merchandise associating with home pets.</p>
            {/* p>I graduated from <a href="https://www.rp.edu.sg" target='_blank' rel="noopener noreferrer">Republic Polytechnic</a> in Woodlands, Singapore with <a href="https://www.rp.edu.sg/SOI/full-time-diplomas/Details/diploma-in-information-technology" target='_blank' rel="noopener noreferrer">Diploma in Infomation Technology</a> on 2020.</p> */}
            <h3>The skills that I have acquired in school</h3>
            <ol>
                <li>Database Management System</li>
                <li>Object Oriented Programming</li>
                <li>System Analysis & Design</li>
                <li>Basic Data Communication & Networking</li>
                <li>Data Centre & Cloud Management</li>
                <li>IT Security</li>
            </ol>
            <h3>The skills that I have acquired during my free time</h3>
            <ol>
                <li>Embedded Device Programming (MicroPIC, ATMega)</li>
                <li>Designing PCB</li>
                <li>AutoCAD Fusion 360</li>
                <li>3D Print</li>
                <li>Basic Mobile UI/UX</li>
                <li>Web/Mobile Application Development</li>
                <li>Basic Software Reverse Engineering</li>
            </ol>
            
            <p>Need a developer or advice for Mobile Development? <Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default IndexPage;
