import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Dot = styled(motion.div)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
