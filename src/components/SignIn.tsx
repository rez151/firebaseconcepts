import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import * as yup from "yup";
import {Controller, FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoadingButton} from "@mui/lab";
import {signInWithEmailAndPassword} from "firebase/auth"
import {firebaseAuth} from "../firebase/firebaseconfig";

// remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


type SignInFormData = {
  email: string,
  password: string
}

const SignInFormDataDefaults = {
  email: "",
  password: "",
}

export default function SignIn() {

  const validationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
  });

  const formMethods = useForm<SignInFormData>({
    defaultValues: SignInFormDataDefaults,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const {control, formState, handleSubmit} = formMethods;


  const onSubmit: SubmitHandler<SignInFormData> = async (formValues) => {

    try {
      const response = await signInWithEmailAndPassword(
        firebaseAuth,
        formValues.email,
        formValues.password
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Hallo Matze
          </Typography>
          <FormProvider {...formMethods}>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                control={control}
                name="email"
                render={({field}) => (
                  <TextField
                    {...field}
                    margin="normal"
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                )}/>

              <Controller
                control={control}
                name="password"
                render={({field}) => (
                  <TextField
                    {...field}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                )}/>

              <LoadingButton
                loading={formState.isSubmitting}
                disabled={!formState.isValid}
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
              >
                Sign In
              </LoadingButton>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </FormProvider>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
