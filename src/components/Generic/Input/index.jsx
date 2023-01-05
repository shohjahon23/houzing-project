import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = forwardRef(({
  onChange,
  icon,
  value,
  defaultValue,
  width,
  height,
  placeholder,
}, ref) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container
      ref={ref}
        onChange={onChange}
        // type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        width={width}
        height={height}
      />
    </Wrapper>
  );
});

export default Input;
