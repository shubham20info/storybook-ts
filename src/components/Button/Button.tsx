/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React from 'react';

export interface ButtonProps {
  backgroundColor?: string,
  label?: string,
  color?: string,
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

const buttonStyle = (data : {backgroundColor: string, color: string, size: string})=>{
  let padding = '';
  let fontSize = '';

  if(data.size === 'large'){
    padding = '0.8rem 1.5rem';
    fontSize = '1.4rem';
  }
  else if(data.size === 'small'){
    padding = '0.3rem .7rem';
    fontSize = '.8rem';
  }
  else{ // medium
    padding = '.5rem 1rem';
    fontSize = '1rem';
  }
  return css`
   background-color: ${data.backgroundColor};
   cursor: pointer;
   border-radius:9px;
   color: ${data.color};
   padding: ${padding};
   font-size: ${fontSize};
   border: 0;
  `
};

export const Button: React.FC<ButtonProps> = ({backgroundColor='white', label='Button', color='black', size='medium'})=>{
  return (
    <button css={buttonStyle({backgroundColor, color, size})}>
    {label} </button>
  )
}
