"use client"
import { AnySoaRecord } from "dns";
import Image from "next/image";
import YouTube from "react-youtube";
import styled, { keyframes } from "styled-components";

interface Props {
    $Background?: string | any,

}

export const Container = styled.div`
    height: 100vh;
    background-color: red;
    overflow-y: scroll;
    scroll-behavior: smooth;
    position: relative;
`;




export const WrapperDeathImage = styled.div`
    position: relative;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DeathImage = styled(Image)`
    position: absolute;
    z-index: 90;
`;

const slideIn = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const FoiceImageStyle = styled(Image)`
    position: absolute;
    width: 200px;
    height: 650px;
    right: -50px;
    z-index: 80;
    animation: ${slideIn} 2500ms ease infinite;

`;

export const WrapperImage = styled.div`
    position: absolute;
    width: 350px;
    background: #DBC5AE;
    right: 200px;
    top: 100px;
    transform: rotate(40deg);
`;

export const ContentImage = styled.div`
    position: relative;
    width: 100%;
`;

export const WidthPath = styled.div`
    position: absolute;
    right: -2px;
    width: 20px;
    height: 100%;
    background-color: #DBC5AE;

`;

export const ButtonItem = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-family: 'Adler';

    li {
        color: #000;
    }

`;

export const WrapperVideoYoutube = styled.div`
    margin-top: 100px;
    scale: 0.7;
    position: relative;
    cursor: pointer;

    div {
        height: 30%;
        width: 100%;
        background-color: transparent;
        position: absolute;
    }

    iframe {
        width: 2048px;
        height: 1080px;
        border: none;

        @media only screen and (min-width: 200px) and (max-width: 520px) {
            width: 480px;
            height: 380px;
        }
        @media only screen and (min-width: 521px) and (max-width: 700px) {
            width: 680px;
            height: 480px;
        }
        @media only screen and (min-width: 701px) and (max-width: 820px) {
            width: 780px;
            height: 580px;
        }
        @media only screen and (min-width: 821px) and (max-width: 1000px) {
            width: 1080px;
            height: 880px;
        }
        @media only screen and (min-width: 1001px) and (max-width: 1280px) {
            width: 1280px;
            height: 880px;
        }
        @media only screen and (min-width: 1281px) and (max-width: 1500px) {
            width: 1380px;
            height: 880px;
        }
        @media only screen and (min-width: 1501px) and (max-width: 1800px) {
            width: 1880px;
            height: 980px;
        }
    }
`;

export const WrapperVideoYoutubeCustom = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 9999;

`;

export const YoutubePlayer = styled(YouTube)`
    width: 100%;
    height: 100%;
    z-index: 9998;

`;

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

// Componente estilizado que aplica a animação


const RotateLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0px) rotate(0deg); 
  }
  100% {
    opacity: 1;
    transform: translateX(210px) rotate(720deg); 
  }
`;

// Animação da direita para a esquerda
const RotateRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0px) rotate(0deg); 
  }
  100% {
    opacity: 1;
    transform: translateX(-210px) rotate(-720deg); 
  }
`;


const AlbumContainerFade = keyframes`
  0% {
    opacity: 0;
  }
  120% {
    opacity: 1;
  }
`;

export const WrapperContentAlbum = styled.div`
    width: 1200px;
    position: relative;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 25px; 
    padding: 20px; 
    align-items: center; 
    justify-items: center; 
    justify-content: center; /* Centraliza o grid dentro do container */
`;

export const WrapperAlbum = styled.div`
    width: 100%;
    display: flex;
    padding: 20px 5px;
    box-shadow: 0 4px 8px    rgba(0, 0, 0, 0.1);
`;

export const WrapperAlbumImage = styled(Image)`
    width: 100px;
    height: 100px;
    border: 1px solid #fff;
    object-fit: cover;
    animation: ${shake} 0.05s ease-in-out infinite;
