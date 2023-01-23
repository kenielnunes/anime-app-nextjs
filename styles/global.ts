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

.buttonPrimary {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: relative;
  padding: 8px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
  transition: all .15s ease;
}

.buttonPrimary::before,
.buttonPrimary::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  height: calc(50% - 5px);
  border: 1px solid #7D8082;
  transition: all .15s ease;
}

.buttonPrimary::before {
  top: 0;
  border-bottom-width: 0;
}

.buttonPrimary::after {
  bottom: 0;
  border-top-width: 0;
}

.buttonPrimary:active,
.buttonPrimary:focus {
  outline: none;
}

.buttonPrimary:active::before,
.buttonPrimary:active::after {
  right: 3px;
  left: 3px;
}

.buttonPrimary:active::before {
  top: 3px;
}

.buttonPrimary:active::after {
  bottom: 3px;
}

.buttonPrimary_lg {
  position: relative;
  display: block;
  padding: 10px 20px;
  color: #fff;
  background-color: #0f1923;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px transparent;
}

.buttonPrimary_lg::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background-color: #0f1923;
}

.buttonPrimary_lg::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4px;
  height: 4px;
  background-color: #0f1923;
  transition: all .2s ease;
}

.buttonPrimary_sl {
  display: block;
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -8px;
  width: 0;
  background-color: #ff4655;
  transform: skew(-15deg);
  transition: all .2s ease;
}

.buttonPrimary_text {
  position: relative;
}

.buttonPrimary:hover {
  color: #0f1923;
}

.buttonPrimary:hover .buttonPrimary_sl {
  width: calc(100% + 15px);
}

.buttonPrimary:hover .buttonPrimary_lg::after {
  background-color: #fff;
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

`;
