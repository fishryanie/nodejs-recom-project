import React from 'react'
import logo from '../Assets/img/logoRecom.jpg'
import Professions from './Professions'
import Member from './Member'
import Company from './Company'
import Review from './Review'
import Comment from './Comment'
export default function Admin() {
    return (
        <section>
             <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-2 shadow">
                <div className="">
                    <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-2 pb-2 pt-0 pr-5" to="/"><img src={logo}width= "170" alt="" /></a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" style={{ right: '3%', top: '5%', fontSize:'14px' }} type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
                <input className="form-control form-control-dark  mx-1" type="text" placeholder="Search" aria-label="Search" />
                {/* <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap w-50"><a className="nav-link" to="/login">Login</a></li>
                </ul> */}
            </header>
            <div className="">
                <div className="row w-100 m-0 vh-100">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse text-left">
                        <div className="nav flex-column nav-pills mt-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link nav-item active mb-2 text-white"  id="USER-TAP" data-toggle="pill" href="#USER" role="tab" aria-controls="USER" aria-selected="true">User</a>
                            <a className="nav-link nav-item mb-2 text-white" id="PROFESSIONS-TAP" data-toggle="pill" href="#PROFESSIONS" role="tab" aria-controls="v-pills-profile" aria-selected="false">Professions</a>
                            <a className="nav-link nav-item mb-2 text-white" id="COMPANY-TAP" data-toggle="pill" href="#COMPANY" role="tab" aria-controls="v-pills-messages" aria-selected="false">Company</a>
                            <a className="nav-link nav-item mb-2 text-white" id="COMMENT-TAP" data-toggle="pill" href="#COMMENT" role="tab" aria-controls="v-pills-settings" aria-selected="false">Comment</a>
                            <a className="nav-link nav-item mb-2 text-white" id="REVIEW-TAP" data-toggle="pill" href="#REVIEW" role="tab" aria-controls="v-pills-settings" aria-selected="false">Review</a>
                            <a className="nav-link nav-item mb-2 text-white" id="SITTING-TAP" data-toggle="pill" href="#SITTING" role="tab" aria-controls="v-pills-settings" aria-selected="false">Sitting</a>
                        </div>
                    </nav>

                    <div className="col-md-9 ml-sm-auto col-lg-10 p-0">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="USER" role="tabpanel" aria-labelledby="USER-TAP"><Member></Member></div>
                            <div className="tab-pane fade" id="PROFESSIONS" role="tabpanel" aria-labelledby="PROFESSIONS-TAP"><Professions></Professions></div>
                            <div className="tab-pane fade" id="COMPANY" role="tabpanel" aria-labelledby="COMPANY-TAP"><Company></Company></div>
                            <div className="tab-pane fade" id="COMMENT" role="tabpanel" aria-labelledby="COMMENT-TAP"><Comment></Comment></div>
                            <div className="tab-pane fade" id="REVIEW" role="tabpanel" aria-labelledby="REVIEW-TAP"><Review></Review></div>
                            <div className="tab-pane fade" id="SITTING" role="tabpanel" aria-labelledby="SITTING-TAP">Sitting</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
