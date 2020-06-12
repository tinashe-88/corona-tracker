import styled, { css } from 'styled-components'

const InputStyles = css`
  color: #000;
  width: 100%;
  border: 0;
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  letter-spacing: inherit;
`

export const CountryContainer = styled.div`
  margin: 40px 0;
  min-width: 120px;
  border: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  vertical-align: top;
`

export const LabelStyles = styled.label`
  top: 0;
  left: 0;
  position: absolute;
`

export const InputContainer = styled.div`
  color: rgba(0, 0, 0, 0.87);
  cursor: text;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  box-sizing: border-box;
  align-items: center;
  font-weight: 400;
  line-height: 1.1876em;
  letter-spacing: 0.00938em;
  margin-top: 40px;
`

export const SelectStyles = styled.select`
  cursor: pointer;
  min-width: 16px;
  user-select: none;
  border-radius: 0;
  ${InputStyles}
  border-bottom: 1px solid #000;
  background-color: #f9f9f9;
`

export const OptionStyles = styled.option`
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0px 2px 1px;
  
`