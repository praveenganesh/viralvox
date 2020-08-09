import React, { Component, useState, useEffect } from "react";
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
import BusyAnimation from "../../components/BusyAnimation"
import axios from "axios";
import Config from "../../Config"
import Router, { withRouter } from "next/router";
import { AiFillLike, AiFillDislike, AiOutlineCloseCircle, AiFillCloseCircle, AiOutlineArrowLeft } from "react-icons/ai";
import { FcAddImage } from "react-icons/fc";
import { FacebookShareButton, LinkedinShareButton, WhatsappShareButton, TelegramShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, TwitterShareButton, LinkedinIcon, TelegramIcon } from "react-share";

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




const StyledTextArea = styled.textarea`
    width: 100%;
    height: 80px;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    padding: 10px;
`;

const ImageUploadWrap = styled(Div)`
    width: 100%;
    height: 200px;
    border: 1px dashed lightgray;
    border-radius: 5px;
    background-color: #f9f9f9;
`;


const SuggetionWrap = styled(Div)`
width: 350px;
/* border: 1px solid lightgray; */
padding: 10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgb(0 0 0 / 0%);
cursor: pointer;
border-radius: 5px;
height: 125px;
`;

const LinkBox = styled.input`
width: 80%;
border: none;
background: #f1f1f1;
padding: 10px;
border: 1px solid #e4e4e4;
`;


const templatesRow1 = [{
  "headline": "Chennai IT Guy has created a million dollar company",
  "short_description": "some bla bla bla",
  "image_url": "https://i.ibb.co/d5cDNdq/images.jpg",
}, {
  "headline": "Chennai IT Guy has created a million dollar company",
  "short_description": "some bla bla bla",
  "image_url": "https://i.ibb.co/d5cDNdq/images.jpg",
}, {
  "headline": "Chennai IT Guy has created a million dollar company",
  "short_description": "some bla bla bla",
  "image_url": "https://i.ibb.co/d5cDNdq/images.jpg",
},]


const templatesRow2 = [{
  "headline": "Chennai IT Guy has created a million dollar company",
  "short_description": "some bla bla bla",
  "image_url": "https://i.ibb.co/d5cDNdq/images.jpg",
}, {
  "headline": "Chennai IT Guy has created a million dollar company",
  "short_description": "some bla bla bla",
  "image_url": "https://i.ibb.co/d5cDNdq/images.jpg",
}, {
  "headline": "Chennai IT Guy has created a million dollar company",
  "short_description": "some bla bla bla",
  "image_url": "https://i.ibb.co/d5cDNdq/images.jpg",
},]


const templatesRow3 = [{
  "headline": "Chennai IT Guy has created a million dollar company",
  "short_description": "some bla bla bla",
  "image_url": "https://i.ibb.co/d5cDNdq/images.jpg",
}, {
  "headline": "Chennai IT Guy has created a million dollar company",
  "short_description": "some bla bla bla",
  "image_url": "https://i.ibb.co/d5cDNdq/images.jpg",
}, {
  "headline": "Chennai IT Guy has created a million dollar company",
  "short_description": "some bla bla bla",
  "image_url": "https://i.ibb.co/d5cDNdq/images.jpg",
},]

const uploadImage = async (files, setImageUrl, setUploadingImage) => {
  let size = (files[0].size / 1024) / 1000;
  if (size < 32) {
    let formData = new FormData();
    formData.append("image", files[0]);
    setUploadingImage(true)
    let response = await axios.post("https://api.imgbb.com/1/upload?key=f6c2c0ecefcfe2e8c7af72c8ad970271", formData);
    if (response.status === 200) {
      setUploadingImage(false)
      setImageUrl(response.data.data.url)
    } else {
      alert("sorry, unable to upload image");
      console.log("unable to upload image");
    }


  } else {
    alert("Image size should be less than 32MB")
  }

}


