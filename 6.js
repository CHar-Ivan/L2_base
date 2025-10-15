function toWeirdCase(string) {
    let result = '';
    let index = 0;

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char === ' ') {
            result += ' ';
            index = 0;
        } else {
            if (index === 0) {
                result += char.toUpperCase();
            } else if (index % 2 === 0) {
                result += char.toUpperCase();
            } else {
                result += char.toLowerCase();
            }
            index++;
        }
    }

    return result;
}
