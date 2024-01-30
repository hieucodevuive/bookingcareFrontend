import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './TopDoctor.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import csk from "../../../assets/specialty/doctor1.webp"

class TopDoctor extends Component {

    render() {
        let settings = this.props.settings

        return (
           <div>
               <div className='doctor-section'>
                <div className='section-content'>
                    <div className='section-header'>
                        <div className='section-title'>Bác sĩ nổi bật</div>
                        <button className='more-button'>Xem thêm</button>
                    </div>
                    <Slider {...settings}>
                        <div className='img-customize'>
                            <img src={csk}/>
                            <h3>Bác sĩ Thùy</h3>
                            <h5>Chuyên khoa răng hàm mặt</h5>
                        </div>
                        <div className='img-customize'>
                            <img src={csk}/>
                            <h3>Bác sĩ Thùy</h3>
                            <h5>Chuyên khoa răng hàm mặt</h5>
                        </div>
                        <div className='img-customize'>
                            <img src={csk}/>
                            <h3>Bác sĩ Thùy</h3>
                            <h5>Chuyên khoa răng hàm mặt</h5>
                        </div>
                        <div className='img-customize'>
                            <img src={csk}/>
                            <h3>Bác sĩ Thùy</h3>
                            <h5>Chuyên khoa răng hàm mặt</h5>
                        </div>
                        <div className='img-customize'>
                            <img src={csk}/>
                            <h3>Bác sĩ Thùy</h3>
                            <h5>Chuyên khoa răng hàm mặt</h5>
                        </div>
                        <div className='img-customize'>
                            <img src={csk}/>
                            <h3>Bác sĩ Thùy</h3>
                            <h5>Chuyên khoa răng hàm mặt</h5>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopDoctor);
