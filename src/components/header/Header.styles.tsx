import styled from 'styled-components';
import { colors } from '../../colors';
import { itemContainer } from '../../common/ItemContainer';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 130px;
    background: ${colors.black10};
    color: ${colors.white10};
`;

export const StyledBar = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
    margin-top: 15px;
    height: 100px;
`;

export const StyledHeaderItemContainer = styled(itemContainer)`
    font-size: 30px;
    & > a {
        display: flex;
        align-items: center;
    }
`;

export const StyledUpload = styled(StyledHeaderItemContainer)`
    position: relative;
`;

export const StyledInputFile = styled.input`
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const StyledText = styled.div`
    margin-left: 10px;
`;

export const StyledHistory = styled(itemContainer)`
    font-size: 24px;
`;

export const StyledAuth = styled(itemContainer)`
    font-size: 24px;
    & > a {
        display: flex;
        align-items: center;
    }
`;

export const StyledSignup = styled(StyledText)`
    display: flex;
    width: 120px;
    height: 35px;
    border: 1px solid ${colors.blue10};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;
