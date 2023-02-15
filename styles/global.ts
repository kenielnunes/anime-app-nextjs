import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        scroll-behavior: smooth;
    }
    body {
        background-color: #0B0B29;
        color: #fff
    }
    .swiper {
        width: 90%;
        height: 100%;
}

.primaryButton {
    /* font-family: 'Valorant', sans-serif; */
 color: white;
 cursor: pointer;
 font-size: 13px;
 font-weight: bold;
 letter-spacing: 0.05rem;
 border: 1px solid #0E1822;
 padding: 0.8rem 2.1rem;
 background-color: #0E1822;
 background-size: 200%;
 background-position: 200%;
 background-repeat: no-repeat;
 transition: 0.3s ease-in-out;
 transition-property: background-position, border, color;
 /* position: relative; */
 z-index: 1;
}

.primaryButton:hover {
 border: 1px solid #FF4655;
 color: white;
 background-position: 40%;
}

.primaryButton:before {
 content: "";
 position: absolute;
 background-color: #0E1822;
 width: 0.2rem;
 height: 0.2rem;
 top: -1px;
 left: -1px;
 transition: background-color 0.15s ease-in-out;
}

.primaryButton:hover:before {
 background-color: white;
}

.primaryButton:hover:after {
 background-color: white;
}

.primaryButton:after {
 content: "";
 position: absolute;
 background-color: #FF4655;
 width: 0.3rem;
 height: 0.3rem;
 bottom: -1px;
 right: -1px;
 transition: background-color 0.15s ease-in-out;
}

.button-borders {
 position: relative;
 width: fit-content;
 height: fit-content;
}

.button-borders:before {
 content: "";
 position: absolute;
 width: calc(100% + 0.5em);
 height: 50%;
 left: -0.3em;
 top: -0.3em;
 border: 1px solid #0E1822;
 border-bottom: 0px;
    /* opacity: 0.3; */
}

.button-borders:after {
 content: "";
 position: absolute;
 width: calc(100% + 0.5em);
 height: 50%;
 left: -0.3em;
 bottom: -0.3em;
 border: 1px solid #0E1822;
 border-top: 0px;
    /* opacity: 0.3; */
 z-index: 0;
}

.shape {
 fill: #0E1822;
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

    .nextButton {
 position: relative;
 margin: auto;
 padding: 10px 18px;
 transition: all 0.2s ease;
 border: none;
 background: none;
}

.nextButton:before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 display: block;
 border-radius: 50px;
 background: #b1dae7;
 width: 45px;
 height: 45px;
 transition: all 0.3s ease;
}

.nextButton span {
 position: relative;
 font-size: 18px;
 font-weight: 700;
 letter-spacing: 0.05em;
 color: #234567;
}

.nextButton svg {
 position: relative;
 top: 0;
 margin-top: 8px;
 margin-left: 10px;
 fill: none;
 stroke-linecap: round;
 stroke-linejoin: round;
 stroke: #234567;
 stroke-width: 2;
 transform: translateX(-5px);
 transition: all 0.3s ease;
}

.nextButton:hover:before {
 width: 100%;
 background: #b1dae7;
}

.nextButton:hover svg {
 transform: translateX(0);
}

.nextButton:active {
 transform: scale(0.95);
}

/* BEFORE */

.beforeButton {
 position: relative;
 margin: auto;
 padding: 10px 18px;
 transition: all 0.2s ease;
 border: none;
 background: none;
}

.beforeButton:before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 display: block;
 border-radius: 50px;
 background: #b1dae7;
 width: 45px;
 height: 45px;
 transition: all 0.3s ease;
}

.beforeButton span {
 position: relative;
 font-size: 18px;
 font-weight: 700;
 letter-spacing: 0.05em;
 color: #234567;
}

