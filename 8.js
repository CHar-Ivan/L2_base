function expandedForm(num) {
    let str = '' + num;
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '0') {
            if (result) result += ' + ';
            result += str[i] + '0'.repeat(str.length - i - 1);
        }
    }

    return result;
}
