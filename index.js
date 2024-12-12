class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;
        switch (this.tipo){
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'mago':
                ataque = 'magia';
                break;
            case 'monge':
                ataque = 'artes marciais'
                break;
            case'ninja':
                ataque = 'shuriken'
                break;
        }
    
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

const heroi1 = new heroi('Varian Wrynn', 45, 'guerreiro');
heroi1.atacar();

const heroi2 = new heroi('Gandalf', 70, 'mago');
heroi2.atacar();


const heroi3 = new heroi('Chen Malte do trovão', 50, 'monge');
heroi3.atacar();

const heroi4 = new heroi('Genji', 30, 'ninja');
heroi4.atacar();