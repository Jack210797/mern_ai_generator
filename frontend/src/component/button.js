import { CircularProgress } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  border-radius: 10px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: ${(props) => (props.$isDisabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: min-content;
  padding: 10px 24px;
  background: ${({ type, theme }) => (type === 'secondary' ? theme.secondary : theme.primary)};
  opacity: ${({ $isDisabled, $isLoading }) => ($isDisabled || $isLoading ? ($isLoading ? 0.8 : 0.4) : 1)};
  flex: ${({ $flex }) => ($flex ? 1 : 'initial')};

  @media (max-width: 600px) {
    padding: 8px 12px;
  }
`

const Button = ({ text, isLoading, isDisabled, rightIcon, leftIcon, type, onClick, flex }) => {
  return (
    <ButtonContainer
      onClick={() => !isDisabled && !isLoading && onClick()}
      $isDisabled={isDisabled}
      type={type}
      $isLoading={isLoading}
      $flex={flex}
    >
      {isLoading && <CircularProgress style={{ width: '18px', height: '18px', color: 'inherit' }} />}
      {leftIcon}
      {text}
      {isLoading && <> . . .</>}
      {rightIcon}
    </ButtonContainer>
  )
}

export default Button
