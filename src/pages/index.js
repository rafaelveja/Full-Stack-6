import Button from './components/Button' //exemplo de ssr com a pagina de contato utilizando um botão enviar

function HomePage() {
    return (
    
        <div>
            <form method="post" action="">
                Nome:
                <input type="text" class="form-control" name="nome" placeholder=""></input>
                <br />
                Mensagem:
                <textarea class="form-control" name="msg" rows="10"></textarea>
                <br />
                <Button /> 
            </form>
        
        </div>
    )
}
  
export default HomePage