.beforeButton svg {
 position: relative;
 top: 0;
 margin-top: 8px;
 margin-left: 10px;
 fill: none;
 stroke-linecap: round;
 stroke-linejoin: round;
 stroke: #234567;
 stroke-width: 2;
 transform: translateX(-5px);
 transition: all 0.3s ease;
}

.beforeButton:hover:before {
 width: 100%;
 background: #b1dae7;
}

.beforeButton:hover svg {
 transform: translateX(0);
}

.beforeButton:active {
 transform: scale(0.95);
}
.boxRecentAnimes {
  width: 100%;
  height: 254px;
  border-radius: 4px;
  background: #212121;
  display: flex;
}

.boxRecentAnimes p {
  height: 100%;
  flex: 1;
  overflow: hidden;
  /* cursor: pointer; */
  border-radius: 2px;
  transition: all .5s;
  background: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
}

.boxRecentAnimes p:hover {
  flex: 2;
}

.boxRecentAnimes p span {
  min-width: 14em;
  text-align: center;
  transition: all .5s;
  /* color: #ff568e; */
  letter-spacing: .1em;
}

.boxRecentAnimes p:hover span {
  transform: rotate(0);
}

    @media(min-width: 1024px){
        .navUl :first-child{
            justify-content: space-around !important;
        }
        .navUl{
            width: 100%!important;

        }

    }


    .textInputWrapper {
  position: relative;
  --accent-color: #FF4655;
}

.textInputWrapper:before {
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
}

.textInputWrapper:before,
.textInputWrapper:after {
  content: "";
  left: 0;
  right: 0;
  position: absolute;
  pointer-events: none;
  bottom: -1px;
  z-index: 4;
  width: 100%;
}

.textInputWrapper:focus-within:before {
  border-bottom: 1px solid var(--accent-color);
}

.textInputWrapper:before {
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
}

.textInputWrapper:focus-within:before {
  border-bottom: 1px solid var(--accent-color);
  transform: scaleX(1);
}

.textInputWrapper:focus-within:after {
  border-bottom: 2px solid var(--accent-color);
  transform: scaleX(1);
}

.textInputWrapper:after {
  content: "";
  transform: scaleX(0);
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  will-change: transform;
  border-bottom: 2px solid var(--accent-color);
  border-bottom-color: var(--accent-color);
}

.textInput::placeholder {
  transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  opacity: 1;
  user-select: none;
  color: rgba(255, 255, 255, 0.582);
}

.textInputWrapper .textInput {
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
  background-color: #252525;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 200ms;
  transition-property: background-color;
  color: #e8e8e8;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  border-left: none;
  border-bottom: none;
  border-right: none;
}

.spinnerLogin {
 font-size: 18px;
 font-weight: 600;
 font-family: monospace;
 letter-spacing: 1em;
 color: #f5f5f5;
 filter: drop-shadow(0 0 10px);
 display: flex;
 justify-content: center;
 align-items: center;
}

.spinnerLogin span {
 animation: loading6454 1.75s ease infinite;
}

.spinnerLogin span:nth-child(2) {
 animation-delay: 0.25s;
}

.spinnerLogin span:nth-child(3) {
 animation-delay: 0.5s;
}

.spinnerLogin span:nth-child(4) {
 animation-delay: 0.75s;
}

.spinnerLogin span:nth-child(5) {
 animation-delay: 1s;
}

.spinnerLogin span:nth-child(6) {
 animation-delay: 1.25s;
}

.spinnerLogin span:nth-child(7) {
 animation-delay: 1.5s;
}

@keyframes loading6454 {
 0%, 100% {
  transform: translateY(0);
 }

 50% {
  transform: translateY(-10px);
 }
}

.textInputWrapper .textInput:focus,
.textInputWrapper .textInput:active {
  outline: none;
}

.textInputWrapper:focus-within .textInput,
.textInputWrapper .textInput:focus,
.textInputWrapper .textInput:active {
  background-color: #353535;
}

.textInputWrapper:focus-within .textInput::placeholder {
  opacity: 0;
}


`;
