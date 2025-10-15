Array.prototype.square = function(number){
    return this.map(num => num*num);
};
Array.prototype.cube = function(number){
    return this.map(num => num*num*num);
};
Array.prototype.sum = function(number){
    return this.reduce((total, num) => total +num,0);
};
Array.prototype.average = function(number){
    if(this.length == 0)return NaN;
    return this.sum()/ this.length;

};
Array.prototype.even = function(number){
    return this.filter(num=>num%2 == 0);
};
Array.prototype.odd = function(number){
    return this.filter(num=>num%2 !== 0);
};
    const numbers = [1, 2, 3, 4, 5];
    console.log('Квадраты:', numbers.square());
    console.log('Кубы:', numbers.cube());
    console.log('Сумма:', numbers.sum());
    console.log('Среднее:', numbers.average());
    console.log('Чётные:', numbers.even());
    console.log('Нечётные:', numbers.odd());