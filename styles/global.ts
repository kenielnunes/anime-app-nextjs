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
 background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 531.28 200'%3E%3Cdefs%3E%3Cstyle%3E .shape %7B fill: %23FF4655 /* fill: %230E1822; */ %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpolygon class='shape' points='415.81 200 0 200 115.47 0 531.28 0 415.81 200' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
 background-color: #0E1822;
 background-size: 200%;
 background-position: 200%;
 background-repeat: no-repeat;
 transition: 0.3s ease-in-out;
 transition-property: background-position, border, color;
 position: relative;
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

`;
