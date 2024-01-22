import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import csk from "../../../assets/specialty/csk.png"


class Specialty extends Component {
    

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
          };
        
        return (
            <div className='specialty-section'>
                <div className='specialty-content'>
                    <div className='specialty-header'>
                        <div className='specialty-title'>Chuyên khoa phổ biến</div>
                        <button className='more-button'>Xem thêm</button>
                    </div>
                    <Slider {...settings}>
                        <div className='img-customize'>
                            <img src={csk}/>
                            <h3>Cơ xương khớp</h3>
                        </div>
                        <div className='img-customize'>
                            <img src={csk}/>
                            <h3>Cơ xương khớp</h3>
                        </div>
                        <div className='img-customize'>
                            <img src={csk}/>
                            <h3>Cơ xương khớp</h3>
                        </div>
                        <div className='img-customize'>
                            <img src={csk}/>
                            <h3>Cơ xương khớp</h3>
                        </div>
                        <div className='img-customize'>
                            <img src={csk}/>
                            <h3>Cơ xương khớp</h3>
                        </div>
                        <div className='img-customize'>
                            <img src={csk}/>
                            <h3>Cơ xương khớp</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
