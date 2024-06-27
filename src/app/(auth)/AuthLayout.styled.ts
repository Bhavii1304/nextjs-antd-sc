'use client'
import Images from '@/config/images'
import styled from 'styled-components'

export const AuthWrapper = styled.div`
  height: 100vh;
  display: flex;
`
export const AuthBanner = styled.div`
  background: url(${Images.Bakery.src}) no-repeat;
  flex: 0 0 600px;
  background-size: cover;
`
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
`
