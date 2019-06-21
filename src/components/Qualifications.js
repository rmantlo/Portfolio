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
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <div className='bottomPara'>
                    <img id='workImage' src='assets/work.jpeg' alt='/' />
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
                </div>
            </div>
        </div>
    )
}
export default Qualifications;