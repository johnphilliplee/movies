// src/components/ui/IconButton.tsx
import styled from 'styled-components';

interface IconButtonProps {
  icon: string;
}

const IconButton = styled.button<IconButtonProps>`
  width: 36px;
  height: 36px;
  background: url(${props => props.icon}) no-repeat center;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

export default IconButton;