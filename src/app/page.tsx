"use client"

import Image from "next/image";
import styles from "./page.module.css";

import DeathBatImage from '../assets/deathbat.gif'
import FoiceImage from '../assets/foice.png'
import LibadImage from '../assets/libad-image.png'


import {
  AboutMe,
  AboutMeText,
  AlbumContainer,
  ButtonItem,
  Container,
  ContentImage,
  DeathImage,
  FoiceImageStyle,
  GridContainer,
  ProfileImage,
  Section,
  TheRevContent,
  TheRevHistory,
  WidthPath,
  WrapperAlbumImage,
  WrapperAlbum,
  WrapperContentAlbum,
  WrapperDeathImage,
  WrapperImage,
  WrapperProfile,
  WrapperTheRevImage,
  WrapperVideoYoutube,
  WrapperVideoYoutubeCustom,
  YoutubePlayer

} from './styles'
import { useContext, useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { MainContext } from "@/context/context";



import TheRevPhoto from '../assets/rev.jpeg'
import Profile from '../assets/profile.jpg'


export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  const [stateClick, setStateClick] = useState<boolean>(false);
  const playerRef = useRef<any>(null)
  const sectionRef = useRef<any>(null);
  const [reload, setReload] = useState(false); // Estado para forçar o reload

  const videoId = '1-2all8OrpeJJ3lpt20TUTjkhrbj8s7dX'; // ID do vídeo

  const [setList, setSetList] = useState<any>([
    {
      name: 'Game over',
      time: 0
    },
    {
      name: 'Afterlife',
      time: 225
    },
    {
      name: 'Mattel',
      time: 593
    },
    {
      name: 'Hail to the king',
      time: 965
    },
    {
      name: 'The stage',
      time: 1304
    },
    {
      name: 'Buried alive',
      time: 1836
    },
    {
      name: 'Gunslinger',
      time: 2420
    },
    {
      name: 'Bat country',
      time: 2702
    },
    {
      name: 'So far away',
      time: 3177
    },
    {
      name: 'Nobody',
      time: 3540
    },
    {
      name: 'Nightmare',
      time: 3976
    },
    {
      name: 'Uhnholy confessions',
      time: 4354
    },
    {
      name: 'Cosmic',
      time: 4877
    },
    {
      name: 'A little piece of heaven',
      time: 5348
    }
  ])


  const onPlayerReadyYoutube: any = () => {
    const player: any = playerRef.current;
  
    if (player.getPlayerState() === 1) {
      player.pauseVideo();  // Pausa o vídeo se estiver em reprodução
    } else {
      player.playVideo();  // Inicia a reprodução se não estiver tocando
    }
  };


  const opts = {
    playerVars: {
      autoplay: 1,        // Começa a tocar automaticamente
      controls: 0,
      disablekb: 1,       // Desativa o teclado
      modestbranding: 0,
      rel: 0,
      showinfo: 0,
      fs: 0,
      iv_load_policy: 3,
    },
  };

  const MainContextProvider = useContext(MainContext);

  if (!MainContextProvider) {
    throw new Error('MainContext deve ser usado dentro de um MainProvider');
  }

  const {
    setShowNavbar,
    setTypeLanguage,
    typeLanguage,
    verifyTypeLanguage
  } = MainContextProvider;

  const handleScroll = (event?: any) => {
    setScrollTop(event.currentTarget.scrollTop);
    if (scrollTop > 560) {
      setShowNavbar(false)
    } else {
      setShowNavbar(true)
    }
  };



  const onPlayerReady = (event: any) => {
      playerRef.current = event.target;  // Guarda o player na referência
      playerRef.current.seekTo(428, true);
};

  // Função para ir para um tempo específico no vídeo (em segundos)
  const goToTime = (seconds: any) => {
    const videoId = '19XOhi9iHw4PUDjkx7Ao_CfGtTXL33AmC'; // ID do seu vídeo
    const timeParam = `t=${seconds}`;
    playerRef.current.src = `https://drive.google.com/file/d/19XOhi9iHw4PUDjkx7Ao_CfGtTXL33AmC/preview?${timeParam}`;
    playerRef.current.allow = 'autoplay'


    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };




  return (
    <>
      <Navbar />
      <Container onScroll={handleScroll}>
        <Section ref={sectionRef} id="live" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} $Background={'#000'}>
          <WrapperVideoYoutube>
          <div></div>
          <iframe
              ref={playerRef}
              src="https://drive.google.com/file/d/19XOhi9iHw4PUDjkx7Ao_CfGtTXL33AmC/preview"
              width="2560"
              height="1080"
              allow="autoplay"
              title="Video"
            ></iframe>
            
          </WrapperVideoYoutube>
        </Section>
        <Section id="setlist" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} $Background={'#DBC5AE'}>
          <ul>
            {setList.map((set: any, index: number) => {
              return (
                <ButtonItem key={index} onClick={() => goToTime(set?.time)}>
                  <li>{index + 1}.{' '}{set?.name}</li>
                </ButtonItem>
              )
            })}
          </ul>
          <WrapperDeathImage>
            <DeathImage src={LibadImage} alt='deathbat' />
            <FoiceImageStyle src={FoiceImage} alt='deathbat' />
          </WrapperDeathImage>
          <WrapperImage>
            <ContentImage>
              <WidthPath></WidthPath>
              <Image style={{ width: '100%', height: '100%' }} src={DeathBatImage} alt='deathbat' />
            </ContentImage>
          </WrapperImage>
        </Section>
        <Section style={{ display: 'flex', justifyContent: 'center' }} id="albums" $Background={'#000'}>
          
          <WrapperContentAlbum>
            <GridContainer>
            {typeLanguage?.albums?.map((album: any, index: number) => {
              return (
                <WrapperAlbum key={index} style={{ top: album?.top }}>
                  <AlbumContainer>
                    <h1>{album?.title}</h1>
                    <div>{album?.about}</div>
                  </AlbumContainer>
                  <WrapperAlbumImage src={album?.image} alt='liab' />
                </WrapperAlbum>
              )
            })}
            </GridContainer>
          </WrapperContentAlbum>
        </Section>
        <Section style={{ display: 'flex', justifyContent: 'center' }} id="forever" $Background={'#fff'}>
          <TheRevContent>
            <WrapperTheRevImage src={TheRevPhoto} alt={'therev'} />
            <TheRevHistory dangerouslySetInnerHTML={{ __html: typeLanguage?.therev }} />
          </TheRevContent>
        </Section>
        <Section style={{ display: 'flex', justifyContent: 'center' }} id="sobre" $Background={'#302f2f'}>
          <AboutMe>
            <WrapperProfile>
              <ProfileImage src={Profile} alt={'me'} />
            </WrapperProfile>
            <AboutMeText dangerouslySetInnerHTML={{ __html: typeLanguage?.about }} />
          </AboutMe>
        </Section>
      </Container>
    </>
  );
}
