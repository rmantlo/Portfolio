import React from 'react';
import '../css/footer.css';

function Footer() {
    return (
        <div >

            <div className='contact'>
                <div className='sources'>
                    <h6>Personal favorite programming sources:</h6>
                    <ul>
                        <li><a href='https://www.w3schools.com/css/'>w3schools CSS Docs</a></li>
                        <li><a href='http://animista.net/'>CSS Animations</a></li>
                        <li><a href='https://www.npmjs.com/'>NPM packages for JavaScript</a></li>
                        <li><a href='https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA'>Programming with Mosh</a></li>
                        <li><a href='https://www.youtube.com/channel/UCU6e4MJtvlcX5DBLP1cq8hQ'>Maximilian Schwarzmüller w/ Udemy</a></li>
                    </ul>
                </div>
                <div className="containerr">
                    <h2>Contact Me</h2>
                    <form action="https://formspree.io/rebekahmantlo@gmail.com" method="POST">
                        <div className='contactInputs'>
                            <div className='nameInput'>
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Your Name" id="name" required
                                    data-validation-required-message="Please enter your name" name="name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className='emailInput'>
                                <label>Email Address</label>
                                <input type="email" className="form-control" placeholder="Your Email" id="email" required
                                    data-validation-required-message="Please enter your email" name="_replyto" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group">
                                <textarea className="form-control" rows="7" placeholder="Your Message" id="message" required
                                    data-validation-required-message="Please leave a message" name="message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" >Send Message</button>
                        </div>
                    </form>
                </div>

            </div>

            <footer >
                <div>
                    <a href='https://docs.google.com/document/d/1szvHtQSIqxalweVGJLUZYjEbY0N9qamU0zrVqdG94Tc/edit?usp=sharing' target='_blank' rel="noopener noreferrer"><img src="assets/resumeimage.png" alt='Resume link' /></a>
                    <a href='https://www.linkedin.com/in/rebekah-mantlo-b17600116/' target='_blank' rel="noopener noreferrer"><img src='assets/linkedinbw.png' alt='LinkedIn link' /></a>
                    <a href='https://github.com/rmantlo' target='_blank' rel="noopener noreferrer"><img src="assets/githublogo.png" alt='Github link' /></a>
                </div>
                <span>©2019 Rebekah Mantlo -- <a href="#header">Back to top</a></span>
            </footer>
        </div >
    )
}
export default Footer;