function solucao(precos) {
    
    precos.sort(function(a,b){
        if (a>b) return 1;
        if (a<b) return -1;
        return 0;
    })
    
    let produtoMaisBarato = 0
    if(precos.length>4){
        produtoMaisBarato=precos[0]
    }
     let precoFinal = 0
          
       for (let item of precos){
  
        precoFinal+=item;  
            
        }        
       console.log(precoFinal-produtoMaisBarato)
                
}