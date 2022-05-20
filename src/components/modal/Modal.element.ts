import styled from 'styled-components'
import modal_icon from '../../assets/images/modal_icon.png'

export const ModalStyle = styled.div`
  display: block;
  position fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(189, 174, 120, 0.4);
  top: 0;
  left: 0;
  overflow: auto;
`
export const ModalContent = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const Content = styled.div`
  background: white;
  padding: 20px;
`

export const ModalIconDiv = styled.div`
  display: flex;
  justify-content: center;
`
export const ModalIcon = styled.div`
  width: 58px;
  height: 50px;
  background-image: url(${modal_icon});
`
export const ModalTitleContent = styled.div`
  text-align: center;
`
export const ModalInputContent = styled.div`
  text-align: center;
  padding: 15px 16px 14px 16px;
`
export const ModalInput = styled.input`
  font-family: Inter;
  size: 16px;
  line-height: 19.36px;
  border: none;
`
export const ModalTitle = styled.p`
  color: black;
  margin: 0;
`
export const ModalButton = styled.button`
  width: 100%;
  height: 48px;
  font-family: Inter;
  border-radius: 12px;
  border: 0px;
  background-color: #34343a;
  color: white;
  line-padding: 15px, 105px, 14px, 105px;
  gap: 10px;
`
