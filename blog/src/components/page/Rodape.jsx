import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";

function Copyright() {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {"© "}
        <Link color="primary" href="https://compassouol.com/">
          Compasso UOL
        </Link>
        {" - "}1996{" - "}
        {new Date().getFullYear()}
        {" - "}
        Todos os direitos reservados
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        Created by{" "}
        <Link color="primary" href="https://github.com/IgorGoncalves77">
          Igor Gonçalves{" "}
        </Link>
        <GitHubIcon color="primary" fontSize="15" />
      </Typography>
    </div>
  );
}

export default function Rodape() {
  return (
    <div>
      <Box>
        <Copyright />
      </Box>
    </div>
  );
}
