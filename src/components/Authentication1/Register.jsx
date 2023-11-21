import React, { useState } from 'react';
import { Typography, TextField, Button, Link as MUILink } from '@mui/material';
import LogoImage from './../../assets/img//logo_final2.png';
import { styled } from '@mui/material/styles';
import PicImageImage from './../../assets/img//SampleCard_Image.png';
import useRegister from './useRegister';
import Container from '../Container';
import { Link } from 'react-router-dom'; 
import { UserContext } from '../UserContext/UserContext';

const ScreenDesktop = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: data.currentVariant === 'ScreenScreen2' ? `676.23px` : `866px`,
  justifyContent:
    data.currentVariant === 'ScreenScreen2' ? `center` : `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  fontFamily: 'Arial, sans-serif', // Fuente personalizada
}));
  
const LeftSide = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width:`700px`,
  margin: `0px`,
  flex:'unset',
}));
  
  const RegisterForm = styled('div', {
    shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
  })(({ data }) => ({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `0px`,
    overflow: `hidden`,
    flex : 'unset',
  }));
  
  const Top = styled('div', {
    shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
  })(({ data }) => ({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `0px`,
    alignSelf:  'unset',
  }));
  
  const Logo = styled('img')({
    height: `62.23px`,
    width: `48.38px`,
    objectFit: `contain`,
    margin: `0px`,
  });
  
  const Lockup = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `30px 0px 0px 0px`,
  });
  
  const InputContainer = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `40px 0px 0px 0px`,
  });
  
  const TextFieldStandard = styled(TextField, {
    shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
  })(({ theme, data }) => ({
    alignSelf: `stretch`,
    margin: `0px`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `12px`,
    letterSpacing: `0.15000000596046448px`,
    textDecoration: `none`,
    lineHeight: `12px`,
    textTransform: `none`,
  }));
  
  
  const Btm = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `40px 0px 0px 0px`,
  });
  
  const ButtonContained = styled(Button, {
    shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
  })(({ theme, data }) => ({
    alignSelf: `stretch`,
    margin: `0px`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `500`,
    fontSize: `15px`,
    letterSpacing: `0.46000000834465027px`,
    textDecoration: `none`,
    lineHeight: `26px`,
    textTransform: `uppercase`,
  }));
  
  const Pic = styled('div')({
    backgroundImage: `url(${PicImageImage})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    alignSelf: `stretch`,
    flex: `1`,
    margin: `0px`,
    overflow: `hidden`,
  });


  function Register(props) {
    const { data } = useRegister();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [country, setCountry] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [jwtToken, setJwtToken] = useState('');
    
  
    const handleRegister = async () => {
      const userData = {
        username,
        password,
        firstname,
        lastname,
        country,
      };
  
      try {
        const response = await fetch('https://backenddbpproyect-production.up.railway.app/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (response.status === 403) {
          setShowError(true);
          setErrorMessage('Contraseña incorrecta');
          setShowSuccess(false); 
        } else if (response.ok) {
          const data = await response.json();
          const authToken = data.token;
  
          setShowSuccess(true);
          setSuccessMessage('Registro exitoso');
          setJwtToken(authToken);
          setShowError(false); 
        } else {
          console.error('Registro fallido');
        }
      } catch (error) {
        console.error('Error al procesar la solicitud de registro:', error);
      }
    };
  
    return (
      <div>
        <div style={{ marginTop: '20px' }}></div>
        <Container>
          <ScreenDesktop className={props.className} data={data}>
            <LeftSide data={data}>
              <RegisterForm data={data}>
                <Top data={data}>
                  <Logo src={LogoImage} loading="lazy" alt={'Logo'} />
                  <Lockup>
                    <Typography variant="h6" color="primary">
                      {'Create an Account'}
                    </Typography>
                  </Lockup>
                </Top>
                <InputContainer>
                  <TextFieldStandard
                    variant="standard"
                    disabled={false}
                    size={'medium'}
                    label={'User Name'}
                    data={data}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextFieldStandard
                    variant="standard"
                    disabled={false}
                    size={'medium'}
                    label={'Password'}
                    data={data}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextFieldStandard
                    variant="standard"
                    disabled={false}
                    size={'medium'}
                    label={'First Name'}
                    data={data}
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <TextFieldStandard
                    variant="standard"
                    disabled={false}
                    size={'medium'}
                    label={'Last Name'}
                    data={data}
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  <TextFieldStandard
                    variant="standard"
                    disabled={false}
                    size={'medium'}
                    label={'Country'}
                    data={data}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </InputContainer>
  
                <Btm>
                  <ButtonContained
                    variant="contained"
                    disabled={false}
                    size={'large'}
                    color={'primary'}
                    data={data}
                    onClick={handleRegister}
                  >
                    {'REGISTER'}
                  </ButtonContained>
                  {showError && (
                    <Typography variant="body2" color="error">
                      {errorMessage}
                    </Typography>
                  )}
                  {showSuccess && (
                    <Typography variant="body2" color="success">
                      {successMessage}
                    </Typography>
                  )}
                  {/* Agrega el enlace para iniciar sesión */}
                  <Typography variant="body2">
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/login">Inicia sesión aquí</Link>
                  </Typography>
                </Btm>
              </RegisterForm>
            </LeftSide>
            {!(data.currentVariant === 'ScreenScreen2') && <Pic></Pic>}
          </ScreenDesktop>
        </Container>
      </div>
    );
  
}

export default Register;