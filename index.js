let vida = 100
let checkpoint = null // Armazena o estado do jogo
let itens = []
const PECAS_BICICLETA = ["Quadro da bicicleta", 
    "Rodas da bicicleta", "Freios da bicicleta", 
    "Guidão da bicicleta", "Pedais da bicicleta", 
    "Corrente da bicicleta", "Selim da bicicleta",
     "Garfo da bicicleta", "Capacete de ciclismo"]
let jogoAtivo = true // controla se o jogo está ativo ou não
let sentimentos = []

// Função para carregar o estado salvo do jogo
function carregarCheckpoint() {
    if (checkpoint) {
        vida = checkpoint.vida
        itens = checkpoint.itens.slice()
        sentimentos = checkpoint.sentimentos.slice()
        console.log("Checkpoint carregado com sucesso!")
    } else {
        console.log("Nenhum checkpoint salvo encontrado.")
    }
}

// Função para verificar se o jogador morreu
function verificarMorte() {
    if (vida <= 0) {
        console.log("Você morreu. Fim de jogo.")
        jogoAtivo = false
    }
}

// Função para verificar se todas as peças da bicicleta foram coletadas
function verificarCompeticao() {
    let todasPecasColetadas = true

    for (let peca of PECAS_BICICLETA) {
        if (!itens.includes(peca)) {
            todasPecasColetadas = false
            break
        }
    }

    if (todasPecasColetadas && terSentimentos()) {
        console.log("Parabéns! Ocorreu tudo como sempre sonhei. Eu sou um campeão do mundo! Graças aos meus amigos e às pessoas que encontrei durante o caminho")
    } else if (todasPecasColetadas) {
        console.log("Parabéns! Você completou sua bicicleta dos sonhos e agora está pronto para competir nas Olimpíadas!")
    } else {
        console.log("Você não possui todas as peças necessárias para competir nas Olimpíadas.")
        console.log("Sua jornada acabou aqui.")
        jogoAtivo = false
    }
}

function terSentimentos() {
    return sentimentos.includes("AMIZADE") && sentimentos.includes("ORGULHO") && sentimentos.includes("PERTENCIMENTO")
}

// Função para explorar o Irã
function explorarIra( atleta = "Amir Ansari") {
    if (!jogoAtivo) return

    console.log(`Vamos explorar a vida de ${atleta}!`)
    console.log("Primeiramente, vamos explorar onde Amir nasceu: IRÃ")
    console.log("CHEGAMOS AO IRÃ!")
    console.log("Eu, Amir, tenho um sonho de montar minha bicicleta dos sonhos para competir nas Olimpíadas.")
    console.log("Mas sei que vai ser muito difícil.")
    console.log("Com a ajuda dos meus amigos, acredito que posso me tornar um campeão do mundo com a bicicleta que tanto sonhei.")
    console.log("Meus amigos desde sempre me apoiaram para me ajudar na montagem da bicicleta dos sonhos.")
    console.log("Sempre estiveram aqui para me apoiar, isso me deixa muito feliz!")
    console.log("Não sei até quando eles vão estar aqui, mas enquanto isso continuo na luta.")
    console.log("Porém, a situação no Irã me deixa em dúvida se vou conseguir seguir meu sonho.")
    console.log("Mas não irei desistir.........")

    //chamo as funções para não ter que repetir o código
    interagirComNPCiran()
    verificarMorte()
}

