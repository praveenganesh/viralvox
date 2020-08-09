import React, { Component } from "react";
import Section from "../Section";
import Container from "../Container";
import Row from "../Row";
import Span from "../Span";
import Input from "../Input";
import Router, { withRouter } from "next/router";
import styled from "styled-components";
import Grid from "../Grid";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaGooglePlay,
  FaApple
} from "react-icons/fa";

const StyledLink = styled.span`
  color: white;
  font-size: 0.625rem;
  display: block;
  margin: 10px 0px;
  cursor: pointer;
`;
const StyledFooterIcon = styled.a`
  color: white;
  margin: 0px 2px;
  cursor: pointer;
  font-size: 1.125rem;
`;
const ContactUsInput = styled(Input)`
  width: 20%;
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints("sm")}) {
    width: 80%;
  }
`;
class Footer extends Component {
  render() {
    return (
      <Section
        p={{
          xs: "0.9375rem",
          sm: "0.9375rem",
          md: "2.9375rem",
          lg: "2.9375rem"
        }}
        mb="0px"
        bg="black"
      >
        <Container p="10px 60px">
          <Row mt="10px">
            <Grid p="0px 20px" col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
              <Span
                bb="0.7px solid #fff"
                mt="10px"
                pb="10px"
                display="block"
                fontSize={10}
                color="#fff"
              >
                DOCUMENTS
              </Span>

              <StyledLink
                onClick={() => {
                  Router.push({ pathname: "/copyright-policy" });
                }}
              >
                COPYRIGHT POLICY
              </StyledLink>
              <StyledLink
                onClick={() => {
                  Router.push({ pathname: "/privacy-policy" });
                }}
              >
                PRIVACY POLICY
              </StyledLink>
              <StyledLink
                onClick={() => {
                  Router.push({ pathname: "/trademark-policy" });
                }}
              >
                TRADEMARK POLICY
              </StyledLink>
              <StyledLink
                onClick={() => {
                  Router.push({ pathname: "/acceptable-policy" });
                }}
              >
                ACCEPTABLE USE POLICY
              </StyledLink>
              <StyledLink
                onClick={() => {
                  Router.push({ pathname: "/terms" });
                }}
              >
                TERMS OF SERVICES
              </StyledLink>
            </Grid>
            <Grid p="0px 20px" col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
              <Span
                bb="0.7px solid #fff"
                mt="10px"
                pb="10px"
                display="block"
                fontSize={10}
                color="#fff"
              >
                COMPANY
              </Span>
              <StyledLink
                onClick={() => {
                  Router.push({ pathname: "/contact-us" });
                }}
              >
                CONTACT US
              </StyledLink>
              <StyledLink
                onClick={() => {
                  Router.push({ pathname: "/about-us" });
                }}
              >
                ABOUT US
              </StyledLink>
            </Grid>
            <Grid ml="20px" col={{ xs: 12, sm: 12, md: 3, lg: 3 }}></Grid>
            <Grid col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
              <Span
                ml="27px"
                mb="10px"
                display="block"
                fontWeight="500"
                fontSize={12}
                color="#fff"
              >
                Let's get social
              </Span>
              <Span
                ml="27px"
                display="block"
                fontWeight="500"
                fontSize={18}
                color="#fff"
              >
                <StyledFooterIcon>
                  <FaFacebookF />
                </StyledFooterIcon>
                <StyledFooterIcon>
                  <FaLinkedinIn />
                </StyledFooterIcon>
                <StyledFooterIcon>
                  <FaTwitter />
                </StyledFooterIcon>
                <StyledFooterIcon>
                  <FaInstagram />
                </StyledFooterIcon>
              </Span>
              <Span
                ml="27px"
                mt="20px"
                mb="10px"
                display="block"
                fontWeight="500"
                fontSize={12}
                color="#fff"
              >
                Download our App
              </Span>
              <Span
                ml="27px"
                display="block"
                fontWeight="500"
                fontSize={18}
                color="#fff"
              >
                <StyledFooterIcon>
                  <FaGooglePlay />
                </StyledFooterIcon>
                <StyledFooterIcon>
                  <FaApple />
                </StyledFooterIcon>
              </Span>
            </Grid>
          </Row>
        </Container>
      </Section>
    );
  }
}
export default withRouter(Footer);
