'use client'


import { useContext, useEffect, useState } from "react";
import { ArrowImage, ButtonItem, CountryImage, Lista, Logo, NavbarContent, SectionItem, WrapperCountry, WrapperImage, WrapperLabel, WrapperLabelList, WrapperSelect } from "./styles"
import { MainContext } from "@/context/context";

import RockInRioLogo from '@/assets/rockinrio-logo.png'

// Flags

import BrazilFlag from '../../assets/flags/brazil.png'
import UsaFlag from '../../assets/flags/usa.png'
import SpainFlag from '../../assets/flags/spain.png'
import IndonesianFlag from '../../assets/flags/indo.png'

import ArrowFlagImage from '../../assets/arrow.png'



const Navbar = () => {
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const [showList, setShowList] = useState<boolean>(false);
    const [listNavbar, setListNavbar] = useState<any[]>([])
    const [language, setLanguage] = useState<any>(
        {
            id:1,
            name: 'English',
            flag: UsaFlag
        }
    );
    const [lastScrollY, setLastScrollY] = useState(0);

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

    const flags = [
        {
            id:1,
            name: 'English',
            flag: UsaFlag
        },
        {
          id:2,
          name: 'Portuguese',
          flag: BrazilFlag
        },
        {
            id:3,
            name: 'Spanish',
            flag: SpainFlag
        },
        {
            id:4,
            name: 'Indonesian',
            flag: IndonesianFlag
        }
      ]

      useEffect(() => {
        setLanguage({
            id:1,
            name: 'English',
            flag: UsaFlag
        })
        verifyTypeLanguage(1)
        setShowList(true)
      }, [])
    
  
    return (
            <NavbarContent $isHidden={showNavbar}>
                <WrapperImage>
                    <Logo src={RockInRioLogo} alt='rock' />
                </WrapperImage>
                <Lista>
                    <>
                    { typeLanguage && typeLanguage.list.map((n: any, index: number) => {
                        return (
                            <ButtonItem key={index} href={n.link}>
                                <SectionItem>{n.name}</SectionItem>
                            </ButtonItem>
                        )
                    })}
                    <WrapperCountry>
                        <CountryImage src={language?.flag} layout="fill"  alt='country'/>
                    </WrapperCountry>
                    <WrapperSelect>
                        <WrapperLabel onClick={() => setShowList(!showList)}>
                            <div>{language.name}</div>
                            <ArrowImage $isHidden={showList} src={ArrowFlagImage} alt='arrow' />
                        </WrapperLabel>
                        <WrapperLabelList $isHidden={showList}>
                            {flags && flags.map((flag: any, index: number) => {
                                return (
                                    <ButtonItem key={index} href='' onClick={() => {
                                        setLanguage(flag)
                                        setShowList(true)
                                        verifyTypeLanguage(flag?.id)
                                        }}>
                                        <li>{flag?.name}</li>
                                    </ButtonItem>
                                )
                            })}
                        </WrapperLabelList>
                    </WrapperSelect>
                    </>
                </Lista>
            </NavbarContent>
        )
}


export default Navbar