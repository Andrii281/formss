import React, { useEffect, useState } from 'react'
import {Title, Block, CheckBoxInput, Input, Span, Button, Container, ImegeСontainer, Image, NavLink} from '../StyledComponents'
import LockImage from '../../565547.svg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const SingInForm = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('');
    const [RememberMeCheckBox, changeRememberMeCheckBox] = useState(false)

    const [emailState, setEmailState] = useState (true);
    const [passState, setPassState] = useState(true);

    const SingIn = () => {

        const regex  = new RegExp('^\s*$', 'g');

        if(emailState){
            setEmailState(emailState => emailState = !regex.test(email));
        }
        if(passState){
            setPassState(passState => passState = !regex.test(pass));
        }
        if(emailState  && passState && RememberMeCheckBox){
            localStorage.setItem('storageEmail', email);
            localStorage.setItem('storagePass', pass);
        }
    }

    useEffect(() => {
        const storageEmail = localStorage.getItem('storageEmail');
        const storagePass = localStorage.getItem('storagePass');
        
        if(storageEmail != null && storagePass != null)
            setEmail(email => email =  storageEmail)
            setPass(pass => pass = storagePass)
    }, [])

    
    return (
        <div> 
            <Block>
                <ImegeСontainer>
                    <Image src = {LockImage}/>
                </ImegeСontainer>
                <Title>
                    Sing in
                </Title>
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
                <Input  
                placeholder="Password *" 
                type="password" value = {pass} 
                onChange = {value => setPass(pass => {
                    pass = value.target.value;
    
                    const regex  = new RegExp('........')
    
                    setPassState(passState => passState = regex.test(pass));
                    return pass;
    
                })} 
                check={passState}/>
                <Container noAdaptive>
                    <CheckBoxInput type="checkbox" checked={RememberMeCheckBox} onChange = {() => changeRememberMeCheckBox(RememberMeCheckBox => !RememberMeCheckBox)}/>
                    <Span>Remember me</Span>
                </Container>  
                <Button onClick = {SingIn}>SIGN IN</Button>
                <Link to='/SingUpForm'><NavLink>Don't heve an account? Sing in</NavLink></Link>
            </Block>
        </div>
    )
}

export default SingInForm;