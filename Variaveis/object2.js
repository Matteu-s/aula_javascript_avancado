const user = {
    name: 'Mateus',
    lastname: 'Santos'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ',Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Mateus Santos'});

console.log('\nAdiciona a propriedade fullName no objeto user',user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 22}));

//Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavei newObj apos as alterações: ', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Mateus'};
Object.seal(person);

person.name = 'Mateus Santos';
delete person.name;
person.age = 22;

console.log('\nVariavel person apos as alterações: ', person);
