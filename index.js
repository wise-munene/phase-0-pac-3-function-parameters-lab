// my first function
function introduction(Aki){
return`Hi, my name is ${Aki}.`;
}
// my second function
function introductionWithLanguage(name,language){
    return`Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguageOptional(Gracie, language = "JavaScript"){
return`Hi, my name is ${Gracie} and I am learning to program in JavaScript.`;    
}
function introductionWithLanguageOptional(Gracie, language="JavaScript"){
    return`Hi, my name is ${Gracie} and I am learning to program in ${language}.`;
}
