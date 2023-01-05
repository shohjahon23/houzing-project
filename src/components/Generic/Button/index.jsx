import React from "react";
import { Container } from "./style";

const Button = ({ children, onClick, type, width, height, fontSize }) => {
  return (
    <Container onClick={onClick} type={type} width={width} height={height} fontSize={fontSize}>
      {children || 'Generic Button'}
    </Container>
  );
};

export default Button;
