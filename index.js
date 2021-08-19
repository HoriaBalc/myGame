let score=0;
let best=0;
let alegereValoare=[2,2,2,2,2,4,2,2,2,2,2]
function start(){
    makeEmpty();
    score=0;
    let first=Math.floor(Math.random() * 16 +1);   
    let divFirst=document.querySelector("#box"+first);    
    let second=Math.floor(Math.random() * 16 +1); 
    while(second==first)
        second=Math.floor(Math.random() * 16 +1); 
    let divSecond=document.querySelector("#box"+second);

    divFirst.innerHTML=alegereValoare[Math.floor(Math.random()*11)];
    divSecond.innerHTML=alegereValoare[Math.floor(Math.random()*11)];
    console.log("p1: "+first+" p2: "+second);
    let loseMsg=document.querySelector("#gameOver");
    loseMsg.style.display="none";
    let opacity=document.querySelector('#box2048');
    opacity.style.opacity=1;

}

function makeEmpty(){ 
    for(var i=1;i<17;i++){
        let divEl=document.querySelector("#box"+i);
        divEl.innerHTML="";
        console.log(divEl.innerHTML);
    }
}

function addElement(){
    let newEl=Math.floor(Math.random() * 16 +1);
    let divNew=document.querySelector("#box"+newEl); 
    while(divNew.innerHTML!=""){
        newEl=Math.floor(Math.random() * 16 +1);
        divNew=document.querySelector("#box"+newEl); 
    }
    divNew.innerHTML=alegereValoare[Math.floor(Math.random()*11)];
        

}

function right1(){
    let isShifted=false;
    for(var j=0;j<4;j++){
            let linie=[];
            //preluarea a cate o linie
            for(var i=1;i<5;i++){
                let ind=i+j*4;
                linie[i-1]=document.querySelector("#box"+ind).innerHTML;
                //console.log(linie);

            }
            //console.log(linie);

            //shiftarea la dreapta
            for(var i=3;i>0;i--){
                for(var k=i-1;k>=0;k--){
                    if(linie[i]==""&&linie[k]!=""){
                        linie[i]=linie[k];
                        linie[k]="";
                        isShifted=true;
                    }
                }
            }
            console.log(linie);

            //adunare intre elemente catre dreapta
            for(var i=3;i>0;i--){
                if(linie[i-1]==linie[i]&& linie[i]!=""){
                    linie[i]=parseInt(linie[i-1])+parseInt(linie[i]);
                    score+=parseInt(linie[i]);
                    linie[i-1]="";
                    isShifted=true;
                    
                }
            }
            console.log(linie);
            //shiftarea la dreapta
            for(var i=3;i>0;i--){
                for(var k=i-1;k>=0;k--){
                    if(linie[i]==""&&linie[k]!=""){
                        linie[i]=linie[k];
                        linie[k]="";
                        isShifted=true;
                    }
                }
            }
            console.log(linie);
            for(var i=1;i<5;i++){
                let ind=i+j*4;
                document.querySelector("#box"+ind).innerHTML=linie[i-1];
            }
            console.log(linie);
            
        }
        if(isShifted)
           addElement();
    
}

function left1(){
    let isShifted=false;
    for(var j=0;j<4;j++){
            let linie=[];
            //preluarea a cate o linie
            for(var i=1;i<5;i++){
                let ind=i+j*4;
                linie[i-1]=document.querySelector("#box"+ind).innerHTML;
            }
            //shiftarea la stanga
            for(var i=0;i<3;i++){
                for(var k=i+1;k<=3;k++){
                    if(linie[i]==""&&linie[k]!=""){
                        linie[i]=linie[k];
                        linie[k]="";
                        isShifted=true;
                    }
                }
            }
            console.log(linie);
            //adunare intre elemente catre stanga
            for(var i=0;i<3;i++){
                
                    if(linie[i+1]==linie[i]&& linie[i]!=""){
                        linie[i]=parseInt(linie[i+1])+parseInt(linie[i]);
                        linie[i+1]="";
                        isShifted=true;
                        score+=parseInt(linie[i]);

                    }
            }
            console.log(linie);

            //shiftarea la stanga
            for(var i=0;i<3;i++){
                for(var k=i+1;k<=3;k++){
                    if(linie[i]==""&&linie[k]!=""){
                        linie[i]=linie[k];
                        linie[k]="";
                        isShifted=true;
                    }
                }
            }
            console.log(linie);
            for(var i=1;i<5;i++){
                let ind=i+j*4;
                document.querySelector("#box"+ind).innerHTML=linie[i-1];
            }
            console.log(linie);
            
        }
        if(isShifted)
           addElement();   
    
}

