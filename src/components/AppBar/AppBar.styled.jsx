import styled from '@emotion/styled';

export const Header = styled.header`
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    // margin-bottom: 16px;
    // border-bottom: 1px solid #2a363b;

    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color:  white;
    border-top: 1px solid #ececec;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px -4px 5px 0px rgba(0, 0, 0, 0.14),
        0px -1px 10px 0px rgba(0, 0, 0, 0.12);
     


  `;
  export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  `