// Função para interagir com NPCs no Irã
function interagirComNPCiran() {
    console.log("Chegando no Irã podemos ver alguns amigos!")
    console.log("Aparentemente eles gostariam de conversar com você!")
    console.log("Vamos andar para ver eles!")

    let visitaIra = prompt("Olha, seus conhecidos! Vamos lá: SIM/NAO OBS: CASO NÃO ISSO VAI ACARRETAR NA PERDA DE MUITA VIDA\n").toUpperCase()

    if (visitaIra === "SIM") {
        console.log("------------------------------------")
        console.log("Vamos lá!")

        let ir = prompt("Olha, um conhecido seu! Vamos interagir com ele? SIM/NAO \n").toUpperCase()
        if (ir === "SIM") {
            console.log("Oi! Que bom te ver!")
            console.log("Fico muito feliz de te ver por aqui.")
            console.log("Nem acredito te ver aqui!")
            console.log("Fazia tempo que não te via por aqui.")
            console.log("Adorei te ver aqui!")
            console.log("Me acompanhe, tenho alguma coisa para te ajudar.")
            console.log("De tanta felicidade em te ver, vamos te entregar uma recompensa: Quadro da bicicleta.")
            itens.push("Quadro da bicicleta")
            console.log("------------------------------------")

            let amizadades = prompt("Eles gostam muito de você, e será que você realmente gosta deles? SIM/NAO").toUpperCase()
            if (amizadades === "SIM") {
                console.log("Já que realmente você acredita na amizade, eles gostariam de te dar outro presente: AMIZADE.")
                sentimentos.push("AMIZADE")
            } else {
                console.log("É uma pena")
            }
        } else {
            console.log("É uma pena, eles gostariam de te ver e te ajudar em seu sonho.")
            vida -= 10
        }

        let outroNPC = prompt("Você encontrou outro amigo! Quer falar com ele? SIM/NAO \n").toUpperCase()
        if (outroNPC === "SIM") {
            console.log("Oi! Eu ouvi sobre seu sonho. Tome, quero te dar um presente: Rodas da bicicleta.")
            console.log("------------------------------------")
            itens.push("Rodas da bicicleta")
        } else {
            console.log("Você perdeu a chance de ganhar as rodas da bicicleta.")
            vida -= 10
        }

        let terceiroNPC = prompt("Um terceiro amigo apareceu! Quer falar com ele? SIM/NAO \n").toUpperCase()
        if (terceiroNPC === "SIM") {
            console.log("Oi! Estou feliz em ajudar no seu sonho. Tome, aqui está: Freios da bicicleta.")
            console.log("------------------------------------")
            itens.push("Freios da bicicleta")
        } else {
            console.log("Você perdeu a chance de ganhar os freios da bicicleta.")
            vida -= 10
        }
    } else {
        console.log("Eles gostariam de te ver, mas você decidiu não visitá-los. ISSO VAI ACARRETAR NA PERDA DE MUITA VIDA.")
        vida -= 40
    }

    verificarMorte()
    if (!jogoAtivo) return

    console.log("------------------------------------")
    console.log("A situação do Irã está piorando cada vez mais, acho que mesmo não querendo eu e minha família vamos nos mudar.")
    console.log("Meus pais conversaram e decidiram que vamos nos mudar.")
    console.log("Eu não queria, mas... enfim, vamos para o Afeganistão.")
    console.log("Precisamos sair daqui!")
    console.log("------------------------------------")
}

// Função para explorar o Afeganistão
function explorarAfeganistao() {
    if (!jogoAtivo) return

    console.log("------------------------------------")
    console.log("Agora vamos explorar o Afeganistão!")
    console.log("CHEGAMOS AO AFEGANISTÃO!")
    console.log("Aqui, Amir encontra outros desafios, mas também pode encontrar mais amigos dispostos a ajudar com sua bicicleta dos sonhos.")
    console.log("Aqui é diferente mas quando caminhei pelas ruas pude fazer novas amizades!")
    console.log("Conversei bastante com eles e eles gostaram muito de mim.")
    console.log("Contei sobre meus sonhos e desejos.")
    console.log("Eles me deram um bom feedback sobre meus sonhos!")
    console.log("Ao continuar conversando me falaram que eles poderiam me apoiar nessa jornada.")
    console.log("Embora tudo isso, ainda sinto saudade da minha terra natal:")
    console.log("IRÃ")
    console.log("Pois foi onde criei-me e me desenvolvi")
    console.log("Eu sinto saudade dos meus amigos de lá, mas sei que preciso continuar por aqui.")
    console.log("Enfim.................")

    interagirComNPCAfeganistao()
    verificarMorte()
}

