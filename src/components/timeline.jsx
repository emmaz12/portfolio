import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate Student Researcher -- Software Intern <span> March 2023 - present (San Diego, California)</span></h2>
                        <p>I am currently working with Professors Curt Schurgers and Ramsin Khoshabeh to design and create an enhanced access control system for numerous spaces at UCSD including the ECE MakerSpace and Envision Lab. 
                        My work is largely based as a backend developer where I utilize tools such as MySQL, TypeScript, Express.js, and Node.js to create a centralized database and server capable of storing numerous data records and efficiently handling data retrieval and manipulation operations.
                        Through this process, I have been developing and implementing RESTful APIs utilizing HTTP methods to enable seamless communication between our client’s backend systems, in order to ensure efficient data retrieval, manipulation, and storage operations.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Triton Software Engineering -- Software Developer <span> Nov 2022 - present (San Diego, California)</span></h2>
                        <p>Triton Software Engineering is a multidisciplinary student organization at UC San Diego. Partnering with nonprofit organizations, we design and develop software pro-bono for social good.
                        I work as software developer currently implementing and programing a fully functional web and mobile application for the San Diego County Taxpayers Association.
                        Within this project, I mainly utilize MongoDB, Express, React, Node, React Redux to translate designs into code. In addition, I am currently creating front and backend features and implementations such as a user profile page.
                        </p>
                        <a href="https://github.com/TritonSE/SDCTA-Data-Visualization-Website">Check out our codebase!</a>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Triton Robotics -- Embedded Systems Developer <span> Sept 2022 - present (San Diego, California)</span></h2>
                        <p>Triton Robotics is a student organization participating in RoboMaster, an international robotics competition. I work to code an STM-32 nucleo board to control motors, sensors, and actuators allowing for robot movement. 
                        My past project worked on developing Mutex threading in order to more efficiently print to console while simultaneously running robot code without damaging data. Currently, I am working on creating a centralized turret class
                        capable of managing and operating all functionality of shooting and aiming for numerous different robots. Throughout these projects, I have mainly utilized C++ and Mbed OS within a Linux environment to implement different functionalities.
                        </p> 
                        <a href="https://github.com/Triton-Robotics/TR-mbed">Check out our codebase!</a>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Alpha House Society -- Desktop Support Intern <span> June 2022 - July 2022 (Alberta, Canada)</span></h2>
                        <p>Alpha House Society is a non-profit, charitable agency dedicated to helping the vunerable population. Within Alpha House, I designed and implemented a program that 
                          filters and categorizes new employee data records for simpler and more efficient data entry into the company’s database system using Python. In addition, I 
                           helped to manage and administer IT support across multiple departments through installing operating systems, software applications and responding to user requests.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Sponsor Energy Inc. -- IT and Marketing Intern <span> June 2021 - Aug 2021 (Alberta, Canada)</span></h2>
                        <p>Within Sponsor Engery, a electrical and utility company, I worked to design and create an FAQ page for the company website using HTML, CSS, and PHP
                            In addition, I also worked on remodeling and redesigning the client billing platform into a more user friendly interface using React.js and JavaScript. 
                            Lastly, I was also responsible for and led projects related to customer communication, product competitiveness, and marketing analysis where I produced a 20+ page price model to increase market penetration.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}