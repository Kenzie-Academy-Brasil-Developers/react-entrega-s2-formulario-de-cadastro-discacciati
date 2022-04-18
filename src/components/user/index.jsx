import { useHistory } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Button , Typography} from '@mui/material';
import { Box } from "@mui/system";

const User = ({user, setUser}) => {
  console.log(user);

  const history = useHistory();


  const clickSair = () => {
    setUser([])
    history.push("/")
  }

  return (
    <>
      <Container component="main"
        sx={{
          display: "flex",
          flexDirection: "Column",
          alignItems: "center",
          width:{ xs: "95%", md:"50%" },
          fontFamily: "roboto",
          fontSize:"16px",
        }}>
        <Box sx={{
          display: "flex",
          flexDirection: "Column",
          alignItems: "left",
          fontFamily: "roboto",
          fontSize:"16px",
          lineHeight: "30px",
          textAlign: "left",
        }}>
        <Typography variant="h4">Usuário Cadastrado</Typography>

        <Typography variant="p"> Nome de usuário: {user.username}</Typography>
        <Typography variant="p"> Nome completo: {user.fullname}</Typography>
        <Typography variant="p"> CPF: {user.cpf}</Typography>
        <Typography variant="p"> Idade: {user.age}</Typography>
        <Typography variant="p"> Celular: {user.cellphone}</Typography>
        <Typography variant="p"> Email: {user.email}</Typography>
        </Box>
        <Button 
          fullWidth 
          variant="contained" 
          sx={{
            mt: 1, width:"15%",
            marginTop: "5px",
            cursor: "pointer",
            color: "#090909",
            padding: "0.7em 1em",
            fontSize: "12px",
            alignItem: "center",
            borderRadius: "0.5em",
            background: "#e8e8e8",
            border: "1px solid #e8e8e8",
            transition: "all 0.3s",
            boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff", 
          }}
          onClick={clickSair}>
            Sair
        </Button>
      </Container>
    </>
  );
};
export default User;