// Função para interagir com NPCs no Afeganistão
function interagirComNPCAfeganistao() {
    let treinador
    console.log("------------------------------------")
    console.log("Ao sair para caminhar um de seus amigos viu o seu desempenho na sua bicicleta velhinha!")
    console.log("Ele gostou muito do que viu.")
    console.log("Nisso ele foi até mim")
    console.log("Ele disse que pode te ajudar a seguir seu sonho.")
    console.log("também falou que poderia ser seu treinador e poderia te ajudar na sua caminhada!")

    treinador = prompt("Você aceita a minha ajuda? SIM/NAO \n").toUpperCase()

    if (treinador === "SIM") {
        console.log("Ele disse que te acha um garoto muito promissor!")
        console.log("Reconhece que você tem um talento muito grande!")
        console.log("Por isso ele quer te dar uma recompensa: O ORGULHO")
        sentimentos.push("ORGULHO")
        console.log("Seu desempenho foi muito bom!")
        console.log("------------------------------------")
    } else {
        console.log("Ele disse que poderia te ajudar a seguir seu sonho!")
        console.log("Porém é uma pena que não queira!")
    }

    let visitaAfeganistao = prompt("Olha, você encontrou novos amigos! Vamos lá: SIM/NAO OBS: CASO NÃO ISSO VAI ACARRETAR NA PERDA DE MUITA VIDA\n").toUpperCase()
    if (visitaAfeganistao === "SIM") {
        console.log("Vamos lá!")

        let ir = prompt("Olha, um novo amigo seu! Vamos interagir com ele? SIM/NAO \n").toUpperCase()
        if (ir === "SIM") {
            console.log("Oi! Que bom te ver por aqui!")
            console.log("Eu quero te ajudar no seu sonho. Tome, aqui está um presente: Guidão da bicicleta.")
            itens.push("Guidão da bicicleta")
        } else {
            console.log("Que pena, eles gostariam de te ajudar.")
            vida -= 10
        }

        let outroNPC = prompt("Você encontrou mais um amigo! Quer falar com ele? SIM/NAO \n").toUpperCase()
        if (outroNPC === "SIM") {
            console.log("Oi! Eu soube do seu sonho. Tome, quero te dar um presente: Pedais da bicicleta.")
            itens.push("Pedais da bicicleta")
        } else {
            console.log("Você perdeu a chance de ganhar os pedais da bicicleta.")
            vida -= 10
        }

        let terceiroNPC = prompt("Um terceiro amigo apareceu! Quer falar com ele? SIM/NAO \n").toUpperCase()
        if (terceiroNPC === "SIM") {
            console.log("Oi! Estou feliz em ajudar no seu sonho. Tome, aqui está: Corrente da bicicleta.")
            console.log("------------------------------------")
            itens.push("Corrente da bicicleta")
        } else {
            console.log("Você perdeu a chance de ganhar a corrente da bicicleta.")
            vida -= 10
        }
    } else {
        console.log("Eles gostariam de te ajudar, mas você decidiu não visitá-los. ISSO VAI ACARRETAR NA PERDA DE MUITA VIDA.")
        vida -= 40
    }

    verificarMorte()
    if (!jogoAtivo) return

    console.log("A situação no Afeganistão está piorando rapidamente. Minha família e eu decidimos que precisamos fugir para a Suécia em busca de segurança.")
    console.log("------------------------------------")
}

// Função para explorar a Suécia
function explorarSuecia() {
    if (!jogoAtivo) return

    console.log("------------------------------------")
    console.log("Agora vamos explorar a Suécia!")
    console.log("CHEGAMOS À SUÉCIA!")
    console.log("Aqui, Amir tem a chance de encontrar mais amigos que podem ajudá-lo a finalmente completar sua bicicleta dos sonhos.")
    console.log("Estou começando a me adaptar à Suécia, mas a jornada ainda não terminou.")
    console.log("Aqui o clima é diferente!")
    console.log("Embora todas essas adversidades, estou adorando a Suécia!")
    console.log("Me sinto parte desta nação!")
    console.log("------------------------------------")

    //chamo as funções para não ter que repetir o código
    interagirComNPCsuecia()
    verificarMorte()

    if (jogoAtivo) {
        verificarCompeticao()
    }
}

