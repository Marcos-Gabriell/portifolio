import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/marcos-gabriel-08043b22b/" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/marcosgabrielsantos_/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="marcosgabriel79355@gmail.com" 
        />
      </Content>
    </Container>
  )
}