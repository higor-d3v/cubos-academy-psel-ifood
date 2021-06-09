const products =[

    {
    
        nome: "Camiseta",
    
        preco: 7000 // em centavos
    
    },
    
    {
    
        nome: "Tenis",
    
        preco: 8000 // em centavos
    
    },
    
    {
    
        nome: "Relogio",
    
        preco: 15000 // em centavos
    
    }
    
    ];

    function solucao(produtos) {
        //seu codigo aqui

        let totalFaturamento =0;
        let produtosTop =0;
        let faturamentoTop=0;
        let produtosNormais=0;
        
        for(let item of produtos){
           
        const preco= item.preco;
         
        if(item.preco>10000){
           faturamentoTop+=item.preco;
            produtosTop++;
            totalFaturamento+=item.preco
            
           }else{
               produtosNormais++;
               totalFaturamento+=item.preco
               
           }
        }
        const resposta = {
            totalTop:faturamentoTop,
            percentual:faturamentoTop/totalFaturamento
        }
        console.log(resposta);
        
    }
    