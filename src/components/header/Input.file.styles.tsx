import styled from 'styled-components';

export const Wrap = styled.div`
    width: 100%;
    position: relative;
    margin: 15px 0;
    text-align: center;
`;

export const StyledInputFile = styled.input`
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const StyledIcon = styled.img`
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #fff;
`;

export const StyledButtonText = styled.div`
    line-height: 1;
    margin-top: 1px;
`;

export const StyledButtonContainer = styled.div`
    width: 100%;
    max-width: 290px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 3px;
    cursor: pointer;
    margin: 0 auto;
`;
