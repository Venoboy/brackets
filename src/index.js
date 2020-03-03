module.exports =
function check(str, bracketsConfig) {
    let arr = str.split(''),
        tempArr = [],
        closingBracket = [],
        falseResult = 0;

    arr.forEach(bracket => {
        if (tempArr.length === 0 && bracketsConfig.some((elem) => {
            if (bracket === elem[0]) {
                closingBracket.push(elem[1])
            }
            return bracket === elem[0]
        })) tempArr.push(bracket);
        else if (tempArr.length !== 0) {
            if (bracket === closingBracket[closingBracket.length - 1]) {
                tempArr.pop();
                closingBracket.pop();
            } else if (bracketsConfig.some((elem) => {
                if (bracket === elem[0]) {
                    closingBracket.push(elem[1]);
                }
                return bracket === elem[0]
            })) tempArr.push(bracket);
            else falseResult = 1;

        } else falseResult = 1
    });
return (falseResult === 0 && tempArr.length === 0)
}


