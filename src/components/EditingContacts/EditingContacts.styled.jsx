import styled from '@emotion/styled';

export const EditFormStyle = styled.form`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid grey;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 1px rgba(211, 211, 211, 0.5);
    margin: 0 auto;
`;

export const EditFormLabel = styled.label`
    width: 200px;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 12px};
    text-transform: capitalize;
    color: black; 
`;

export const EditFormInput = styled.input`
    display: block;
    width: 100%;
    margin-top: 12px;
    outline: none;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 5px 10px;
    box-shadow: 0 0 2px 0.2px #d3d3d3;
    font-weight: 400;
    font-size: 12px;
`;

export const EditFormBtnList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
`;

export const EditFormButton = styled.button`
    width: 70px;
    display: inline-block;
    padding: 8px;
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 12px;
    background-color: blue;
    cursor: pointer;
    border: 1px solid grey;
    border-radius: 50px;
   
    &.hover {
        color: neonBlue;
    }
`;