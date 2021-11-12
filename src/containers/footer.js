import React from 'react'
import Footer from '../components/footer'
import Icons from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>ABOUT US</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>SERVICES</Footer.Title>
                        <Footer.Link href="#">Marketing</Footer.Link>
                        <Footer.Link href="#">Consulting</Footer.Link>
                        <Footer.Link href="#">Development</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>CONTACT</Footer.Title>
                        <Footer.Link href="#">Canada</Footer.Link>
                        <Footer.Link href="#">America</Footer.Link>
                        <Footer.Link href="#">Support</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>PLUGS</Footer.Title>
                        <Footer.Link href="#"><Icons className="fab fa-instagram" />Instagram</Footer.Link>
                        <Footer.Link href="#"><Icons className="fab fa-twitter" />Twitter</Footer.Link>
                        <Footer.Link href="#"><Icons className="fab fa-facebook-f" />Facebook</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}