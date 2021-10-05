import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function DualInfoblock({heading, source}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem Ipsum is a great dgiag gagig agdigi agdag78
                            agigdiagi aidgigiaug agdidgai iagisgsewe8 adggwwgdd
                            dahdiuaiud qeqw i8fw8gf8 hefoggfefag uhiuerwgioqg
                            we87orr8ot8 weirpr9w9eyffyweefpweriwpgpierrp  iuewr
                            wergegwprgg
                        </p>
                    </div>
                    <div className="col-4">
                         <div className="card bg-dark">
                            <img className="card-img-top img-fluid" src={source} alt="image goes here" />
                            <div className="card-body">
                                <h5 className="card-title text-white">Just Click Photos</h5>
                                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-warning btn-block">{heading}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