function NewsCreate(props) {


  const [form, setForm] = useState(false);
  const [template, setTemplate] = useState({});
  const [headline, setHeadline] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [creating, setCreating] = useState(false);
  const [slug, setSlug] = useState("");
  const [copied, setCopied] = useState(false);
  const [success, setSuccess] = useState(false)

  const createPrank = async () => {
    let req = { headline: headline, short_description: shortDescription, image_url: imageUrl }
    let response = await axios.post("/v1/news", req);
    if (response.status === 200) {
      setSlug(response.data.slug);
      setSuccess(true);
      setHeadline("");
      setShortDescription("");
      setImageUrl("");
      setForm(false);
      let url = `${Config.mainUrl}/news/${response.data.slug}`;
      let hide = `${Config.mainUrl}:${Config.servIp}/v1/news/hide/${response.data.id}`;
      let alertApi = `https://api.telegram.org/bot1219951771:AAEAan367tzcklqRLpORiyDILJCkwqAVMko/sendMessage?chat_id=-343679236&text=*News+Prank*%0D%0A%0D%0ANew+template+created:%0D%0Aid:${response.data.id}%0D%0A%0D%0Adelete:+${hide}%0D%0A%0D%0A%0D%0A%0D%0Avisit:+${url}`
      let alertres = await axios.get(alertApi);

    } else {
      alert("sorry, unable to create prank");
      console.log("unable to create prank")
    }

  }

  function CreateForm() {
    let box_shadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgb(0 0 0 / 0%)";
    return <Section p="0 3%" mb="0.6rem">
      <Row jc="center">
        <Div width="70%" smWidth="100%" bg="white" p="2%" boxShadow={box_shadow}>
          <Row jc="flex-end">
            <Span onClick={() => { setForm(false); setTemplate({}) }} cursor="pointer" fontSize="20px"><AiOutlineCloseCircle /></Span>
          </Row>
          <Row jc="center" mt="2%">
            <Heading type="medium">CREATE PRANK</Heading>
          </Row>
          <Row mt="2%">
            <Span type="medium" color="black">UPLOAD IMAGE</Span>
          </Row>
          <Row mt="1%">
            <ImageUploadWrap >
              <Row jc="center" height="100%" alignItems="center">
                {
                  imageUrl ?
                    <div>
                      <Span onClick={() => { setImageUrl("") }} cursor="pointer" color="red" style={{ position: "relative", top: "14px", left: "91%" }} fontSize="20px"><AiFillCloseCircle /></Span>
                      <Img width="auto" height="120px" src={imageUrl} />
                    </div>
                    :


                    uploadingImage ?
                      <BusyAnimation color="#757de8" jc="center" size="30px" /> :
                      <>
                        <Span ><Span fontSize="50px"><FcAddImage /></Span> Click here to upload image</Span>
                        <input accept="image/*" onChange={(e) => {
                          uploadImage(e.target.files, setImageUrl, setUploadingImage)

                        }} type="file" style={{ opacity: 0, position: "absolute", top: 0, right: 0, width: "100%", height: "100%", cursor: "pointer" }} /></>

                }


              </Row>
            </ImageUploadWrap>

          </Row>
          <Row mt="4%">
            <Span type="medium" color="black">HEAD LINE</Span>
          </Row>
          <Row mt="1%">
            <StyledTextArea maxLength="5000" onChange={(e) => setHeadline(e.target.value)} type="text" value={headline} color="black" placeholder="type here ...." />
          </Row>



          <Row mt="4%">
            <Span type="medium" color="black">SHORT DESCRIPTION</Span>
          </Row>
          <Row mt="1%">
            <StyledTextArea maxLength="5000" type="text" onChange={(e) => setShortDescription(e.target.value)} value={shortDescription} color="black" placeholder="type here ...." />
          </Row>
          {
            (uploadingImage || creating) &&
            <Row>
              <BusyAnimation color="#757de8" jc="center" size="30px" />
            </Row>
          }
          {
            (!uploadingImage && !creating) &&
            <Row mt="4%" jc="center">
              <CreateButton onClick={() => createPrank()}>CREATE</CreateButton>
            </Row>
          }

        </Div>
      </Row>
    </Section>
  }




  function successPage() {
    let url = `${Config.prankUrl}/news/${slug}`
    let box_shadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgb(0 0 0 / 0%)";
    return <Section p="0 3%" mb="0.6rem">
      <Row jc="center">
        <Div width="70%" smWidth="100%" bg="white" p="2%" boxShadow={box_shadow}>
          <Row jc="flex-end">
            <Span onClick={() => { setSuccess(false) }} cursor="pointer" fontSize="20px"><AiOutlineCloseCircle /></Span>
          </Row>
          <Row jc="center" mt="2%">
            <Heading type="medium">Successfully Created Prank !</Heading>
          </Row>
          <Row mt="2%" jc="center" alignItems="center">
            <Span type="medium" color="black">Now share this link to your friends </Span><Img width="auto" height="60px" src="../../static/emoji/funny.png" />
          </Row>

          <Row jc="center">
            {
              copied && <Span color="green">Link copied !!!</Span>
            }

          </Row>

          <Row jc="center" mt="2%">
            <LinkBox onFocus={(e) => {
              e.target.select(); document.execCommand('copy');
              setCopied(true)
              setTimeout(function () { setCopied(false) }, 1000);
            }} type="text" onChange={() => { }} value={url} />
          </Row>

          <Row mt="2%" jc="center">
            <Div m="0 10px">
              <WhatsappShareButton size={32} url={url}>
                <WhatsappIcon
                  color={"#000"}
                  size={28}
                  round={true}
                />
              </WhatsappShareButton>
            </Div>

            <Div m="0 10px">
              <FacebookShareButton size={32} url={url}>
                <FacebookIcon
                  color={"#000"}
                  size={28}
                  round={true}
                />
              </FacebookShareButton>
            </Div>

            <Div m="0 10px">
              <TwitterShareButton size={32} url={url}>
                <TwitterIcon
                  color={"#000"}
                  size={28}
                  round={true}
                />
              </TwitterShareButton>
            </Div>

            <Div m="0 10px">
              <TelegramShareButton size={32} url={url}>
                <TelegramIcon
                  color={"#000"}
                  size={28}
                  round={true}
                />
              </TelegramShareButton>
            </Div>

            <Div m="0 10px">
              <LinkedinShareButton size={32} url={url}>
                <LinkedinIcon
                  color={"#000"}
                  size={28}
                  round={true}
                />
              </LinkedinShareButton>
            </Div>
          </Row>
        </Div>
      </Row>
    </Section>
  }

  const settingstate = (template) => {
    setShortDescription(template.short_description); setHeadline(template.headline); setImageUrl(template.image_url);
    setSlug("")
  }
  if (success) {
    return successPage()
  }


  if (form) {
    return CreateForm()
  }

  let box_shadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgb(0 0 0 / 0%)";
  console.log("duck duck", props)
  const CreatePrankButton = function (props) {
    return <CreateButton m={props.m || "auto"
    } color="black" > Create your prank news</CreateButton>;
  }

  return (
    <Container pl="0" pr="0">
      <Nav createButton={<CreatePrankButton m="0" />} />
      <Head />
      <Section pl="0" pr="0" bg="graylight">

        <Section p="0 3%" mb="0.6rem">
          <Div bg="white" p="2%" boxShadow={box_shadow}>
            {
              props.router.query.back && <Row curosr="pointer">
                <Span color="#757de8" onClick={() => { Router.push({ pathname: props.router.query.back }) }} cursor="pointer"><AiOutlineArrowLeft /> Back</Span>
              </Row>
            }

            <Row jc="center" mt="2%">
              <Heading type="medium">CHOOSE TEMPLATE</Heading>
            </Row>
            <Row jc="center">
              <Heading color="#d0d0d0" type="medium">(OR)</Heading>
            </Row>
            <Row jc="center">
              <CreateButton onClick={() => { setForm(true); setShortDescription(""), setHeadline(""); setImageUrl(""); setSlug("") }}>Create Own</CreateButton>
            </Row>
            <Row mt="3%" />
            <Row mt="2%">
              {
                templatesRow1.map((template, index) => {
                  return <Grid col={{ xs: 12, sm: 12, md: 4, lg: 4 }} onClick={() => {
                    setForm(true);

                    settingstate(template)
                  }}>
                    <SuggetionWrap>
                      <Row>

                        <Grid col={{ xs: 4, sm: 4, md: 4, lg: 4 }}>
                          <Img m="auto" width="auto" height="100px" src={template.image_url} />
                        </Grid>
                        <Grid col={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
                          <Row jc="center">
                            <Span fontSize="14px" color="black" fontWeight="bold">
                              {template.headline}
                            </Span>
                          </Row>
                          <Row mt="4%">
                            <Span fontWeight="normal" fontSize="13px">{template.short_description}</Span>
                          </Row>
                        </Grid>

                      </Row>
                    </SuggetionWrap>
                  </Grid>
                })
              }

            </Row>


            <Row mt="2%">
              {
                templatesRow2.map((template, index) => {
                  return <Grid col={{ xs: 12, sm: 12, md: 4, lg: 4 }} onClick={() => {
                    setForm(true);
                    settingstate(template)
                  }}>
                    <SuggetionWrap>
                      <Row>

                        <Grid col={{ xs: 4, sm: 4, md: 4, lg: 4 }}>
                          <Img m="auto" width="auto" height="100px" src={template.image_url} />
                        </Grid>
                        <Grid col={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
                          <Row jc="center">
                            <Span fontSize="14px" color="black" fontWeight="bold">
                              {template.headline}
                            </Span>
                          </Row>
                          <Row mt="4%">
                            <Span fontWeight="normal" fontSize="13px">{template.short_description}</Span>
                          </Row>
                        </Grid>

                      </Row>
                    </SuggetionWrap>
                  </Grid>
                })
              }

            </Row>

            <Row mt="2%">
              {
                templatesRow3.map((template, index) => {
                  return <Grid col={{ xs: 12, sm: 12, md: 4, lg: 4 }}
                    onClick={() => {
                      setForm(true);
                      settingstate(template)
                    }}>
                    <SuggetionWrap>
                      <Row>

                        <Grid col={{ xs: 4, sm: 4, md: 4, lg: 4 }}>
                          <Img m="auto" width="auto" height="100px" src={template.image_url} />
                        </Grid>
                        <Grid col={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
                          <Row jc="center">
                            <Span fontSize="14px" color="black" fontWeight="bold">
                              {template.headline}
                            </Span>
                          </Row>
                          <Row mt="4%">
                            <Span fontWeight="normal" fontSize="13px">{template.short_description}</Span>
                          </Row>
                        </Grid>

                      </Row>
                    </SuggetionWrap>
                  </Grid>
                })
              }

            </Row>
          </Div>
        </Section>

      </Section>
    </Container >

  );
}


export default withRouter(NewsCreate);