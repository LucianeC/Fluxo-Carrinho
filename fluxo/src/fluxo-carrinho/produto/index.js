import {Link} from 'react-router-dom'
import {Container} from './styled'

export default function Produto(props) {
    return(
        <Container>
            <div className="bloco">
                <img className="imagem" src="https://a-static.mlcdn.com.br/618x463/carregador-de-bateria-4-em-1-com-visor-drone-dji-mavic-air-sunnylife/jrhero/931/ba4e7c3c9c20e22135bf4153ea138772.jpg" alt="" />
                <div className="conteudo">
                    <div className="titulo"> {props.info.titulo} </div> <br></br>
                    <div className="componentes"> {props.info.componentes} </div>
                    <div className="preco"> {props.info.preco} </div> <br></br>
                    
                    <Link to={{
                        pathname: './carrinho',
                        state: props.info
                    }}>
                        <button className="bt-compra"> <img className="cestinha" src="https://cdn-icons-png.flaticon.com/512/126/126055.png" alt="" /> </button>
                    </Link>

                    <Link to={{
                        pathname: './detalhesProduto',
                        state: props.info
                    }}>
                        <button className="mais-info"> Mais Informações </button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}