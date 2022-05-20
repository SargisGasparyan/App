import React from 'react'
import styled from 'styled-components'
import {
  ModalStyle,
  ModalContent,
  ModalIcon,
  ModalTitleContent,
  ModalTitle,
  ModalInput,
  ModalInputContent,
  ModalButton,
  Content,
  ModalIconDiv,
} from './Modal.element'

export const Modal = styled.div`
width:200px
height:250px
`
export const ModalPage = () => {
  return (
    <ModalStyle>
      <ModalContent>
        <Content>
          <ModalIconDiv>
            <ModalIcon />
          </ModalIconDiv>
          <ModalTitleContent>
            <ModalTitle>Добро пожаловать</ModalTitle>
            <ModalTitle> в Marianna Hotel</ModalTitle>
          </ModalTitleContent>
          <ModalInputContent>
            <ModalInput placeholder="Номер комнаты / Room number" />
          </ModalInputContent>
          <ModalButton>Готово</ModalButton>
        </Content>
      </ModalContent>
    </ModalStyle>
  )
}
