// config inicial
const express = require('express')
const app = express()

//ler jason
app.use(express.urlencoded({
    extended:true,
}),
)

app.use(express.json())

//rota
app.get("/", (req,res) => {
    res.json({Text: "(Motivo) Eu canto porque o instante existe e a minha vida está completa. Não sou alegre nem sou triste sou poeta. Irmão das coisas fugidias,  não sinto gozo nem tormento. Atravesso noites e dias no vento."})
} 
)
//entrega
app.listen(3000)