function solucao(letra, palavras) {
	
    let perderam = 0;
    for (let item of palavras){
        if(item[0]!==letra){
            perderam++;
        }
    }console.log(perderam)
}