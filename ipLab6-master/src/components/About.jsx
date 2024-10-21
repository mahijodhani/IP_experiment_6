import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-header">
                <h1>ABOUT VES</h1>
                <div className="divider">
                    <span className="dot">____________</span>
                </div>
            </div>
            <div className="content-section">
                <div className="image-container">
                    <img
                        src="/src/assets/statue.jpeg" 
                        alt="Vivekanand Statue"
                        className="statue-image"
                    />
                </div>
                <div className="text-container">
                    <h2>Welcome to Vivekanand Education Society</h2>
                    <p>
                        Vivekanand Education Society (VES) runs 26 institutions in the vicinity of Chembur. The Society’s aim is to impart quality education to all, including the economically backward classes, thereby playing an important role in the progress of our country, in the vision of Shri Hashu Advani, a great social worker.
                    </p>
                    <p>
                        All institutions are located in Kurla and Chembur, a lush green suburb convenient to travel from any part of Mumbai. Today, VES has a vibrant community of native students, faculty, staff, and alumni.
                    </p>
                    <p>
                        Over 24,000 students enroll for pre-primary, primary, secondary, higher secondary schools, graduate, and post-graduate courses. VES believes in the overall development of its students and hence has dedicated leadership, sports, music academies, catering, and vocational guidance institutes. For out-station students, VES provides separate hostel facilities for girls and boys.
                    </p>
                    <p className="highlight">
                        VES strictly follows and strongly believes in – No management quota, no capitation fees or donations in any form. It’s pure learning and sharing, continuing to work for academic excellence.
                    </p>
                </div>
            </div>

            <style jsx>{`
                .about-page {
                    font-family: 'Helvetica', 'Arial', sans-serif;
                    color: #333;
                    padding: 20px;
                    text-align: left;
                }
                .about-header {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .about-header h1 {
                    font-size: 32px;
                    font-weight: bold;
                    color: #111;
                    margin: 0;
                }
                .divider {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 5px;
                }
                .divider .dot {
                    font-size: 24px;
                    color: #cc0000;
                }
                .content-section {
                    display: flex;
                    align-items: flex-start;
                    gap: 30px;
                }
                .image-container {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                }
                .statue-image {
                    width: 100%;
                    max-width: 400px;
                    border-radius: 8px;
                }
                .text-container {
                    flex: 2;
                }
                .text-container h2 {
                    font-size: 24px;
                    font-weight: bold;
                    color: #111;
                    margin-bottom: 10px;
                }
                .text-container p {
                    line-height: 1.6;
                    color: #555;
                    margin-bottom: 15px;
                }
                .highlight {
                    font-weight: bold;
                    color: #cc0000;
                }
            `}</style>
        </div>
    );
};

export default About;
