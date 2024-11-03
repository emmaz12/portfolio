import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return ( 
    <section className="colorlib-education" id="education">
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
                                    <li>Major GPA: 4.00</li>
                                    <li>Courses: Advanced Data Structures, Design and Analysis of Algorithms, Computer Architecture, Software Engineering, Computer Organization and Systems Programming, Components and Design Techniques for Digital Systems, Discrete Mathematics, Linear Algebra etc.</li>
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