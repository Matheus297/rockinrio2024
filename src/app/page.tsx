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
  const playerRef = useRef(null)
  const sectionRef = useRef<any>(null);

  const [setList, setSetList] = useState<any>([
    {
      name: 'Game over',
      time: 428
    },
    {
      name: 'Afterlife',
      time: 662
    },
    {
      name: 'Mattel',
      time: 1032
    },
    {
      name: 'Hail to the king',
      time: 1362
    },
    {
      name: 'The stage',
      time: 1750
    },
    {
      name: 'Buried alive',
      time: 2281
    },
    {
      name: 'Gunslinger',
      time: 2842
    },
    {
      name: 'Bat country',
      time: 3148
    },
    {
      name: 'So far away',
      time: 3620
    },
    {
      name: 'Nobody',
      time: 3978
    },
    {
      name: 'Nightmare',
      time: 4417
    },
    {
      name: 'Uhnholy confessions',
      time: 4804
    },
    {
      name: 'Cosmic',
      time: 5328
    },
    {
      name: 'A little piece of heaven',
      time: 5785
    }
  ])


  const onPlayerReadyYoutube: any = () => {
    const player: any = playerRef?.current;
  
    if (player && typeof player.getPlayerState === 'function') {
      // Verifica se o vídeo está em reprodução (estado 1 - playing)
      if (player.getPlayerState() === 1) {
        player.pauseVideo();  // Pausa o vídeo se estiver em reprodução
      } else {
        player.playVideo();  // Inicia a reprodução se não estiver tocando
      }
    } else {
      console.error("Player is not ready or getPlayerState is not a function");
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
      cc_load_policy: 1
    },
  };

  const MainContextProvider = useContext(MainContext);

  if (!MainContextProvider) {
    throw new Error('MainContext deve ser usado dentro de um MainProvider');
  }

  const {
    setShowNavbar,
    showNavbar,
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
    console.log('TEMPO', event);
    
    if (playerRef?.current) {
        playerRef.current = event.target;  // Guarda o player na referência
        
        // Verifica se o método seekTo existe e executa se possível
        if (typeof playerRef.current.seekTo === 'function') {
            playerRef.current.seekTo(428, true);
        } else {
            console.error("seekTo is not a function on the player");
        }
    } else {
        console.error("playerRef is not initialized");
    }
};


  // Função para ir para um tempo específico no vídeo (em segundos)
  const goToTime = (seconds?: any) => {
    if (playerRef.current) {
      const playerState = playerRef.current.getPlayerState();
      playerRef.current?.seekTo(seconds, true);  // Segundo argumento: true = tempo exato
      if (sectionRef) {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };






  return (
    <>
      <Navbar />
      <Container onScroll={handleScroll}>
        <Section ref={sectionRef} id="live" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} $Background={'#000'}>
          <WrapperVideoYoutube onClick={() => onPlayerReadyYoutube()}>
            <YoutubePlayer videoId="llODqTqpoOU" opts={opts} onReady={onPlayerReady} />
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
