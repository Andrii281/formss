import React, { useState } from 'react'
import {Title, Block, CheckBoxInput, Input, Span, Button, Container, ImegeСontainer, Image, NavLink} from '../StyledComponents'
import LockImage from '../../565547.svg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const SingUpForm = () => {

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('');

    const [checkBoxState, changeCheckBoxState] = useState(false)
    const [emailState, setEmailState] = useState (true);
    const [passState, setPassState] = useState(true);
    const [firstNameState, setFirstNameState] = useState(true)
    const [secondNameState, setSecondNameState] = useState(true)
    

    const register = () => {
        const regex  = new RegExp('^\s*$', 'g')

        setFirstNameState(firstNameState => firstNameState = !regex.test(firstName));
        setSecondNameState(secondNameState => secondNameState = !regex.test(secondName));
        if(emailState){
            setEmailState(emailState => emailState = !regex.test(email));
        }
        if(passState){
            setPassState(passState => passState = !regex.test(pass));
        }
        if(emailState  && passState && firstNameState && secondNameState){
            localStorage.setItem(JSON.stringify(email), { 
                password: pass,
                email: email,
                firstName: firstName,
                secondName: secondName,
    })
        }
        else{
            alert("no register");
        }
    }



    return (
        <div>
            <Block>
            <ImegeСontainer>
                <Image src = {LockImage}/>
            </ImegeСontainer>
            <Title>Sing up</Title>
            <Container>
                <Input 
                placeholder="First Name *" 
                type="text" value = {firstName} 
                onChange = {value => setFirstName(firstName => {

                    firstName = value.target.value
                    
                    return firstName;

                    })}
                    check={firstNameState} rightMargin = {'0.5em'}/>

                <Input 
                placeholder="Second Name *" 
                type="text" value = {secondName} 
                onChange = {value => setSecondName(secondName => secondName = value.target.value)}
                check={secondNameState}/>
            </Container>



            <Input 
            placeholder="Email Address *" 
            type="text" value = {email} 
            onChange = {value => setEmail(email => {

                email = value.target.value;

                const regex  = new RegExp('...@..\...');
                setEmailState(emailState => emailState = regex.test(email));
                return email;
            })} 
            check={emailState}/>



            <Input  placeholder="Password *" 
            type="password" value = {pass} 
            onChange = {value => setPass(pass => {
                pass = value.target.value;

                const regex  = new RegExp('........')

                setPassState(passState => passState = regex.test(pass));
                return pass;

            })} 
            check={passState}/>

            <Container noAdaptive >
                    <CheckBoxInput type="checkbox" checked={checkBoxState} onChange = {() => changeCheckBoxState(checkBoxState => !checkBoxState)} />
                    <Span>I want to receive inspiration, marketing promotions and updates vie email</Span>
                </Container> 
                <Button onClick = { () => 
                 register()}>
                    SIGN UP
                </Button>
                <Link to='/SingUnForm'><NavLink>Alredy have an acconunt? Sing in</NavLink></Link>
            </Block>
        </div>
        )

}

export default SingUpForm;