import React, { useState } from "react";
import Head from "../../components/Head";
import Row from "../../components/Row"
import Nav from "../../components/Nav";
import Button from "../../components/Button"
import Container from "../../components/Container";
import Section from "../../components/Section";
import Img from "../../components/Img"
import Heading from "../../components/Heading"
import Grid from "../../components/Grid";
import Span from "../../components/Span"
import styled from "styled-components";
import Div from "../../components/Div";
import axios from "axios";
import Router, { withRouter } from "next/router";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const CreateButton = styled(Button)`
    background: #757de8;
    color: white;
    font-weight: bodl;
    border: none;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0px;
    font-weight: 600;
    border-radius: 2px;
    ${props => props.m && { margin: props.m }}
    border-bottom: 2px solid #002984;
    &:active{
      border-bottom: 0px solid #002984;
    }
    @media only screen and (max-width: ${props =>
    props.theme.breakpoints("sm")}) {
    margin: 2% auto !important;
    }
`;

const ImpressionButton = styled(Span)`
user-select: none;
&:active{
  color:#757de8
}
`;

const SocialLiknksWrapper = styled(Row)`
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgb(0 0 0 / 12%);
    border-radius: 10px;
    cursor: pointer;
}
`;




function Home(props) {
  const CreatePrankButton = function (props) {

    return <CreateButton onClick={() => Router.push({ pathname: "/news-create", query: { back: asPath } })} m={props.m || "auto"
    } color="black" > Create your prank news</CreateButton>;
  }
  let box_shadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgb(0 0 0 / 0%)";

  const contentBlocked = () => {
    return (
      <Container pl="0" pr="0">
        <Nav createButton={<CreatePrankButton m="0" />} />
        <Head />
        <Section pl="0" pr="0" bg="graylight">
          <Section p="0 3%" mb="0.6rem">
            <Div bg="white" p="2%" boxShadow={box_shadow}>
              <Row alignItems="center">
                <Grid col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                  <Img m="auto" width="auto" height="100px" src={"../../static/not-allowd.png"} />
                </Grid>
                <Grid col={{ xs: 12, sm: 12, md: 7, lg: 7 }}>
                  <h1>CONTENT BLOCKED</h1>
                  <Row>
                    <Span>{`Please contact the admin`}</Span>
                  </Row>

                </Grid>

              </Row>

            </Div>
          </Section>
        </Section>
      </Container>
    )
  }


  const NotFound = () => {
    return (
      <Container pl="0" pr="0">
        <Nav createButton={<CreatePrankButton m="0" />} />
        <Head />
        <Section pl="0" pr="0" bg="graylight">
          <Section p="0 3%" mb="0.6rem">
            <Div bg="white" p="2%" boxShadow={box_shadow}>
              <Row alignItems="center">
                <Grid col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                  <Img m="auto" width="auto" height="100px" src={"../../static/not-found.png"} />
                </Grid>
                <Grid col={{ xs: 12, sm: 12, md: 7, lg: 7 }}>
                  <h1>404 NOT FOUND</h1>
                  <Row>
                    <Span>{`Please check the URL and retry`}</Span>
                  </Row>

                </Grid>

              </Row>

            </Div>
          </Section>
        </Section>
      </Container>
    )
  }



  if (Object.keys(props.news).length === 0) {
    return NotFound()
  }

  if (props.isBlocked) {
    return contentBlocked()
  }



  let asPath = props.router.asPath
  const [news, setNews] = useState(props.news || {});
  const [likes, setLikes] = useState(props.news.likes || 0);
  const [dislikes, setDislikes] = useState(props.news.dislikes || 0);
  const monthList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  let d = news.created_time ? new Date(news.created_time) : new Date();



  const addLike = () => {
    axios.post(`/v1/news/add-like`, { id: news.id });
  }

  const addDislike = () => {
    axios.post(`/v1/news/add-dislike `, { id: news.id });
  }

  const nFormatter = (num, digits) => {
    let si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "k" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }





  return (
    <Container pl="0" pr="0">
      <Nav createButton={<CreatePrankButton m="0" />} />
      <Head description={news.headline} />
      <Section pl="0" pr="0" bg="graylight">


        <Section p="0 3%" mb="0.6rem">
          <Div bg="white" p="2%" boxShadow={box_shadow}>
            <Row>
              <Grid col={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                <Img m="auto" width="auto" height="200px" src={news.image_url} />
              </Grid>
              <Grid col={{ xs: 12, sm: 12, md: 7, lg: 7 }}>
                <h1>{news.headline}</h1>
                <Row>
                  <Span>{`${d.getDate()} ${monthList[d.getMonth()]} ${d.getFullYear()}`}</Span>
                </Row>
                <Row mt="20px">
                  <Span fontWeight="normal">{news.short_description}</Span>
                </Row>

              </Grid>

            </Row>
            <Row jc="flex-end">
              <Div m="5px 15px">
                <Span color="#b5b5b5">{nFormatter(likes, 1)}</Span>
                <ImpressionButton onClick={() => { setLikes(likes + 1); addLike() }} fontSize="20px" cursor="pointer"> <AiFillLike /></ImpressionButton>
              </Div>
              <Div m="5px 15px">
                <Span color="#b5b5b5">{nFormatter(dislikes, 1)}</Span>
                <ImpressionButton onClick={() => { setDislikes(dislikes + 1); addDislike() }} fontSize="20px" cursor="pointer"> <AiFillDislike /></ImpressionButton>
              </Div>

            </Row>
          </Div>
        </Section>
        {/* <Row>
          <Button color="black">Like</Button>
          <Button color="black">dislike</Button>
        </Row> */}
        <Section p="0 3%" mb="0.6rem">
          <Div bg="white" boxShadow={box_shadow} pb="2%">
            <Section>
              <Row>
                <Grid>

                </Grid>
                <Grid>
                  <Row jc="center" alignItems="center" mt="1%">
                    {/* <Img width="auto" height="50px" src="../../static/emoji/confused.png" /> */}
                    <Span fs="italic" color="#383838" fontWeight="800">Wait a minute ....</Span>

                  </Row>
                  <Row jc="center" mt="1%" alignItems="center">
                    <Span fs="italic" color="#383838" fontWeight="800">Do you really think this guy is worth it?</Span>
                    <Img width="auto" height="50px" src="../../static/emoji/lol.png" />
                    <Img width="auto" height="50px" src="../../static/emoji/lol2.png" />
                  </Row>
                </Grid>
                <Grid>
                  <Row jc="flex-end">
                    <CreatePrankButton m="0" />
                  </Row>
                </Grid>

              </Row>

              <Row jc="center" mt="2%">
                <Grid>
                  <Row jc="center">
                    {/* <CreatePrankButton /> */}
                  </Row>

                </Grid>
                <Grid>
                  <Row jc="center">
                    <Img src="https://i.pinimg.com/originals/fe/d1/3f/fed13f686ae70b84b68980f34a70a634.jpg" />
                  </Row>
                </Grid>
                <Grid>
                  <Row jc="center">
                    {/* <CreatePrankButton /> */}
                  </Row>
                </Grid>



              </Row>
              <Row jc="center" mt="2%">
                <Div width="100%" ta="center">
                  <Span>This person is just waiting fo the month to get over just to offord a biryani. no one in the world would invest on this person</Span>
                </Div>
              </Row>

            </Section>
            <Row jc="center" mt="2%">
              <Span>* This is prank website</Span>
            </Row>

            <Row jc="center" mt="2%">
              <Div width="80%" ta="center">
                <Span fontWeight="normal">Viral Mafia is a Prank news website where you can create your own prank news about you or your friends and share it to your friends like a real news. This is created to entertain the people with small pranks. Don't take it too seriously </Span>

              </Div>
            </Row>

            <Row jc="center" mt="2%">
              <Img width="auto" height="50px" src="../../static/emoji/lol.png" />
              <Img width="auto" height="50px" src="../../static/emoji/cool.png" />
            </Row>
            <Row jc="center" mt="2%">
              <CreatePrankButton />
            </Row>


          </Div>
        </Section>
        <Section p="0 3%" >
          <Div bg="white" boxShadow={box_shadow} pb="3%">
            <Row jc="center" mt="2%">
              <Heading type="medium">Creators</Heading>
            </Row>
            <Section>
              <Row mt="2%">
                <Grid>
                  {/* <Row jc="center" mb="2%">
                    <Img width="auto" height="40px" src="../../static/emoji/flag1.png" mr="5px" />
                  </Row> */}
                  <Img m="auto" width="auto" height="150px" src="https://i.ibb.co/3TMrFNZ/praveen-crop.jpg" />
                  <Row jc="center" mt="2%" alignItems="center">
                    {/* <Img width="auto" height="40px" src="../../static/emoji/flag1.png" mr="5px" /> */}
                    <Span ta="center" fontWeight="800" color="black">Vasanth Vijayabaskar</Span>
                  </Row>
                  <Row jc="center" mt="2%">
                    <Div width="50%" smWidth="100%">
                      <SocialLiknksWrapper jc="space-between">
                        <Img width="auto" height="30px" src="../../static/emoji/gmail.png" />
                        <Img width="auto" height="30px" src="../../static/emoji/fb.png" />
                        <Img width="auto" height="30px" src="../../static/emoji/instagram.png" />
                        <Img width="auto" height="30px" src="../../static/emoji/linkedin.png" />
                      </SocialLiknksWrapper>
                    </Div>
                  </Row>
                  <Row>

                  </Row>
                </Grid>
                <Grid m={{ xs: "40px 0", sm: "40px 0", md: 0, lg: 0 }}>
                  {/* <Row jc="center" mb="2%">
                    <Img width="auto" height="40px" src="../../static/emoji/flag1.png" mr="5px" />
                  </Row> */}
                  <Img m="auto" width="auto" height="150px" src="https://i.ibb.co/3TMrFNZ/praveen-crop.jpg" />
                  <Row jc="center" mt="2%" alignItems="center">
                    {/* <Img width="auto" height="40px" src="../../static/emoji/flag1.png" mr="5px" /> */}
                    <Span ta="center" fontWeight="800" color="black">Praveen Kumar G</Span>
                  </Row>
                  <Row jc="center" mt="2%">
                    <Div width="50%" smWidth="100%">
                      <SocialLiknksWrapper jc="space-between">
                        <Img width="auto" height="30px" src="../../static/emoji/gmail.png" />
                        <Img width="auto" height="30px" src="../../static/emoji/fb.png" />
                        <Img width="auto" height="30px" src="../../static/emoji/instagram.png" />
                        <Img width="auto" height="30px" src="../../static/emoji/linkedin.png" />
                      </SocialLiknksWrapper>
                    </Div>
                  </Row>
                  <Row>

                  </Row>
                </Grid>
              </Row>
            </Section>
          </Div>
        </Section>

      </Section>
    </Container >

  );
}

Home.getInitialProps = async ({ req, res, ...ctx }) => {
  let response = await axios.get(`/v1/news/${req.params.slug}`);
  let news = response.data[0];
  if (!news) {
    return { news: {}, isBlocked: false }
  }
  let isBlocked = news.status === 0 ? true : false
  return { news: news, isBlocked: isBlocked }
}

export default withRouter(Home);