// Função para interagir com NPCs na Suécia
function interagirComNPCsuecia() {
    console.log("Você encontrou novos amigos na Suécia!")
    let visitaSuecia = prompt("Vamos lá: SIM/NAO OBS: CASO NÃO ISSO VAI ACARRETAR NA PERDA DE MUITA VIDA\n").toUpperCase()
    if (visitaSuecia === "SIM") {
        console.log("Vamos lá!")

        let ir = prompt("Olha, um novo amigo seu! Vamos interagir com ele? SIM/NAO \n").toUpperCase()
        if (ir === "SIM") {
            console.log("Oi! Que bom te ver por aqui!")
            console.log("Eu quero te ajudar no seu sonho. Tome, aqui está um presente: Selim da bicicleta.")
            console.log("Você pode representar seu novo país nas competições!")
            console.log("Seus novos amigos suecos estão muito contentes")
            console.log("Você se sentiu muito bem por isso!")
            console.log("Você se sentiu bem com sua nova nação! você ganhou o sentimento de PERTENCIMENTO.")
            sentimentos.push("PERTENCIMENTO")
            console.log("------------------------------------")
            itens.push("Selim da bicicleta")
        } else {
            console.log("Que pena, eles gostariam de te ajudar.")
            vida -= 10
        }

        let outroNPC = prompt("Você encontrou mais um amigo! Quer falar com ele? SIM/NAO \n").toUpperCase()
        if (outroNPC === "SIM") {
            console.log("Oi! Eu soube do seu sonho. Tome, quero te dar um presente: Garfo da bicicleta.")
            console.log("------------------------------------")
            itens.push("Garfo da bicicleta")
        } else {
            console.log("Você perdeu a chance de ganhar o garfo da bicicleta.")
            vida -= 10
        }

        let terceiroNPC = prompt("Um terceiro amigo apareceu! Quer falar com ele? SIM/NAO \n").toUpperCase()
        if (terceiroNPC === "SIM") {
            console.log("Oi! Estou feliz em ajudar no seu sonho. Tome, aqui está: Capacete de ciclismo.")
            console.log("------------------------------------")
            itens.push("Capacete de ciclismo")
        } else {
            console.log("Você perdeu a chance de ganhar o capacete de ciclismo.")
            vida -= 10
        }
    } else {
        console.log("Eles gostariam de te ajudar, mas você decidiu não visitá-los. ISSO VAI ACARRETAR NA PERDA DE MUITA VIDA.")
        vida -= 40
    }

    verificarMorte()
}

// Função para exibir o status atual do jogador
function exibirStatus() {
    console.log(`Vida: ${vida}`)
    console.log(`Itens: ${itens.join(", ")}`) //transforma tudo em um array só
}

// Função para salvar o estado atual do jogo
function salvarCheckpoint() {
    checkpoint = {
        vida: vida,
        itens: itens.slice(),
        sentimentos: sentimentos.slice()
    }
    console.log("Checkpoint salvo com sucesso!")
}

// Função para mostrar o menu do jogo
function mostrarMenu() {
    console.log("\nEscolha uma opção:")
    console.log("1. Explorar o Irã")
    console.log("2. Explorar o Afeganistão")
    console.log("3. Explorar a Suécia")
    console.log("4. Salvar o jogo")
    console.log("5. Exibir status")
    console.log("6. Carregar checkpoint")
    console.log("7. Sair")
}

// Função para iniciar o jogo
function iniciarJogo() {
    console.log("Bem-vindo ao jogo!")

    let opcao
    while (jogoAtivo) {
        mostrarMenu() // mostrar o menu
        opcao = prompt(`Digite o número da opção desejada: 
INDICAÇÕES:\n \n 1. CASO EXPLORE TODOS OS PAISES INDICO QUE SIGA A ORDEM 1 2 3 PARA SUA EXPERIENCIA SER MAIS SATISFATORIA.\n \n2. ABRA O CONSOLE PARA LER AS HISTÒRIAS E DIALOGOS.\n \n3. APERTE 7 PARA PODER FECHAR ESSA LACUNA E ABRIR O CONSOLE.`)

        switch (opcao) { // chama as funções de acordo com escolhido para não ocorrer repetições
            case "1":
                explorarIra()
                break
            case "2":
                explorarAfeganistao()
                break
            case "3":
                explorarSuecia()
                break
            case "4":
                salvarCheckpoint()
                break
            case "5":
                exibirStatus()
                break
            case "6":
                carregarCheckpoint()
                break
            case "7":
                console.log("Saindo do jogo...")
                jogoAtivo = false
                break
            default:
                console.log("Opção inválida. Tente novamente.")
        }
    }
}

iniciarJogo()