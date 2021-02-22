import styled from 'styled-components'

export const Title = styled.h2`
    color: white;
    font-size: 1.5em;
    font-weight: none;
    text-align: center;
    margin:  0 0 12px 0;
`

export const Block = styled.div`
    padding: 1em;
    display: block;
    background: black;
    
    height: 600px;
    margin: 0 auto 0 auto;


    @media (min-width: 760px) {
      width: 660px;
    }

    @media (min-width: 660px) {
      width: 560px;
    }

    @media (max-width: 360px) {
      width: 340px;
    }

    @media (max-width: 320px) {
      width: 300px;
    }

    @media (max-width: 280px) {
      width: 260px;
    }
`

export const CheckBoxInput = styled.input`
  display: inline-block;
  background: black;
  border-radius: 3px;
  margin: auto 20px auto 0px;
`



export const Input = styled.input`
  display: block;
  padding: 1em;
  width: 100%;
  margin:  0 ${props => props.rightMargin ? props.rightMargin : '0'} 12px 0;
  color: rgb(125, 121, 121);
  background: black;
  border: 1px solid ${props => props.check ? 'rgb(87, 80, 80)' : 'red'};
  border-radius: 3px;
  &:focus{
    color: white;
    outline: none;
  }
`

export const Span = styled.span`
  display: inline-block;
  font-size: 14;
  margin: auto 0 auto 0;
  color: white;
  @media (max-width: 360px) {
    font-size: 12;
    }
`
export const Button = styled.button`
  display: block;
  background: blue;
  margin: 18px auto 15px auto;
  padding: 0.5em;
  width: 250px;

  @media (max-width: 280px) {
    width: 200px;
  }
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  ${props => props.noAdaptive ? ' ' : '@media (max-width: 360px) {flex-direction: column;}'}
 
`

export const ImegeСontainer = styled.div`
  padding: 15px;
  width: 50px;
  height: 50px;
  background: pink;
  border-radius: 30px;
  margin: 1em auto 1em auto;

`

export const Image = styled.img`
  object-fit: cover;
  width: 20px;
`

export const NavLink = styled.span`
  display: inline-block;
  outline: none;
  padding: 10px;
  width: 20em;
  margin: auto auto auto auto;
  color: blue;
`