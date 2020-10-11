import { render } from "@testing-library/react";
import React, {Component} from "react";
import Time from '../../components/images/time.png';
import Optimize from '../../components/images/optimize.png';
import Revenue from '../../components/images/revenue.png';

class Content extends Component {
    

    render(){
        return (
            <div>
                <div className="container content">
                    <div className="row" style={{height: '500px'}}>
                        <div className="col-sm-7 talk">
                            <h1>Bring the order into your Marina with a new Docking system.</h1>
                            <br />
                            <h6 className="bold-four">
                            Use Dock.me software to accept payments, send payouts and manage your Marina booking online. In combination with our hardware that will provide availability information, we got everything covered for an elegant docking solution. 
                        </h6>
                            <br />
                            <h6><button className="btn start start-two"  style={{backgroundColor: '#00adb5'}} >See how it works</button></h6>
                        </div>
                        <div className="showcase-img">
                        </div>
                    </div>
                </div>
    
                <section className="features-icons bg-light text-center det-ails">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex  icon-bra-ails">
                                        <i className='far fa-clock m-auto text-primary icon-ails'></i>
                                    </div>
                                    <h5>Save Time</h5>
                                    <p className="lead mb-0">Improve docking efficiency of the Marina and attract more guests.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex  icon-bra-ails">
                                        <i class="fas fa-wrench m-auto text-primary icon-ails"></i>
                                    </div>
                                    <h5>Optimize Traffic</h5>
                                    <p className="lead mb-0">Advanced network of sensors are optimizing and tracking traffic.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex  icon-bra-ails">
                                        <i class="fas fa-hand-holding-usd m-auto text-primary icon-ails"></i>
                                    </div>
                                    <h5>More Revenue</h5>
                                    <p className="lead mb-0">Prevent illegal docking with online payments and controlled traffic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            )
    };
}

export default Content;