// src/components/ui/TextButton.tsx
import styled from 'styled-components';
import { colors } from '../../styles/designTokens';

const TextButton = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: ${colors.hoverText};
  }
`;

export default TextButton;