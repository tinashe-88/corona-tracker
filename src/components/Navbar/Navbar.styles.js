import styled from 'styled-components'

export const HeaderContainer = styled.header`
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`

export const NavbarContainer = styled.nav`
  min-height: 64px;
  padding: 0 24px;
  display: flex;
  position: relative;
  align-items: center;
  color: #fff;
  background-color: #1976d2;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
`