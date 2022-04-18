import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Container,
  TextField,
  Button
} from "@mui/material";
import { Box } from "@mui/system";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = ({setUser, user}) => {

  const history = useHistory();
  
  const notify = (type = "success") =>{
    if (type === "success") {
      toast.success({
        msg:"Cadastro realizado com sucesso!",
        className:"primaryColor",
        
      });
    } else {
      toast.error({
        msg:"Cadastro não realizado!",
        className:"dangerColor",
      });
    }

  } 

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório!")
      .min(8, "Mínimo de 8 caracteres!")
      .matches(/^[aA-zZ\s]+$/, "Escreva um nome válido!"),

    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("Email não é válido!"),

    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(8, "Mínimo de 8 caracteres!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Sua senha precisa ter no mínimo uma letra Maiúscula, um número e um Caracter especial (@#%*!)!"
      ),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não confere!"),

  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onRegister = (data) => {
    setUser(data) // nao usar na requisição da api com state, passar o valor direto e depois setar no state.
    console.log(user)
    notify()
  };

 
  return (
    <>
      <Container component="main"
        sx={{
          display: "flex",
          flexDirection: "Column",
          alignItems: "center",
        }}

      >
        <Box
          sx={{
            marginTop: 10,
            paddingTop:3,
            paddingBottom:3,
            display: "flex",
            flexDirection: "Column",
            alignItems: "center",
            width:{ xs: "95%", md:"50%" }
          }}
        >
            <Box
                onSubmit={handleSubmit(onRegister)}
                component="form"
                sx={{ mt: 1, 
                  display: "flex",
                  flexDirection: "Column",
                  alignItems: "center",
                  width:"90%" }}
            >
            <TextField
                {...register("name")}
                margin="normal"
                fullWidth
                label="Nome:"
                helperText={errors.name?.message}
                error={!!errors.name?.message}
                sx={{ mt: 1, width:"80%"}}
            />
            <TextField
                {...register("email")}
                margin="normal"
                fullWidth
                label="Email:"
                helperText={errors.email?.message}
                error={!!errors.email?.message}
                sx={{ mt: 1, width:"80%", border:"none" }}
            />
            <TextField
                {...register("password")}
                margin="normal"
                fullWidth
                type="password"
                label="Senha:*"
                helperText={errors.password?.message}
                error={!!errors.password?.message}
                sx={{ mt: 1, width:"80%" }}
            />
            <TextField
                {...register("confirmPassword")}
                margin="normal"
                fullWidth
                type="password"
                label="Confirme sua Senha:*"
                helperText={errors.confirmPassword?.message}
                error={!!errors.confirmPassword?.message}
                sx={{ mt: 1, width:"80%" }}
            />
            <Button 
                fullWidth 
                type="submit" 
                variant="contained" 
                sx={{ mt: 1, width:"40%"}}
            >
                Cadastrar
            </Button>
          </Box>
        </Box>
    </Container>
    
    </>
  );
};
export default Signup;