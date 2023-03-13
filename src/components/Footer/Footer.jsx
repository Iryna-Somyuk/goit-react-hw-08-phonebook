import {
    FooterBox,
    FooterContainer,
    FooterItem,
} from './Footer.styled';
import { AiOutlineCopyrightCircle } from "react-icons/ai";
export const Footer = () => {
    return (
        <FooterBox>
            <FooterContainer>
                <FooterItem>
                <AiOutlineCopyrightCircle size={15}/> 2023 All rights reserved. Developed by I. Somyuk | GoIT
                </FooterItem>
            </FooterContainer>
        </FooterBox>
    );
};

