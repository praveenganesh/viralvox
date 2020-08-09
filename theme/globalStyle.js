import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";
import theme from "../theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");


const GlobalStyle = injectGlobal`
  // font-family: 'Montserrat', sans-serif;
  // font-family: 'Open Sans', sans-serif;
  // font-family: 'Poppins', sans-serif;
  // font-family: 'Nunito', sans-serif;
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800&display=swap');

  Nunito
  *, ::after, ::before {
    box-sizing: border-box;
  }

  button:focus {outline:0;}
  div:focus {outline:0;}
  ${styledNormalize}
  html{
    height: 100%;
  }
  body {
    display: block;
    color: ${theme.colors.textBold};
    font-family: ${theme.fontFamily.os};
    overflow-x: hidden;
    height: 100%;
  }
  button:focus {outline:0;}
  a {
    text-decoration: none;
    &:active{
      color: inherit;
    }
  }
  input {
   &:hover, &:focus {
      outline: none;
      // display: block;
    }
  }
  li{
    :focus{
      outline: 0
    }
  }
  
  .apply-and-cancel{
    border-radius: 3px;
    border: none;
    background: black;
    color: white;
    padding: 7px 7px;
    font-size: 13px;
    margin: 0 5px;
    text-transform: capitalize;
  }
  .custom-edit-button{
    background: #4285f4;
    border: none;
    padding: 4px 4px 4px 6px;
    border-radius: 50%;
    font-size: 11px;
    color: white;
    font-weight: bold;
    outline: none;
    cursor: pointer;
  }
  .custom-add-button{
    display: inline-block;
    margin-bottom: 0;
    border-radius: 100%;
    background: #4285f4;
    border: 1px solid transparent;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    font-weight: normal;
    transition: all 0.2s ease-in-out;
    padding: 7px 8px;
    font-size: 12px;
    color: white;
    margin: 20px auto;
    &:hover{
        background: #3a79e1;
    }
  }
  .input, .edit-textarea{
    background-color: #fff;
    border-color: #dbdbdb;
    color: #363636;
    box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
    max-width: 100%;
    width: 100%;
  }
  .slick-slider{
    margin: 1rem 0;
  }
  .homepageSlider {
    min-height: 250px;
  }
  .slick-current > div div div div.hoverCard{
    //  min-height: 150px;
    //  height: auto;
    //  padding: 20px;
    //  overflow: auto;
  }
  .slick-slide{
    cursor: pointer;
  }
  .slick-dots{
    text-align: right !important;
    right: 65px !important;
    bottom: -47px !important;
    width: auto !important;
  }
  .loginPageSlider .slick-dots li.slick-active button:before{
    opacity: 1;
    color: white;
  }
  .loginPageSlider .slick-dots li button:before{
    color: white;
  }
  .loginPageSlider .slick-dots{
    text-align: left !important;
    left: 51px !important;
    bottom: 40px !important;
    width: auto !important;
  }
  .shrine-slider {
    .slick-prev:before, .slick-next:before{
    color: black !important;
    }
  }
  
  .review-read-more .short-text{
    color: gray;
    font-size:0.8rem;
  }
  .Toastify__toast--success {background: #4caf50 !important; }
  .Toastify__toast--error {background: #cb2431 !important; }
  .Toastify__toast--info {background: #0277bd !important; }
  .review-read-more .readMoreText{
    color: gray !important;
    margin-left: 5px;
    font-weight: bold;
  }
  .shrine-pagination{
    .rc-pagination-item-active{
      background-color: black;
      border-color: black;
      :hover{
        a{
          color: white !important;
        }
      }
    }
    .react-datepicker-wrapper{
      width: 100% !important;
    }
    .added{
      color: green !important;
    }
    .removed{
      color: red !important;
    }
    .rc-pagination-item{
      :hover{
        border-color: black
        a{
          color: black
        }
      }
    }
  }


}`;

export default GlobalStyle;
