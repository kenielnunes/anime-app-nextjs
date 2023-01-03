import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        scroll-behavior: smooth;
    }
    .swiper {
  width: 90%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

    body {
        background-color: ${(props) => props.theme.colors};
        color: ${(props) => props.theme.colors};
    }

    .collapse:not(.show) {
    display: none;
    }

    .owl-theme .owl-nav {
     margin-top: 10px;
     outline: none;
    }

    .owl-carousel .owl-nav button.owl-prev,
    .owl-carousel .owl-nav button.owl-next {
    position: absolute;
    padding: 10px !important;
    top: 0;
    line-height: 1;
    outline: none;
    }

    .owl-carousel .owl-nav button.owl-prev:hover,
    .owl-carousel .owl-nav button.owl-next:hover {
    background: none;
    color: #404040;
    outline: none;
    }

    .owl-carousel .owl-nav .owl-prev span,
    .owl-carousel .owl-nav .owl-next span {
    font-size: 40px;
    outline: none;
    color: #fff;
    }

    .owl-carousel .owl-nav .owl-prev {
    left: -10px;
    }

    .owl-carousel .owl-nav .owl-next {
    right: -10px;
    }

    .owl-carousel .oxy-repeater-pages-wrap {
    display: none;
    }

    .owl-theme .owl-nav {
    margin-top: 10px;
    outline: none;
    }

    .owl-carousel .owl-nav button.owl-prev,
    .owl-carousel .owl-nav button.owl-next {
    position: absolute;
    top: 0;
    bottom: 20px;
    line-height: 1;
    }

    .owl-carousel .owl-nav button.owl-prev:hover,
    .owl-carousel .owl-nav button.owl-next:hover {
    background: none;
    color: #404040;
    outline: none;
    }

    .owl-carousel .owl-nav .owl-prev span,
    .owl-carousel .owl-nav .owl-next span {
    margin-bottom: 40px;
    font-size: 40px;
    outline: none;
    color: #000;
    }

    .owl-carousel .owl-nav .owl-prev {
    left: -10px;
    }

    .owl-carousel .owl-nav .owl-next {
    right: -10px;
    }

    .owl-dots {
    display: none;
    }

    .owl-stage {
    display: flex;
    align-items: center;
    }

    .accordion-button:not(.collapsed) {
    color: black !important;
    }

    .nav-link.active {
    color: #badd2a;
    border-color: #badd2a !important;
    }

    .nav-tabs .nav-link.active {
    filter: saturate(1);
    -webkit-filter: saturate(1);
    }

    #mc_embed_signup form {
    padding: 0 0 0 0 !important;
    }

    #mc_embed_signup .mc-field-group input {
    padding: 15px 5px 0 7px !important;
    }

    .response {
    color: white !important;
    }

    .nld-chatbot .nld-chatbot-invite-message {
    display: none;
    }

    @media (min-width: 768px) {
    .nld-chatbot .nld-chatbot-invite-message {
        display: flex;
    }
    }

    .collapse {
    visibility: visible !important;
    }

    .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }
    .hamRotate.active {
        transform: rotate(45deg);
    }
    .hamRotate180.active {
        transform: rotate(180deg);
    }
    .line {
        fill:none;
        transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        stroke:#000;
        strokeWidth:5.5;
        strokeLinecap:round;
    }

    .ham4 .top {
        stroke-dasharray: 40 121;
    }
    .ham4 .bottom {
        stroke-dasharray: 40 121;
    }
    .ham4.active .top {
        stroke-dashoffset: -68px;
    }
    .ham4.active .bottom {
        stroke-dashoffset: -68px;
    }

    .accordion-button:not(.collapsed){
        background-color: #003779;
    }

    /* .accordion-button::after{
        background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3E%3Cpath%20fill-rule='evenodd'%20d='M1.646%204.646a.5.5%200%200%201%20.708%200L8%2010.293l5.646-5.647a.5.5%200%200%201%20.708.708l-6%206a.5.5%200%200%201-.708%200l-6-6a.5.5%200%200%201%200-.708z'/%3E%3C/svg%3E");
    }

    .accordion-button:not(.collapsed)::after{
        background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3E%3Cpath%20fill-rule='evenodd'%20d='M1.646%204.646a.5.5%200%200%201%20.708%200L8%2010.293l5.646-5.647a.5.5%200%200%201%20.708.708l-6%206a.5.5%200%200%201-.708%200l-6-6a.5.5%200%200%201%200-.708z'/%3E%3C/svg%3E")
    } */

    .accordion-button::after{
        background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='black'%3E%3Cpath%20fill-rule='evenodd'%20d='M1.646%204.646a.5.5%200%200%201%20.708%200L8%2010.293l5.646-5.647a.5.5%200%200%201%20.708.708l-6%206a.5.5%200%200%201-.708%200l-6-6a.5.5%200%200%201%200-.708z'/%3E%3C/svg%3E");
    }

    .accordion-button:not(.collapsed)::after{
        background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='black'%3E%3Cpath%20fill-rule='evenodd'%20d='M1.646%204.646a.5.5%200%200%201%20.708%200L8%2010.293l5.646-5.647a.5.5%200%200%201%20.708.708l-6%206a.5.5%200%200%201-.708%200l-6-6a.5.5%200%200%201%200-.708z'/%3E%3C/svg%3E")
    }


    .ham {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: transform 400ms;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .hamRotate.active {
        transform: rotate(45deg);
    }
    .hamRotate180.active {
        transform: rotate(180deg);
    }
    .line {
        fill:none;
        transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        stroke:#000;
        strokeWidth:5.5;
        strokeLinecap:round;
    }

    .ham4 .top {
        stroke-dasharray: 40 121;
    }
    .ham4 .bottom {
        stroke-dasharray: 40 121;
    }
    .ham4.active .top {
        stroke-dashoffset: -68px;
    }
    .ham4.active .bottom {
        stroke-dashoffset: -68px;
    }

    @media(min-width: 1024px){
        .navUl :first-child{
            justify-content: space-around !important;
        }
        .navUl{
            width: 100%!important;

        }

    }

`;
