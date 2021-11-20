import styled from 'styled-components';
import Link from 'next/link';

export const StyledLink = styled(Link)``;
export const MiddleLink = styled.a<{ isTarget: boolean }>`
  ${({ isTarget }) =>
    isTarget &&
    `
    position: relative;
    &::after {
        content: '🔗';
        position: absolute;
        top: 15px;
        right: 20px;
        width: 20px;
        height: 20px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `}
`;
