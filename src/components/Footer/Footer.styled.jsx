import styled from '@emotion/styled';


export const FooterBox = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color:  white;
    border-top: 1px solid #ececec;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px -4px 5px 0px rgba(0, 0, 0, 0.14),
        0px -1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
`;

export const FooterItem = styled.span`
    font-weight: 400;
    font-size: 12px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    padding: 12px 0;
    color: grey;
    display: flex;
    justify-content: center;
    align-items: center;

    }
`;
