import React from "react"
import styled from "styled-components"

const Container = styled.section`
overflow: hidden;
display:flex;
text-align: center;
height: 100vh;
`

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing:border-box;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`

const BgImage = styled.div`
background-image: url("/images/login-background.jpg");
z-index: -1;
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
top:0;
right: 0; 
left: 0;

`


const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
margin-top:0;
align-items: center;
text-align: center;
margin-right: auto;
margin-left: auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width: 100%;

`


const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width:600px;
min-height: 1px;
display: block;
width: 100%;
`

const SignUp = styled.a`
font-weight: bold;
color:#f9f9f9;
background-color: #0063e5;
margin-bottom:12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border-radius: 4px;

&:hover{
    background-color:#0483ee;
}
`

const Description = styled.p`
color: hsla(0,0%,95.3%,1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
margin-bottom: 12px;
max-width:600px;
min-height: 1px;
display: block;
width: 100%;

`


const Login = (props) => {
    return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt='logo one'/> 
                <SignUp>Get it all</SignUp>
                <Description>Star on Disney+ brings you more. Hundreds more TV series & movies, plus thousands of hours of drama, suspense, humour and thrills. Enjoy Star as part of your Disney+ subscription. </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="logo two"/>
             </CTA>
            <BgImage/>
        </Content>
    </Container>
    )
}
export default Login