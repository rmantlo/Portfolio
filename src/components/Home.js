import React from 'react';
import '../css/home.css';

function Home() {
    return (
        <div className='home'>
            <div>
                <div className='about'>
                    <div className='profileImage'></div>
                    <div className='profileLinks'>
                        <a href='https://docs.google.com/document/d/1szvHtQSIqxalweVGJLUZYjEbY0N9qamU0zrVqdG94Tc/edit?usp=sharing' target='_blank' rel="noopener noreferrer"><img src="assets/resumeimage.png" alt='Resume link' /></a>
                        <a href='https://www.linkedin.com/in/rebekah-mantlo-b17600116/' target='_blank' rel="noopener noreferrer"><img src='assets/linkedinbw.png' alt='LinkedIn link' /></a>
                        <a href='https://github.com/rmantlo' target='_blank' rel="noopener noreferrer"><img src="assets/githublogo.png" alt='Github link' /></a>
                    </div>
                </div>
                <div className='logos'>
                    <img src='assets/javascriptbw.png' alt='' />
                    <img src='assets/reactbw.png' alt='' />
                    <img src='assets/angularbw.svg' alt='' />
                    <img src='assets/csharpbw.png' alt='' />
                    <img src='assets/dotnetbw.png' alt='' />
                </div>
            </div>
            <div>
                <div className='personalView'>
                    <h2>"I learned to always take on things I'd never done before. Growth and Comfort do not coexist."</h2>
                    <h6>--Ginni Rometty</h6>
                    <p id='personalView'>For the longest time I was afraid of change, addicted to comfort and afraid to lose what I already had. Even if I could gain something better, I was afraid of failing. But then I realized as long as I stayed afraid and stay somewhere I was only 'fine' with, I was already failing myself. So I took the first step to move forward. Each step brought me closer and closer until I finally made it to where I am today, and I'm happy.</p>
                    <p>Indiana raised, Indiana University Bloomington graduate. Studied for and obtained a bachelor's in Biology with a minor in Chemistry. Participated in after hours clubs and held formal head positions, such as Sectretary, Treasurer, and President of the IU J.A.C.C. After graduation, I spend a year gaining experience and working in a QA lab for Heritage Environmental, before moving on to work in sales to gain experience working with people.</p>
                    <p>Currently working with Eleven Fifty Academy in Fishers, Indiana, teaching and studying JavaScript and .Net. After studying in STEM fields and working in customer service, I realized that I wasn't working in a field that interested me, and decided to take time to figure out what did. Software development and design was something that caught my attention, as well as still allowed me to work along side the STEM fields I originally loved.</p>
                </div>
            </div>
        </div>
    )
}
export default Home;