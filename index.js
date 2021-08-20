let score=0;
let win=false;
let alegereValoare=[2,2,2,2,2,4,2,2,2,2,2];
const oldBest=localStorage.getItem('Best');
let best=0;
let isblocked=false;
function init(){
    if(best<oldBest){
        best=oldBest;
    }
    win=false;
    let pBest=document.querySelector('#best').innerHTML;
    pBest="Best: "+best;
    document.querySelector('#best').innerHTML=pBest;
    changeColor();

}
init();
function start(){
    makeEmpty();
    score=0;
    win=false;
    if(best<oldBest){
        best=oldBest;
    }
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
    changeColor();

}

function reactivate(){
    let loseMsg=document.querySelector("#win");
    loseMsg.style.display="none";
    let opacity=document.querySelector('#box2048');
    opacity.style.opacity=1;
    isblocked=false;
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
        changeColor();
        checkEnd();
        checkWin();   
          
    
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
        changeColor();
        checkEnd();
        checkWin();   
       
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
        changeColor();
        checkEnd();
        checkWin();   
       
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
           
        changeColor();
        checkEnd();
        checkWin();   
    
}

function checkWin(){
    for(var i=1;i<17;i++){
        let defaultColor=document.querySelector("#box"+i).innerHTML;
        if(defaultColor=="2048" && !win){
            win=true;
            let divWin=document.querySelector('#win');
            divWin.style.display="inline";
            let opacity=document.querySelector('#box2048');
            opacity.style.opacity=0.4;
            isblocked=true;
        }
            
    }
}

function changeColor(){
    for(var i=1;i<17;i++){
        let defaultColor=document.querySelector("#box"+i);
        switch(defaultColor.innerHTML){
            case "":defaultColor.style.backgroundColor='#fb8500';
                    break;
            case "2": defaultColor.style.backgroundColor="#d9ed92";
                    break;
            case "4": defaultColor.style.backgroundColor="#b5e48c";
                    break;
            case "8": defaultColor.style.backgroundColor="#99d98c";
                    break;        
                    
            case "16": defaultColor.style.backgroundColor="#76c893";
                    break;        
            case "32": defaultColor.style.backgroundColor="#52b69a";
                    break;        
            case "64": defaultColor.style.backgroundColor="#34a0a4";
                    break;        
            case "128": defaultColor.style.backgroundColor="#168aad";
                    break;        
            case "256": defaultColor.style.backgroundColor="#1a759f";
                    break;        
            case "512": defaultColor.style.backgroundColor="#1e6091";
                    break;        
            case "1024": defaultColor.style.backgroundColor="#184e77";
                    break;        
            case "2048": defaultColor.style.backgroundColor="#ccff33";
                    break;        
            case "4096": defaultColor.style.backgroundColor="#9ef01a";
                    break;        
            case "8192": defaultColor.style.backgroundColor="#70e000";
                    break; 
            case "16384": defaultColor.style.backgroundColor="#38b000";
                    break; 
            case "32768": defaultColor.style.backgroundColor="#008000";
                    break; 
            case "65536": defaultColor.style.backgroundColor="#006400";
                    break; 
            case "131072": defaultColor.style.backgroundColor="#004b23";
                    break; 

                    
        }
    }
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
        if(best==score){
            let highScore=document.querySelector("#highscore");
            highScore.style.display="inline";
        }
        let opacity=document.querySelector("#box2048");
        console.log(opacity)
        opacity.style.opacity="0.4";


    }

    return gameOver;
}

const slider=document.querySelector('#box2048');
slider.addEventListener('touchstart', touchStart);
slider.addEventListener('touchend', touchEnd);
slider.addEventListener('touchmove', touchMove);
let startPosX;
let startPosY;
let movePosX;
let movePosY;
function touchStart(event){      
    
    startPosX=getPositionX(event);
    startPosY=getPositionY(event);

    console.log('startX:'+ startPosX + 'startY:'+ startPosY);
}


function touchMove(event){
    console.log('move');
    movePosX=getPositionX(event);
    movePosY=getPositionY(event);
    console.log('moveX:'+ movePosX + 'moveY:'+ movePosY);
}

function touchEnd(event){
    if(Math.abs(movePosY-startPosY)>Math.abs(movePosX-startPosX)){
        if(movePosY-startPosY>=0){
            down1();
        }
        else up1();
    }else{
        if(movePosX-startPosX>=0){
            right1();
        }
        else left1();
    }
    
}

function getPositionX(event){
    return event.type.includes('mouse') ? event.pageX: event.touches[0].clientX;
}

function getPositionY(event){
    return event.type.includes('mouse') ? event.pageY: event.touches[0].clientY;
}

function getEndPositionX(event){
    return event.type.includes('mouse') ? event.pageX: event.touches[0].clientX;
}

function getEndPositionY(event){
    return event.type.includes('mouse') ? event.pageY: event.touches[0].clientY;
}


document.addEventListener('keydown', (event)=>{
    let pScore=document.querySelector('#score').innerHTML;
    let pBest=document.querySelector('#best').innerHTML;

    if (event.defaultPrevented) {
    return;
  }
    if(!isblocked){
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
    }
    pScore="Score: "+score;
    if(best<=score){
        best=score;
        localStorage.setItem('Best',best);
    }
    pBest="Best: "+best;
    document.querySelector('#score').innerHTML=pScore;
    document.querySelector('#best').innerHTML=pBest;
    changeColor();
    checkEnd();
    checkWin();
  event.preventDefault();

},true)
