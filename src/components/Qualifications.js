import React from 'react';
import '../css/qualifications.css';

function Qualifications() {
    return (
        <div className='qualifications'>
            <div className='rightSide'>
                <div className='skills'>
                    <h3>Skills</h3>
                    <ul>
                        <li>JavaScript |</li>
                        <li>| TypeScript |</li>
                        <li>| C# |</li>
                        <li>| .Net</li>
                    </ul>
                    <ul>
                        <li>React.js |</li>
                        <li>| Angular |</li>
                        <li>| Node.js |</li>
                        <li>| Express.js</li>
                    </ul>
                    <ul>
                        <li>Visual Studio |</li>
                        <li>| Visual Studio Code |</li>
                        <li>| PG Admin 4 |</li>
                        <li>| Postman</li>
                    </ul>
                    <ul>
                        <li>Github |</li>
                        <li>| Firebase |</li>
                        <li>| Heroku</li>
                        <li></li>
                    </ul>
                </div>
                <div className='education'>
                    <h3>Education</h3>
                    <h6>Eleven Fifty Academy</h6>
                    <p>Fishers, Indiana</p>
                    <p>JavaScript and C# Developer</p>
                    <h6>Indiana University</h6>
                    <p>Bloomington, Indiana</p>
                    <p>B.S. in Biology</p>
                </div>
            </div>
            <div className='leftSide'>
                <h4>Every person needs a good team...and I'm looking for mine</h4>
                <div className='qualiPana'></div>
                <p>My career in Tech started officially through Eleven Fifty Academy. EFA offers accelerated programs in multiple programming languages as well as a next up and coming CyberSecurity program. I personally started in their JavaScript program and was then recruited before graduation by the Academy to learn in their .Net/C# program to then become a Learning Assistant for their next .Net/C# program. I absolutely fell in love with coding while at EFA, and plan to continue learning in my free time, having already stepped into learning Unity.</p>
                <div className='bottomPara'>
                    <img id='workImage' src='assets/work.jpeg' alt='/' />
                    <p>My long term goal is to find a team to work along side with to create and maintain beautiful tech structures, whether it be front, back, or full stack developing. With my background in sciences, I would absolutely love to work as a Developer or Engineer for Medical or Biological/Chemical fields, or an Education area. At EFA learned more than just coding, I learned more about myself. I love coding, and I love to help others, which I was able to do as a Learning Assistant. I want to be able to prove myself, and work hard for you and my future team.</p>
                </div>
            </div>
        </div>
    )
}
export default Qualifications;