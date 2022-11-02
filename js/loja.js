const itens = [

    {
    id: 0,
    nome: 'curso_1',
    img: 'imagens/item1.jpg',
    valor: 200,
    quantidade: 0 
    },
    {
    id: 1,
    nome: 'curso_2',
    img: 'imagens/item2.jpg',
    valor: 100,
    quantidade: 0 
    },
    {
    id: 2,
    nome: 'curso_3',
    img: 'imagens/item3.png',
    valor: 400,
    quantidade: 0
    },

    ]



    function inicializarLoja(){

    var containerProdutos = document.getElementById('produtos');
    itens.map((val)=>{
        /* console.log(val.id); */
        /* console.log(val.nome); */
        /* console.log(val.img); */
        /* console.log(val.valor); */
        /* console.log(val.quantidade); */
        containerProdutos.innerHTML+= `
        
            <div class="produto-single">
                <img src="`+val.img+`" />
                <p> `+val.nome+`   - R$ `+val.valor+`,00</p>
      
                <a class="adicionar" key="`+val.id+`" href="#">Adicionar ao carrinho!</a>
                <br>
                <a class="remover" key="`+val.id+`" href="#">Remover do carrinho!</a>
        
                <br>
            </div>    
        `;

    })

    }  

    inicializarLoja();



    function atualizarCarrinho(){
        /* console.log(itens); */

    var containerCarrinho = document.getElementById('carrinho');

    containerCarrinho.innerHTML = "";    

    itens.map((val)=>{

        if(val.quantidade >0){
        containerCarrinho.innerHTML+= `
        
        <p>Nome: `+val.nome+`   |   Quantidade: `+val.quantidade+`   |   Preço: `+val.valor+`   |   Total: `+val.quantidade*val.valor+`</p>
        <hr>
        
        `;
        }

    })    

    }

    var links = document.getElementsByClassName('adicionar');

    for(var i = 0; i < links.length; i++){

    links[i].addEventListener("click",function(){

            let key = this.getAttribute('key');

                itens[key].quantidade++;

                atualizarCarrinho();

                return false; 

    }) 

    }

    var links = document.getElementsByClassName('remover');

    for(var i = 0; i < links.length; i++){

        links[i].addEventListener("click",function(){

            let key = this.getAttribute('key');

                itens[key].quantidade--;

                atualizarCarrinho();

                return false; 

        }) 

    }