`;


export const AlbumContainer = styled.div`
    height: 180px;
    padding: 10px 20px;
    
    color: #fff;
    animation: ${AlbumContainerFade} 2s ease-in-out forwards;
    cursor: pointer;


    h1 {
        font-size: .8rem;
    }

    div {
        margin-top: 10px;
        font-size: .9rem;
        line-height: 1.4rem;
        
    }
`;


export const TheRevContent = styled.div`
    width: 100%;
    height: 100%;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const WrapperTheRevImage = styled(Image)`
    width: 600px;
    height: 600px;
    position: absolute;
    left: 0px;
    top: 20px;
    animation: ${shake} 0.05s ease-in-out infinite;
`;


export const TheRevHistory = styled.div`
    width: 800px;
    font-size: 1.2rem;
    line-height: 2rem;
    margin-top: 20px;
`;


export const AboutMe = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const WrapperProfile = styled.div`
    width: 350px;
    height: 350px;
    border-radius: 100%;
    left: 50px;
    top: 200px;
    overflow: hidden;
    border: 5px solid #fff;
`

export const ProfileImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    

`;

export const AboutMeText = styled.div`
    width: 800px;
    font-size: 1.2rem;
    line-height: 2rem;
    margin-top: 40px;
    color: #fff;
`;

export const Section = styled.section<Props>`
    font-family: 'Adler';
    padding: 10px 20px;
    scroll-snap-align: start;
    background-color: ${props => props.$Background ? props.$Background : 'red'};
    position: relative;
    overflow: hidden;

    & ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        li {
            font-size: 1.5rem;
            margin-top: 10px;
            cursor: pointer;
        }
    }

    @media only screen and (min-width: 200px) and (max-width: 520px) {
        ul {
            align-items: start;
            li {
                font-size: 1rem;
            }
        }
        

   

        ${AlbumContainer} {
            display: none;
            width: 300px;
        }
        
        ${WrapperDeathImage} {
            display: none;
        }
        ${WrapperImage} {
            width: 120px;
            right: 0;
            top: 20px;
        }

        ${WrapperTheRevImage} {
            display: none;
        }

        ${TheRevHistory} {
            font-size: 1rem;
            width: 300px;
            margin-top: 40px;
            margin-bottom: 40px;
        }

        ${WrapperProfile} {
            width: 120px;
            height: 120px;
        }

        ${AboutMeText} {
            font-size: .9rem;
            width: 250px;
        }

        ${WrapperContentAlbum} {
            justify-content: center;
            align-items: center;
            overflow: scroll;
            min-height: calc(100% - 100px);
        }

        ${WrapperAlbum} {
            justify-content: center;
            align-items: center;
        }

        ${WrapperAlbumImage} {
            width: 200px;
            height: 200px;
        }


    }

    @media only screen and (min-width: 521px) and (max-width: 720px) {
        ul {
            align-items: start;
            li {
                font-size: 1.2rem;
            }
        }
        
        
        ${WrapperDeathImage} {
            display: none;
        }
        ${WrapperImage} {
            width: 220px;
            right: 0;
            top: 20px;
        }

        ${WrapperTheRevImage} {
            display: none;
        }

        ${TheRevHistory} {
            font-size: 1rem;
            width: 500px;
            margin-top: 40px;
            margin-bottom: 40px;
        }

        ${WrapperProfile} {
            width: 180px;
            height: 180px;
        }

        ${AboutMeText} {
            font-size: .9rem;
            width: 450px;
        }
        ${WrapperContentAlbum} {
            justify-content: center;
            align-items: center;
            overflow: scroll;
            min-height: calc(100% - 100px);
        }

        ${WrapperAlbum} {
            justify-content: center;
            align-items: center;
        }

        ${WrapperAlbumImage} {
            width: 200px;
            height: 200px;
        }


    }
    @media only screen and (min-width: 721px) and (max-width: 1200px) {
        ul {
            align-items: start;
            li {
                font-size: 1.4rem;
            }
        }
        
        
        ${WrapperDeathImage} {
            display: none;
        }
        ${WrapperImage} {
            width: 220px;
            right: 0;
            top: 20px;
        }

        ${WrapperTheRevImage} {
            display: none;
        }

        ${TheRevHistory} {
            font-size: 1rem;
            width: 500px;
            margin-top: 40px;
            margin-bottom: 40px;
        }

        ${WrapperProfile} {
            width: 220px;
            height: 220px;
        }

        ${AboutMeText} {
            font-size: 1rem;
            width: 650px;
        }

        ${WrapperContentAlbum} {
            justify-content: center;
            align-items: center;
            overflow: scroll;
            min-height: calc(100% - 100px);
        }

        ${WrapperAlbum} {
            justify-content: center;
            align-items: center;
        }

        ${WrapperAlbumImage} {
            width: 200px;
            height: 200px;
        }

        ${AlbumContainer} {
            width: 400px;
        }

    }
    @media only screen and (min-width: 1201px) and (max-width: 1400px) {
        ul {
            align-items: start;
            li {
                font-size: 1.4rem;
            }
        }

        ${WrapperTheRevImage} {
            width: 350px;
            height: 350px;
        }

        ${TheRevHistory} {
            font-size: 1rem;
            width: 500px;
            margin-top: 40px;
            margin-bottom: 40px;
        }

        ${WrapperProfile} {
            width: 220px;
            height: 220px;
        }

        ${AboutMeText} {
            font-size: 1rem;
            width: 650px;
        }

        ${WrapperContentAlbum} {
            justify-content: center;
            align-items: center;
            overflow: scroll;
            min-height: calc(100% - 100px);
        }

        ${WrapperAlbum} {
            justify-content: center;
            align-items: center;
        }

        ${WrapperAlbumImage} {
            width: 200px;
            height: 200px;
        }
        
        ${AlbumContainer} {
            width: 600px;
        }


    }

    @media only screen and (min-width: 1401px) and (max-width: 1800px) {
        ul {
            align-items: start;
            li {
                font-size: 1.4rem;
            }
        }

        ${WrapperTheRevImage} {
            width: 350px;
            height: 350px;
        }

        ${TheRevHistory} {
            font-size: 1.2rem;
            width: 800px;
            margin-top: 40px;
            margin-bottom: 40px;
        }

        ${WrapperContentAlbum} {
            justify-content: center;
            align-items: center;
            overflow: scroll;
            min-height: calc(100% - 100px);
        }

        ${WrapperAlbum} {
            justify-content: center;
            align-items: center;
        }

        ${WrapperAlbumImage} {
            width: 200px;
            height: 200px;
        }
        
        ${AlbumContainer} {
            width: 800px;
        }


    }

    @media only screen and (min-width: 1802px) and (max-width: 2000px) {
        ul {
            align-items: start;
            li {
                font-size: 1.4rem;
            }
        }

        ${WrapperTheRevImage} {
            width: 300px;
            height: 300px;
        }

        ${TheRevHistory} {
            font-size: 1.2rem;
            width: 800px;
            margin-top: 40px;
            margin-bottom: 40px;
        }

        ${WrapperContentAlbum} {
            justify-content: center;
            align-items: center;
            overflow: scroll;
            min-height: calc(100% - 100px);
        }

        ${WrapperAlbum} {
            justify-content: center;
            align-items: center;
        }

        ${WrapperAlbumImage} {
            width: 200px;
            height: 200px;
        }
        
        ${AlbumContainer} {
            width: 800px;
        }



    }

    @media only screen and (min-width: 2001px) and (max-width: 4000px) {
        ul {
            align-items: start;
            li {
                font-size: 1.4rem;
            }
        }

       
        ${TheRevHistory} {
            font-size: 1.2rem;
            width: 800px;
            margin-top: 40px;
            margin-bottom: 40px;
        }

        ${WrapperContentAlbum} {
            justify-content: center;
            align-items: center;
            overflow: scroll;
            min-height: calc(100% - 100px);
        }

        ${WrapperAlbum} {
            justify-content: center;
            align-items: center;
        }

        ${WrapperTheRevImage} {
            width: 450px;
            height: 450px;
        }

        
        ${AlbumContainer} {
            width: 500px;
        }


    }
    
`;