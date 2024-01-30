import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './about.scss'

class About extends Component {

    render() {

        return (
           <div className='about-section'>
                <div className='about-header'>
                    Truyền thông nói gì về BookingCares
                </div>
                <div className='about-content'>
                    <div className='about-content-left'>
                        <iframe 
                            width="50%" 
                            height="400px" 
                            src="https://www.youtube.com/embed/7tiR7SI4CkI" 
                            title="BookingCare trên VTV1 ngày 21/02/2018 - Chương trình Cà phê khởi nghiệp" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                    <div className='about-content-right'>
                        <p>    
                        BookingCare là một nền tảng đặt lịch trực tuyến độc đáo, mang đến trải nghiệm thuận lợi và linh hoạt cho người dùng trong việc quản lý lịch trình sức khỏe và chăm sóc cá nhân. 
                        Với BookingCare, người dùng có thể dễ dàng đặt lịch hẹn với các bác sĩ, chuyên gia y tế, hoặc các dịch vụ chăm sóc sức khỏe khác một cách nhanh chóng và tiện lợi.
                        Nền tảng này không chỉ giúp người dùng tiết kiệm thời gian mà còn mang lại sự thoải mái và an ninh trong quá trình quản lý sức khỏe cá nhân. BookingCare cung cấp thông tin chi tiết về các đối tác y tế, bao gồm thông tin về bác sĩ, chuyên gia, đánh giá từ người dùng trước, giúp người dùng có quyết định thông tin và tự tin khi chọn lựa dịch vụ.
                        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
