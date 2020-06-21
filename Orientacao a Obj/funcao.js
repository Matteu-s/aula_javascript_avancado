function Pessoa(name){
    this.name = name;
}

const p = new Pessoa('Mateus');

console.log(p);

function Pessoa (name){
    this.name = name;
    
    return{
        name: 'Teste'
    };
}

const p2 = new Pessoa('Matues');

console.log(p2);