import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return ( 
    <section className="colorlib-education" data-section="education">
    <div className="colorlib-narrow-content">
        <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
            <span className="heading-meta">Education</span>
            <h2 className="colorlib-heading animate-box fadeInUp animated">Education</h2>
            </div>
    </div>
    <div className="row">
        <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
            <div className="fancy-collapse-panel">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="collapsed">B.S. Computer Engineering -- Sept 2022 - June 2026
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                            <div className="panel-body">
                                <p>Currently attending the University of California - San Diego (UCSD) for a Bachelor's of Science in Computer Engineering.</p>
                                <ul>
                                    <li>Overall GPA: 3.93</li>
                                    <li>Courses: Basic Data Structures and Object-Oriented Design, Software Tools and Techniques Laboratory, Computer Organization and Systems Programming, Discrete Mathematics, Calculus for Science and Engineering, Linear Algebra etc.</li>
                                    <li>CSE 8A, CSE 11, CSE 12, CSE 15L, CSE 20, CSE 30, MATH 20A-C, MATH 18</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Minor in Business Administration -- Sept 2022 - June 2026
                            </a>
                        </h4>
                    </div>
                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="panel-body">
                        <p>Currently pursuing a Business Minor at the Rady School of Management within UCSD.</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
    )
  }
}