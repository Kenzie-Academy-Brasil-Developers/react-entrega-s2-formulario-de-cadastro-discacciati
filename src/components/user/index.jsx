import { useHistory } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Button , Typography} from '@mui/material';
import { Box } from "@mui/system";
import ImageSucess from "../../assets/images/sucessteam.png"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const User = () => {

  const history = useHistory();
  const params = useParams();
  console.log(params.name)


  const clickSair = () => {
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
        <Typography variant="h4">Bem-vindo {params.name} </Typography>
        <Card>
                <CardMedia
                component="img"
                image={ImageSucess}
                alt=""
              />
        </Card>

        </Box>
        <Button 
          fullWidth 
          variant="contained" 
          sx={{
            mt: 1, width:"10%",
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
          }}
          onClick={clickSair}>
            Sair
        </Button>
      </Container>
    </>
  );
};
export default User;