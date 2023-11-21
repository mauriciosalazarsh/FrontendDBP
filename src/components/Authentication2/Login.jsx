import React, { useState, useContext } from 'react';
import { Typography, TextField, Button, Link as MUILink } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoImage from './../../assets/img//logo_final2.png';
import { styled } from '@mui/material/styles';
import PicImageImage from './../../assets/img//SampleCard_Image.png';
import useLogin from './useLogin';
import { Link } from 'react-router-dom'; 
import Container from '../Container/Container';
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
  height: `866px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  fontFamily: 'Arial, sans-serif', 
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
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width: `700px`,
  margin: `0px`,
  flex: 'unset',
}));

const LogIn = styled('div', {
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
  flex: 'unset',
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
  alignSelf: 'unset',
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

const LogInToYourAccount = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  margin: `0px`,
}));

const Signup = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  margin: `12px 0px 0px 0px`,
});

const DonTHaveAnAccount = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  margin: `0px`,
}));


const Input1 = styled('div')({
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
  fontFamily: 'Arial, sans-serif', 
}));

const TextFieldStandard1 = styled(TextField, {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
  fontFamily: 'Arial, sans-serif', 
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
  fontFamily: 'Arial, sans-serif',
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

function Login(props) {
  const { data } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const { setUserId, setJwtToken } = useContext(UserContext);
  

  const navigate = useNavigate();

  const handleLogin = async () => {
    const credentials = {
      username: email,
      password: password,
    };

    try {
      const response = await fetch('https://backenddbpproyect-production.up.railway.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (response.ok) {
        const data = await response.json();
        const authToken = data.token;
  
        // Aquí necesitas extraer el 'id' del usuario de la respuesta y almacenarlo.
        // Suponiendo que la API lo devuelve directamente, si no es así, necesitas ajustar esta línea.
        const userId = data.id;
  
        localStorage.setItem('jwtToken', authToken);
        localStorage.setItem('userId', userId);
  
        setJwtToken(authToken);
        setUserId(userId);
  
        navigate('/');
      } else {
        console.error('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error al procesar la solicitud de inicio de sesión:', error);
    }
  };

  return (
    <div>
      <div style={{ marginTop: '20px' }}></div>
      <Container>
        <ScreenDesktop className={props.className} data={data}>
          <LeftSide data={data}>
            <LogIn data={data}>
              <Top data={data}>
                <Logo src={LogoImage} loading="lazy" alt={'Logo'} />
                <Lockup>
                  <LogInToYourAccount data={data}>
                    {'Inicia Sesión'}
                  </LogInToYourAccount>
                  <Signup>
                    <DonTHaveAnAccount>
                      {'¿No tienes una cuenta? '}
                    </DonTHaveAnAccount>
                    <Link to="/register" underline="always">
                      Registrate
                    </Link>
                  </Signup>
                </Lockup>
              </Top>
              <Input1>
                <TextFieldStandard
                  variant="standard"
                  disabled={false}
                  size={'medium'}
                  label={'User Name'}
                  data={data}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextFieldStandard1
                  variant="standard"
                  disabled={false}
                  size={'medium'}
                  label={'Password'}
                  data={data}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Input1>
              <Btm>
                <ButtonContained
                  variant="contained"
                  disabled={false}
                  size={'large'}
                  color={'primary'}
                  data={data}
                  onClick={handleLogin}
                >
                  {'LOG IN'}
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
              </Btm>
            </LogIn>
          </LeftSide>
          <Pic></Pic>
        </ScreenDesktop>
      </Container>
    </div>
  );
}

export default Login;
