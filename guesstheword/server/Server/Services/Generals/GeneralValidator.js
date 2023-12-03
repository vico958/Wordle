class GeneralValidator{
    constructor(){}
    isWordEmpty(word){

    }
}

function isInputBlank(str) {
    const isWhiteSpacesOnlyRegex = /^\s*$/;
    return (!str || isWhiteSpacesOnlyRegex.test(str));
}

module.exports ={isInputBlank}