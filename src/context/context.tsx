'use client'

import { Languages } from "@/utils/translate";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";


export interface MainContextProps {
    showNavbar: boolean;
    setShowNavbar: Dispatch<SetStateAction<boolean>>;
    showSeconds: number;
    setShowSeconds: Dispatch<SetStateAction<number>>;
    typeLanguage: any;
    setTypeLanguage: Dispatch<SetStateAction<any>>;
    typeTranslate: any;
    setTypeTranslate: Dispatch<SetStateAction<any>>;
    verifyTypeLanguage: (type: number) => void;
  }

export const MainContext = createContext<MainContextProps | undefined>(undefined);

export const MainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true)
  const [showSeconds, setShowSeconds] = useState<number>(0)
  const [typeLanguage, setTypeLanguage] = useState<any>('')
  const [typeTranslate, setTypeTranslate] = useState<any>('')



  const verifyTypeLanguage = (type: number) => {
    Languages.filter((language: any) => {
        if(language?.id === type) {
          setTypeLanguage(language)
        }
    })
  }


  return (
    <MainContext.Provider value={{ 
      showNavbar, 
      setShowNavbar, 
      showSeconds, 
      setShowSeconds, 
      typeLanguage, 
      setTypeLanguage, 
      typeTranslate, 
      setTypeTranslate, 
      verifyTypeLanguage
      }}>
      {children}
    </MainContext.Provider>
  );
};