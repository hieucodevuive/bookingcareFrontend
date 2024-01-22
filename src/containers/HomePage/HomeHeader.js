import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import {  changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        //fire redux action 
        this.props.changeLanguageAppRedux(language);
    };

    render() {
       let language = this.props.language

        return (
            <React.Fragment>
            <div className="home-header-container">
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars icon-size"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b> <FormattedMessage id="homeheader.speciality"/></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.findadoctorbyspecialty"/></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.healthcarefacility"/></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.chooseahospitalorclinic"/></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.doctor"/></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.chooseagooddoctor"/></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.healthpackage"/></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.comprehensivehealthexamination"/></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id="homeheader.support"/>
                            </div>
                            <div className="language">
                                <div className={ language === LANGUAGES.VI ? 'vietnamese active' : 'vietnamese'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                                <div className={ language === LANGUAGES.EN ? 'english active' : 'english'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='home-header-banner'>
                <div className='up-banner'></div>
                <div className='banner-title1'><FormattedMessage id="banner.title1"/></div>
                <div className='banner-title2'><FormattedMessage id="banner.title2"/></div>
                <div className='banner-search'>
                    <i className="fas fa-search"></i>
                    <input 
                        type='text'
                        placeholder='Tìm chuyên khoa khám bệnh'
                    />
                </div>
                <div className='banner-options'>
                    <div className='option'>
                        <div className="option-icon">
                            <i className="fas fa-hospital-alt"></i>
                        </div>
                        <div className='option-title'>
                            <div><FormattedMessage id="banner.specializedexamination"/></div>
                        </div>
                    </div>
                    <div className='option'>
                        <div className="option-icon">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div className='option-title'>
                            <div><FormattedMessage id="banner.remoteconsultation"/></div>
                        </div>
                    </div>
                    <div className='option'>
                        <div className="option-icon">
                        <i className="fas fa-procedures"></i>
                        </div>
                        <div className='option-title'>
                            <div><FormattedMessage id="banner.comprehensiveexamination"/></div>
                        </div>
                    </div>
                    <div className='option'>
                        <div className="option-icon">
                            <i className="fas fa-vial"></i>
                        </div>
                        <div className='option-title'>
                            <div><FormattedMessage id="banner.medicalexamination"/></div>
                        </div>
                    </div>
                    <div className='option'>
                        <div className="option-icon">
                            <i className="fas fa-user-md"></i>
                        </div>
                        <div className='option-title'>
                            <div><FormattedMessage id="banner.mentalhealth"/></div>
                        </div>
                    </div>
                    <div className='option'>
                        <div className="option-icon">
                            <i className="fas fa-briefcase-medical"></i>
                        </div>
                        <div className='option-title'>
                            <div><FormattedMessage id="banner.dentalexamination"/></div>
                        </div>
                    </div>
                </div>
                <div className='bottom-banner'></div>
            </div>
            </React.Fragment>

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
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
