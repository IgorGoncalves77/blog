import React from "react";
import Box from "@material-ui/core/Box";
import imagem from "../assets/404.png";

export default function Pagina404() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, textAlign: "center", paddingTop: "5%" }}>
        <img src={imagem} alt="Página não encontrada." />
      </Box>
    </div>
  );
}
