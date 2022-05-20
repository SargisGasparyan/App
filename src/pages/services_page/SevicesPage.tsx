import React from 'react'
import {
  TitleServices,
  NumberFlatTitle,
  NumberFlatDiv,
} from '../../components/servicesPageComponents/servicesPageComponents.element'
const ServicePage: React.FC = () => {
  return (
    <div>
      <TitleServices>Добрый вечер!</TitleServices>
      <NumberFlatDiv>
        <NumberFlatTitle>Ваш номер 154</NumberFlatTitle>
      </NumberFlatDiv>
    </div>
  )
}
export default ServicePage
