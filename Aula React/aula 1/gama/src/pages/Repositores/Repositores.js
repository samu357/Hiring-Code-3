import React, { useEffect, useState } from "react";
import * as S from './styled'
function Repositores() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName)
    setRepositories(repositoriesName);
  }, []);

  return (
    <S.Container>
      <S.Title>Respositorios</S.Title>
      <S.List>
        {
          repositories.map(repository => {
            return (
              <S.ListItem>Repositorio: {repository}</S.ListItem>
            )
          })
        }
      </S.List>
    </S.Container>
  );
};

export default Repositores;