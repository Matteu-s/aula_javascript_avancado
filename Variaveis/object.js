let user = {
    name: 'Mateus'
};

//Alterando a propriedade de um objeto
console.log(user);
user.name = 'Mateus 1';
console.log(user);
user['name'] = 'Mateus 2';
console.log(user);

const prop = 'name';
user[prop] = 'Mateus 3';
console.log(user);

//Criando uma propriedade
user.LastName = 'Santos';
console.log(user);
//Deletando uma proprioedade
delete user.name;
console.log(user);
