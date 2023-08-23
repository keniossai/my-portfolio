import React, { Component, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import Aos from 'aos'
import "aos/dist/aos.css"

const Portfolio = () => {
  
  
    useEffect(() => {
      Aos.init({
        disable: false, 
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99,
        duration: 3000,

      });
    }, [])
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-4">
                <a href="https://www.figma.com/file/a773FQXPlYwbCJ3856atIE/AGM?type=design&node-id=1767%3A788&mode=design&t=3UNnNQD248MXuSFw-1" rel="noreferrer" target="_blank">
                    <Image className="portImage" src="/flexi.png" width={600} height={600} alt="" />
                    <div className="service-card">
                        <h2>UI/UX Design</h2>
                        <p>Flexiwallet: Finance Management Web Application</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4">
                <a href="https://www.figma.com/file/T3sRgEezSjQOWXq7b6UkIX/ALG-Project?type=design&node-id=0%3A1&mode=design&t=bMmy4O8dShVzBebS-1" rel="noreferrer" target="_blank">
                    <Image className="portImage" src="/alg.png" width={600} height={600} alt="" />
                    <div className="service-card">
                        <h2>UI/UX Design</h2>
                        <p>Africa Leadership Group: Web Application</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4">
                <a href="https://www.figma.com/file/qsTuKF8WJOGrYKYAmeuCN6/FlexiPay?type=design&node-id=523%3A9114&mode=design&t=lfUM5yeY44csjADt-1" rel="noreferrer" target="_blank">
                    <Image className="portImage" src="/bill.png" width={600} height={600} alt="" />
                    <div className="service-card">
                        <h2>UI/UX Design</h2>
                        <p>FlexiBillings: Invoice Management System</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4">
                <a href="https://insurancemeetstech.com/" rel="noreferrer" target="_blank">
                    <Image className="portImage" src="/insure.png" width={500} height={400} alt="" />
                    <div className="service-card">
                        <h2>Web Development</h2>
                        <p>Insurance Meets Tech: Nigeria Insurance Conference Website</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4">
                <a href="https://mediacomms.africa/" rel="noreferrer" target="_blank">
                    <Image className="portImage" src="/media.png" width={500} height={400} alt="" />
                    <div className="service-card">
                        <h2>Web Development</h2>
                        <p>MediaComms: Press Community Website</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4">
                <a href="https://krystaldigitalng.com/" rel="noreferrer" target="_blank">
                    <Image className="portImage" src="/krystal.png" width={500} height={400} alt="" />
                    <div className="service-card">
                        <h2>Frontend Development</h2>
                        <p>Krystal Digital Networks: Website</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4">
                <a href="https://agile.krystalng.com" rel="noreferrer" target="_blank" >
                    <Image className="portImage" src="/agile.png" width={500} height={400} alt="" />
                    <div className="service-card">
                        <h2>Web Development</h2>
                        <p>AGILE Initiatives: Adolescent Girls Initiative for Learning</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4">
                <a href="https://africaleadershipgroup.org/" rel="noreferrer" target="_blank" >
                    <Image className="portImage" src="/algweb.png" width={500} height={400} alt="" />
                    <div className="service-card">
                        <h2>Web Development</h2>
                        <p>Africa Leadership Group</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4">
                <a href="http://modioncommunications.com/" rel="noreferrer" target="_blank" >
                    <Image className="portImage" src="/modion.png" width={500} height={400} alt="" />
                    <div className="service-card">
                        <h2>Web Development</h2>
                        <p>Modion Communications: Nigeria PR Agency</p>
                    </div>
                </a>
            </div>
            
        </div>
      </div>
    )
  
}

export default Portfolio

const ButtonContent = styled.div`
    position: relative;
    z-index: 1;
`

const More = styled.button`
    outline: none;
    cursor: pointer;
    padding: 15px 30px;
    background: transparent;
    position: absolute;
    right: 17.5%;
    text-transform: none;
    font-weight: 500;
    font-family: "Inter",sans-serif;
    bottom: 6.8%;
    font-size: 16px;
    color: #2a97ff;
    border: 1px solid #2a97ff;
    transition: color .2s linear;
    /* padding-top: 30px; */

    :hover{
        color: #fff;
    }
    ::after{
        content: "";
        position: absolute;
        width: 0;
        top: 0;
        bottom: 0;
        left: unset;
        right: 0;
        height: 100%;
        transition: all .2s linear;
        background: #2a97ff;
    }
    
    :hover::after{
        width: 100%;
        left: 0;
        right: unset;
    }

    @media screen and (max-width: 986px){
        position: relative;
        left: unset;
        right: unset;
        display: block;
        margin: 60px auto 0;
    }
`

const Card = styled.div`
    padding: 30px;
    border-radius: 10px;

    .bold{
        font-weight: 600 !important;
        color: #000;
        font-size: 1rem;
        text-align: left;
        color: white;
    }

    span{
        color: white;
        font-family: Poppins,sans-serif;
        font-weight: 500 !important;
    }

    :hover{
        box-shadow: 0 0 20px -13px white;
    }
`

const FeatureBody = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 10px;
    padding-top: 10px;

    @media screen and (min-width: 768px){
        -webkit-box-flex: 0;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }

    .feature-item{
        color: #007bff;
        background-color: transparent;
    }

`

 const LandingWork = styled.section`
    background: #131419;
    padding: 90px 60px;
    position: relative;


    @media screen and (max-width: 350px){
        padding: 90px 20px;
    }
`
 const FadeInTitle = styled.div`
    opacity: 1;
    /* -webkit-transform: none; */
    visibility: visible;
    transition: opacity .6s ease-out,transform 1.2s ease-out,-webkit-transform 1.2s ease-out;
    will-change: opacity,visibility;
`

 const Title = styled.div`
    font-weight: 800;
    font-size: 55px;
    color: #fff;

    @media screen and (max-width: 522px){
        font-size: 45px;
    }
`

 const Boxes = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    margin-top: 50px;

    @media screen and (max-width: 600px){
        grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
    }

`
