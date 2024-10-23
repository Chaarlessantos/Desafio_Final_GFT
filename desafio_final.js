// amei toda a experiência, gostaria muito de ir para a proxima etapa, necessito de uma oportunidade e se eu tiver vou me dedicar muito. sinto que agora vai !
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome; 
      this.idade = idade;
      this.tipo = tipo;
    }
  

    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case "mago":
          ataque = "uma magia";
          break;
        case "guerreiro":
          ataque = "uma espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = " um shuriken";
          break;
        default:
          ataque = "realizou um ataque não conhecido";
      }
  
      
      console.log(`O ${this.tipo} deferiu um golpe usando ${ataque}`);
    }
  }
  
  const mago = new Heroi("Charles", 50, "mago");
  const guerreiro = new Heroi("Vingador", 55, "guerreiro");
  const monge = new Heroi("Thor", 98, "monge");
  const ninja = new Heroi("DeadPool", 12, "ninja");
  
 
  mago.atacar();       
  guerreiro.atacar();  
  monge.atacar();      
  ninja.atacar();      
  