import {Link} from 'react-router-dom'
import {Container} from './styled';

export default function Produto(props) {
    return(
        <Container>
            <img className="imagem" src={props.info.imagem} alt=""/>
            <div className="titulo"> {props.info.titulo} </div> <br></br>
            <div className="componentes"> {props.info.componentes} </div>
            <div className="preco"> {props.info.preco} </div> <br></br>
                    
            <Link to={{
                pathname: '/detalhe',
                state: props.info
            }}>
                <button className="mais-info"> Mais Informações </button>
            </Link>
        </Container>
    )
}