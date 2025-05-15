import React from "react";
import styled, { keyframes, css } from "styled-components";
import ButtonSvg from "../assets/svg/ButtonSvg";   
// Define the keyframe for the shine effect
const shine = keyframes`
  0% {
    transform: translateX(100%) rotate(45deg);
    opacity: 0;
  }
  50% {
    transform: translateX(-50%) rotate(45deg);
    opacity: 0.3;
  }
  100% {
    transform: translateX(-100%) rotate(45deg);
    opacity: 0;
  }
`;
// Create the styled button component with the shiny effect
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${(props) => props.px || "0 28px"};
  height: 3rem;
  background-color: #38bdf8; /* Tailwind sky-500 */
  color: ${(props) =>
    props.white ? "#fff" : "#000"}; /* Adjust color based on prop */
  border-radius: 0.75rem; /* Rounded-lg */
  overflow: hidden;
  transition: color 0.3s;
  box-shadow: ${(props) =>
    props.shiny ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"};
  &:hover {
    color: #000;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10rem;
    height: 30%;
    background: white;
    opacity: 0.1;
    transform: translateX(100%) rotate(45deg);
    ${(props) =>
      props.shiny &&
      css`
        animation: ${shine} 2s infinite;
      `}
  }
`;

// The main Button component
const Button = ({
  className,
  renderlink,
  href,
  onClick,
  children,
  px,
  shiny,
  white,
}) => {
  return renderlink ? (
    <StyledLink href={href} shiny={shiny} white={white} className={className}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </StyledLink>
  ) : (
    <StyledButton
      onClick={onClick}
      shiny={shiny}
      white={white}
      px={px}
      className={className}
    >
      <span>{children}</span>
      {ButtonSvg(white)}
    </StyledButton>
  );
};

// Optional: StyledLink if using an anchor instead of a button
const StyledLink = styled.a`
  /* Similar styles as StyledButton, adjusted for link */
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  border-bottom: 1px solid black;
  transition: color 0.3s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 6rem;
    height: 100%;
    background: white;
    opacity: 0.1;
    transform: translateX(100%) rotate(45deg);
    ${(props) =>
      props.shiny &&
      css`
        animation: ${shine} 2s infinite;
      `}
  }

  &:hover {
    color: black;
  }
`;

export default Button;
