import styled from 'styled-components';
import { Paragraph } from '../components/atoms/Paragraph';
import { Title } from '../components/atoms/Title';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const ErrorTitle = styled(Title)`
  font-size: clamp(30px, 8vw, 80px);
`;
export const ErrorParagraph = styled(Paragraph)`
  font-size: clamp(20px, 3vw, 30px);
`;
export const RedirectingInfo = styled(Paragraph)`
  font-size: clamp(16px, 3vw, 20px);
  opacity: 0.7;
  font-weight: bold;
  letter-spacing: 1px;
`;
