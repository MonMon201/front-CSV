import styled from 'styled-components';
import { colors } from '../../colors';

export const TD = styled.td<{ correct?: boolean }>`
    ${({ correct }) => (correct ? null : `background: ${'red'};`)}
    height: 40px;
    text-align: center;
    vertical-align: middle;
    min-width: 70px;
    padding: 8px 5px;
    position: relative;
    border-top: solid 1px ${colors.grey30};
    min-width: 80px;
    & button + button {
        margin-left: 10px;
    }
`;

export const TH = styled.th`
    border-bottom: solid 1px ${colors.grey60};
    padding: 0 5px;
    height: 40px;
    font-weight: 500;
    color: ${colors.grey70};
`;

export const TR = styled.tr`
    &:last-child > ${TD} {
        border-bottom: solid 1px ${colors.black10};
    }
`;

export const Table = styled.table`
    margin: 0;
    color: ${colors.grey80};
    min-width: 640px;
    border-collapse: collapse;
    border-spacing: 0;
    border: none;
    margin-bottom: 50px;
`;

export const Section = styled.section``;
