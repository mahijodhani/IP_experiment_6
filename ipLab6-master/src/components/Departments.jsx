import React from 'react';


// import computerImage from './assets/computer.jpg';
// import automationImage from "./assets/automation.jpg";
// import electronicsImage from "./assets/electronics.jpg";
// import mechanicalImage from "./assets/mechanical.jpg";
// import civilImage from "./assets/civil.jpg";
// import electricalImage from "./assets/electrical.jpg";

const departmentsData = [
    {
        name: 'Computer Engineering',
        description: 'The Department of Computer Engineering focuses on creating future leaders in software development, data science, and artificial intelligence.',
        imageUrl: '/src/assets/computer.jpg', 
    },
    {
        name: 'Automation & Robotics',
        description: 'Our Automation & Robotics department offers courses on robotic systems, industrial automation, and advanced mechatronics.',
        imageUrl: '/src/assets/automation.jpg', 
    },
    {
        name: 'Electronics and Telecommunication',
        description: 'Innovating in communications and telecommunication technologies, this department prepares students for global careers.',
        imageUrl: '/src/assets/electronics.jpg', 
    },
    {
        name: 'Mechanical Engineering',
        description: 'Our Mechanical Engineering department offers courses on design, manufacturing, and mechatronics, preparing students for the ever-evolving tech industry.',
        imageUrl: '/src/assets/mechnical.jpg', 
    },
    {
        name: 'Civil Engineering',
        description: 'Our Civil Engineering program equips students with the skills to design and build infrastructure such as roads, bridges, and buildings.',
        imageUrl: '/src/assets/civil.jpg', 
    },
    {
        name: 'Electrical Engineering',
        description: 'The Electrical Engineering department is dedicated to innovations in electronics, electrical systems, and communication technologies.',
        imageUrl: '/src/assets/electrical.jpg', 
    },
];


const Departments = () => {
    return (
        <div className="departments-container">
            <h2>DEPARTMENTS</h2>
            <div className="divider"><span></span></div>

            <div className="departments-list">
                {departmentsData.map((department, index) => (
                    <div className="department-card" key={index}>
                        <img src={department.imageUrl} alt={department.name} className="department-image" />
                        <div className="department-info">
                            <h3>{department.name}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .departments-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                    text-align: center;
                }

                h2 {
                    font-size: 24px;
                    font-weight: bold;
                    text-transform: uppercase;
                    color: #333;
                }

                .divider {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .divider span {
                    display: inline-block;
                    height: 2px;
                    width: 50px;
                    background-color: #333;
                }

                .departments-list {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }

                .department-card {
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 20px;
                    text-align: center;
                    transition: transform 0.3s ease;
                }

                .department-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                }

                .department-image {
                    width: 64px;
                    height: 64px;
                    margin-bottom: 10px;
                }

                .department-info h3 {
                    font-size: 18px;
                    color: #b22222;
                    margin-bottom: 10px;
                }

                @media (max-width: 768px) {
                    .departments-list {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 480px) {
                    .departments-list {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Departments;
