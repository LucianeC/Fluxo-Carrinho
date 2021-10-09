import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;

  margin: 4em;
  box-shadow: 0px 0px 20px 3px #c4c4c4;
  align-items: center;
  border-radius: 20px;


.bloco{
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 5, 9, 0.85);
    border-radius: 20px;
}

.imagem{
    height: 280px;
    width: 200px;
    object-fit: cover;
    object-position: center;

    border-radius: 15px 0px 0px 15px;
}

.conteudo{
    display: flex;
    flex-direction: column;

    align-items: center;
    padding: 2em;
}

.titulo{
    font: 70 32px Open Sans;
    
}

.componentes{
    font: 400 24px Open Sans;
    
}

.preco{
    font: 400 26px Open Sans;
    font-weight: bold;
}

.bt-compra{
    background-color: rgba(196, 196, 196, 0.25);
    border: none;
    border-radius: 20px 0px 0px 20px;
    align-items: right;
    cursor: pointer;
}



.mais-info{
    border: none;
    border-radius: 7px;
    font: 400 16px Open Sans;
    color: red;
    background-color: black;
    cursor: pointer;
}

.mais-info :hover{
    text-decoration: underline;
 
}
`
export {Container};