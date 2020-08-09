import React from "react";
import Div from "../Div";
import Row from "../Row";
import Span from "../Span"
import Grid from "../Grid"
import Router, { withRouter } from "next/router";
import styled from "styled-components";


const NavWrapper = styled.div`
width: 100%;
padding: 25px 15px;
border-bottom: 1px solid #d4d4d4;
position: sticky;
top: 0;
a{
    margin-right:10px
}
`;

function Nav(props) {
    let asPath = props.router.asPath
    return <Row>
        <NavWrapper>
            <Row alignItems="center" >
                <Grid col={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                    <Row jc="flex-start">
                        <Span>Logo</Span>
                    </Row>
                </Grid>
                <Grid col={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                    <Row jc="flex-end">
                        <Span onClick={() => Router.push({ pathname: "/news-create", query: { back: asPath } })} cursor="pointer" color="#757de8">CREATE PRANK NEWS</Span>
                    </Row>
                </Grid>

            </Row>
        </NavWrapper>
    </Row>
}


export default withRouter(Nav);