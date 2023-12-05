import Inputs from "./Inputs";

function Caixa() {
    return (
        

        <div>
           <Inputs 
           type="text" 
           text="Nome do cliente" name="name" 
           placeholder="Insira o nome do Cliente"
           />
           <Inputs 
           type="text" 
           text="Procedimento" name="name" 
           placeholder="Insira o procd. feito"
           />
           <Inputs 
           type="number" 
           text="Valor" name="name" 
           placeholder="Insira o valor pago"
           />
           <Inputs 
           type="text" 
           text="Forma de Pagamento" name="name" 
           placeholder="Insira a Forma de Pag."
           />
            <select>
             <option>Selecione Tipo de valor</option>
             <option>Entrada</option>
             <option>Saída</option>
            </select>

            <div>
                resultado
            </div>
        </div>
    )
}

export default Caixa