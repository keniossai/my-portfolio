import React from 'react'
import { FooterSec, FooterTop, Message, Links, Linkd, LinkLi, Copyright } from './FooterStyle'
import Link from 'next/link'

export const Footer = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Ken_Ossai_CV.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Ken_Ossai_CV.pdf';
                alink.click();
            })
        })
    }
  return (
    <FooterSec>
        <hr />
        <FooterTop>
            <Message>Say Hello</Message>
            <Links>
                <Linkd>
                    <p>
                        <a data-text="kenossai1@gmail.com" href="mailto:kenossai1@gmail.com">
                            kenossai1@gmail.com
                        </a>
                    </p>
                </Linkd>
                <LinkLi className='link'>
                    <p><button data-text='Resume' onClick={onButtonClick}>Resume</button></p>
                    <p><Link data-text="Contact" href="/service">Contact</Link></p>
                </LinkLi>
            </Links>
        </FooterTop>
        <Copyright>&copy; Kenneth Ossai 2023</Copyright>
    </FooterSec>
  )
}
