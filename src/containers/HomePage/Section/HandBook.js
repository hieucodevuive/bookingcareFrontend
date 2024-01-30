import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './MedicalFacility.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bvps1 from "../../../assets/medicalFacility/bvps1.jpg"

class MedicalFacility extends Component {

    render() {
        let settings = this.props.settings

        return (
           <div>
                <div className='Facility-section'>
                    <div className='section-content'>
                        <div className='section-header'>
                            <div className='section-title'>Cẩm nang</div>
                            <button className='more-button'>Xem thêm</button>
                        </div>
                        <Slider {...settings}>
                            <div className='img-customize'>
                                <img src={bvps1}/>
                                <h3>Hệ thống Y tế Hiếu Phạm 2</h3>
                            </div>
                            <div className='img-customize'>
                                <img src={bvps1}/>
                                <h3>Hệ thống Y tế Hiếu Phạm 2</h3>
                            </div>
                            <div className='img-customize'>
                                <img src={bvps1}/>
                                <h3>Hệ thống Y tế Hiếu Phạm 2</h3>
                            </div>
                            <div className='img-customize'>
                                <img src={bvps1}/>
                                <h3>Hệ thống Y tế Hiếu Phạm 2</h3>
                            </div>
                            <div className='img-customize'>
                                <img src={bvps1}/>
                                <h3>Hệ thống Y tế Hiếu Phạm 2</h3>
                            </div>
                            <div className='img-customize'>
                                <img src={bvps1}/>
                                <h3>Hệ thống Y tế Hiếu Phạm 2</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
           </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