function up1(){
    let isShifted=false;
    for(var i=1;i<5;i++){
        let coloana=[];
        for(var j=0;j<4;j++){
            let ind=i+j*4;
            coloana[j]=document.querySelector("#box"+ind).innerHTML; 
        }
            //shiftarea la stanga
            for(var j=0;j<3;j++){
                for(var k=j+1;k<4;k++){
                    if(coloana[k]!=""&&coloana[j]==""){
                        coloana[j]=coloana[k];
                        coloana[k]="";
                        isShifted=true;
                      

                    }
                }
            }
            console.log(coloana);
            //adunare intre elemente catre stanga
            for(var j=0;j<3;j++){
                
                    if(coloana[j+1]==coloana[j]&& coloana[j]!=""){
                        coloana[j]=parseInt(coloana[j+1])+parseInt(coloana[j]);
                        coloana[j+1]="";
                        isShifted=true; 
                        score+=parseInt(coloana[j]);
                    }
            }
            console.log(coloana);

            //shiftarea la stanga
            for(var j=0;j<3;j++){
                for(var k=j+1;k<4;k++){
                    if(coloana[k]!=""&&coloana[j]==""){
                        coloana[j]=coloana[k];
                        coloana[k]="";
                        isShifted=true;
                    }
                }
            }
            console.log(coloana);
            for(var j=0;j<4;j++){
                let ind=i+j*4;
                document.querySelector("#box"+ind).innerHTML=coloana[j];
            }
            console.log(coloana);
            
        }
        if(isShifted)
           addElement();
    
}

function down1(){
    let isShifted=false;
    for(var i=1;i<5;i++){
        let coloana=[];
        for(var j=0;j<4;j++){
            let ind=i+j*4;
            coloana[j]=document.querySelector("#box"+ind).innerHTML; 
        }
            //console.log(linie);

            //shiftarea la dreapta
            for(var j=3;j>0;j--){
                for(var k=j-1;k>=0;k--){
                    if(coloana[k]!=""&&coloana[j]==""){
                        coloana[j]=coloana[k];
                        coloana[k]="";
                        isShifted=true;
                    }
                }
            }
            console.log(coloana);

            //adunare intre elemente catre dreapta
            for(var j=3;j>0;j--){
                if(coloana[j-1]==coloana[j]&& coloana[j]!=""){
                    coloana[j]=parseInt(coloana[j-1])+parseInt(coloana[j]);
                    coloana[j-1]="";
                    isShifted=true;
                    score+=parseInt(coloana[j]);
                    
                }
            }
            console.log(coloana);

            //shiftarea la dreapta
            for(var j=3;j>0;j--){
                for(var k=j-1;k>=0;k--){
                    if(coloana[k]!=""&&coloana[j]==""){
                        coloana[j]=coloana[k];
                        coloana[k]="";
                        isShifted=true;
                    }
                }
            }
            console.log(coloana);
            for(var j=0;j<4;j++){
                let ind=i+j*4;
                document.querySelector("#box"+ind).innerHTML=coloana[j];
            }
            console.log(coloana);
            
        }
        if(isShifted)
           addElement();
    
}

function checkEnd(){
    gameOver=true;
    valoriTabela=[];
    for(var i=1;i<17;i++){
        valoriTabela.push(document.querySelector("#box"+i).innerHTML);
        if(document.querySelector("#box"+i).innerHTML=="")
            gameOver=false;
    }
  
    for(var i=0;i<16;i++){
            if((i%4<3)&&valoriTabela[i]==valoriTabela[i+1]){
                gameOver=false;
            }
               
            if((i%4>0)&&valoriTabela[i]==valoriTabela[i-1]){
                gameOver=false;                 
            }

            if((i>=4)&&valoriTabela[i]==valoriTabela[i-4]){
                gameOver=false;  
            }  
            if((i<12)&&valoriTabela[i]==valoriTabela[i+4]){
                gameOver=false;  
            }     

        
    }
    if(gameOver){
        console.log("GameOver");
        let loseMsg=document.querySelector("#gameOver");
        loseMsg.style.display="inline";
        let opacity=document.querySelector("#box2048");
        console.log(opacity)
        opacity.style.opacity="0.4";


    }
        
    return gameOver;

}

document.addEventListener('keydown', (event)=>{
    var pScore=document.querySelector('#score').innerHTML;
    var pBest=document.querySelector('#best').innerHTML;

    if (event.defaultPrevented) {
    return;
  }
    if (event.key === "ArrowDown"){  
        if (!event.repeat)  
        down1();      
    } else if (event.code === "ArrowUp"){
        if (!event.repeat)
        up1();
    } else if (event.code === "ArrowLeft"){
        if (!event.repeat)
        left1();
    } else if (event.code === "ArrowRight"){
        if (!event.repeat)
        right1();
    }
    pScore="Score: "+score;
    if(best<=score){
        best=score;
    }
    pBest="Score: "+best;
    document.querySelector('#score').innerHTML=pScore;
    document.querySelector('#best').innerHTML=pBest;

    checkEnd();
  event.preventDefault();

},true)




