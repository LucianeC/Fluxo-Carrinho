import { Container } from '/styled'
import Produto from '../produto'
import { useState } from 'react'

export default function Home(){
    const[produtos, setProdutos]= useState([]);

    function listar(){
        const r = [
            {
              id: 1,
              imagem: "../../../public/assets/images/camera.png",
              titulo: "Câmera Digital Canon PowerShot Sx400is 16MP ",
              componentes: "-1 ",
              preco: "R$ 2.000,00",
              descricao: "Deixe suas experiencias mais profissionais e com a melhor qualidade",
              botao: "../../../public/assets/images/compra(1).svg"
            },
            {
              id: 2,
              imagem: "../../../public/assets/images/micrifone1.jpg",
              titulo: "Microfone Shotgun Takstar Sgc-598 Canon Nikon Sony Com Nfe",
              componentes: "- 1",
              preco: "R$ 560,00",
              descricao: "Deixe suas experiencias mais profissionais e com a melhor qualidade",
              botao: "../../../public/assets/images/compra(1).svg"
            },
            {
              id: 3,
              imagem: "../../../public/assets/images/carregador.jpg",
              titulo: "Carregador de Bateria 4 em 1 com Visor - Drone DJI Mavic Air - Sunnylife",
              componentes: "- 1",
              preco: "R$ 160,00",
              descricao: "Deixe suas experiencias mais profissionais e com a melhor qualidade",
              botao: "../../../public/assets/images/compra(1).svg"
            }
          ]
          setProdutos(r);
  }



            return (
                <Container>

                <h1> Compre já seu equipamento </h1>
                <br />
                
                <button onClick={listar}> Listar equipamentos </button>
                <br />

                <div className="lista-produtos">
                    
                    {produtos.map(item => 
                        <Produto info={item} />
                    )}

                </div>


                </Container>
            )
    }
