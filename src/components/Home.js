import React from 'react';
import '../css/home.css';

function Home() {
    return (
        <div className='home'>
            <div className='personalView'>
                <h2>Quote of some kind! And some more words yay</h2>
                <h6>--name of person</h6>
                <p>I like this quote because of some thing that happened one time in my life and things and stuff where things happened for some kinda reason.</p>
            </div>
            <div className='about'>
                <div className='profileImage'></div>
                <div className='profileLinks'>
                    <a href='https://docs.google.com/document/d/1szvHtQSIqxalweVGJLUZYjEbY0N9qamU0zrVqdG94Tc/edit?usp=sharing' target='_blank' rel="noopener noreferrer"><img src="assets/resumeimage.png" alt='Resume link' /></a>
                    <a href='https://www.linkedin.com/in/rebekah-mantlo-b17600116/' target='_blank' rel="noopener noreferrer"><img src='assets/linkedinbw.png' alt='LinkedIn link' /></a>
                    <a href='https://github.com/rmantlo' target='_blank' rel="noopener noreferrer"><img src="assets/githublogo.png" alt='Github link' /></a>
                </div>
                <div className='profileParas'>
                    <p>Indiana raised, Indiana University Bloomington graduate. Studied for and obtained a bachelor's in Biology with a minor in Chemistry. Participated in after hours clubs and held formal head positions, such as Sectretary, Treasurer, and President of the IU J.A.C.C. After graduation, I spend a year gaining experience and working in a QA lab for Heritage Environmental, before moving on to work in sales to gain experience working with people.</p>
                    <p>Currently working with 1150 Academy in Fishers, Indiana, teaching and studying JavaScript and .Net. After studying in STEM fields and working in customer service, I realized that I wasn't working in a field that interested me, and decided to take time to figure out what did. Software development and design was something that caught my attention, as well as still allowed me to work along side the STEM fields I originally loved.</p>
                </div>
            </div>
            <div className='logos'>
                <img src='assets/javascriptbw.png' alt=''/>
                <img src='assets/reactbw.png' alt=''/>
                <img src='assets/angularbw.svg' alt=''/>
                <img src='assets/csharpbw.png' alt=''/>
                <img src='assets/dotnetbw.png' alt=''/>
            </div>
        </div>
    )
}
export default Home;