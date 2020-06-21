const fruit = 'banana';

switch (fruit){
    case 'banana':
        console.log('R$ 3,00 /KG');
        break;
    case 'mamao':
    case 'pera':
        console.log('R$ 2,00 /KG');
        break;
    default:
        console.log('Produto nao existe no estoque. ');
        break;
}