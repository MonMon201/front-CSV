import styled from 'styled-components';
import { colors } from '../colors';
import Upload from '../assets/Upload.svg';

export const StyledInputFile = styled.input`
    border: none;
    outline: none;
    background: url(${Upload}) no-repeat right;
    font-size: 16px;
    &::placeholder {
        color: ${colors.white10};
    }
`;
