import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a passionate software developer with a strong interest in both front-end and back-end development where I love to learn and explore new tech stacks. Currently, I am involved in multiple full-stack software projects, honing my skills in the field of software development!</p>
                    <p>In my free time, I like to play volleyball, read, and watch all the newest and latest TV shows on Netflix! </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I utilize many front-end web development tools such as React.js, ReactDOM, HTML, CSS, JavaScript to build and implement cool features and projects like my personal website!</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Backend Database & Server Development </h3>
                    <p>I have experience with MongoDB, MySQL, knex.js, RESTful API's, and HTTP protocols to create different backend databases and enable smooth communication between databases</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Robotics</h3>
                    <p>I have also been involved in robotics for many years now. I am currently working on an STM-32 nucleo board using C++ to create functionality for my robotics team where we participate in the RoboMaster competition!</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}