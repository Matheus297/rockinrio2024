import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";


interface Props {
    $isHidden?: boolean | any,
    
}

export const NavbarContent = styled.div<Props>`
    width: 100%;
    height: 120px;
    background-color: #000;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    font-family: 'adler';
    padding: 0 20px;
    top: 0px;
    position: fixed;
    z-index: 9999;
    display: ${props => props.$isHidden ? 'flex' : 'none'};
    border-bottom-style: solid;
    border-bottom-color: rgba(255, 255, 255, 0.09);
    border-bottom-width: 1px;
`;


export const WrapperImage = styled.div`
    width: 140px;
`;

export const Logo = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: contain;

`;


export const Lista = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;

`;

export const ButtonItem = styled(Link)`

`;

export const SectionItem = styled.li`
    color: white;
    margin-left: 20px;
`;

export const WrapperSelect = styled.div`
    width: 200px;
    height: 40px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const WrapperCountry = styled.div`
    height: 40px;
    width: 40px;
    background-color: red;
    position: relative;  // Necessário para layout="fill"
    display: flex;
    border-radius: 50%;
    margin-left: 40px;
    overflow: hidden;  // Para garantir que a imagem fique dentro do círculo
`;

export const CountryImage = styled(Image)`
    object-fit: cover;  // Para que a imagem se ajuste ao círculo sem distorcer
    border-radius: 50%; // Garante que a imagem mantenha o formato circular
`;

export const ArrowImage = styled(Image)<Props>`
    width: 12px;
    height: 24px;
    transform: ${props => props.$isHidden ? 'rotate(90deg)' : 'rotate(270deg)'};
    margin-left: 10px;
`;

export const WrapperLabel = styled.span`
    font-size: .9rem;
    color: #fff;
    display: flex;
    align-items: center;
`;

export const WrapperLabelList = styled.ul<Props>`
    position: absolute;
    padding: 5px;
    bottom: -100px;
    width: 150px;
    height: 140px;
    background-color: #000;
    list-style: none;
    cursor: pointer;
    color: #fff;
    font-weight: normal;
    display: ${props => props.$isHidden ? 'none' : 'block'};
    

    li {
        margin-top: 10px;

        &:hover {
        font-weight: bold;
    }
    }
`;

