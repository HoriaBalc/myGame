function start(){
    makeEmpty();
    let first=Math.floor(Math.random() * 16 +1);   
    let divFirst=document.querySelector("#box"+first);    
    let second=Math.floor(Math.random() * 16 +1); 
    while(second==first)
        second=Math.floor(Math.random() * 16 +1); 
    let divSecond=document.querySelector("#box"+second);
    divFirst.innerHTML=2;
    divSecond.innerHTML=2;
    console.log("p1: "+first+" p2: "+second);

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
    divNew.innerHTML=2;
        

}

function right(){
    //parte comuna
    let isShifted=false;
        for(var j=0;j<4;j++){
            let linie=[];
            for(var i=1;i<5;i++){
                let ind=i+j*4;
                linie[i-1]=document.querySelector("#box"+ind).innerHTML;
            }
    //parte diferita    
        
            for(var i=4;i>0;i--){
                for(var k=i-1;k>=0;k--){
                    if(linie[i]=="" && linie[k]!=""){
                        linie[i]=linie[k];
                        linie[k]="";
                        isShifted=true;
                    } else if(linie[i]!="" && linie[k]==linie[i]){
                        linie[k]=parseInt(linie[k])+parseInt(linie[i]);
                        linie[i]="";
                    }

                }
            }

            for(var i=1;i<5;i++){
                let ind=i+j*4;
                document.querySelector("#box"+ind).innerHTML=linie[i-1];
            }
            console.log(linie);
            
        }
        if(isShifted)
           addElement();
    
    }

    function left(){
        //parte comuna
        let isShifted=false;
        for(var j=0;j<4;j++){
            let linie=[];
            for(var i=1;i<5;i++){
                let ind=i+j*4;
                linie[i-1]=document.querySelector("#box"+ind).innerHTML;
            }
        //parte diferita    
            
                for(var i=3;i>0;i--){
                    for(var k=i-1;k>=0;k--){
                        if(linie[i]!="" && linie[k]==""){
                            linie[k]=linie[i];
                            linie[i]="";
                            isShifted=true;
                        }  
                    }
    
                    for(var k=i-1;k>=0;k--){
                        var spatii=k-i;
                        let canAdd=false;
                        if(linie[i]==linie[k] && linie[i]!=""){
                            if((spatii==3 && linie[i+spatii-2]=="" && linie[i+spatii-1]=="")||(spatii==2 && linie[i+spatii-1]=="")||spatii<3)
                                canAdd=true;
                            if(canAdd){
                                linie[k]=parseInt(linie[k])+parseInt(linie[i]);
                                linie[i]="";
                                isShifted=true;
                            }
                            
                        }     
                    }
                }
    
                for(var i=1;i<5;i++){
                    let ind=i+j*4;
                    document.querySelector("#box"+ind).innerHTML=linie[i-1];
                }
                console.log(linie);
                
            }
            
            if(isShifted)
                addElement();
        }    

        function up(){
            //parte comuna
            let isShifted=false;
            
            for(var i=1;i<5;i++){
                let coloana=[];
                for(var j=0;j<4;j++){
                    let ind=i+j*4;
                    coloana[j]=document.querySelector("#box"+ind).innerHTML; 
                }

                for(var j=3;j>0;j--){
                    for(var k=j-1;k>=0;k--){
                        if(coloana[j]!="" && coloana[k]==""){
                            coloana[k]=coloana[j];
                            coloana[j]="";
                            isShifted=true;
                        }  
                    }
    
                    for(var k=j-1;k>=0;k--){
                        if(coloana[j]==coloana[k]&&coloana[j]!=""){
                            coloana[k]=parseInt(coloana[k])+parseInt(coloana[j]);
                            coloana[j]="";
                            isShifted=true;
                        }           
                    }
                }
    
                for(var j=0;j<4;j++){
                    let ind=i+j*4;
                    document.querySelector("#box"+ind).innerHTML=coloana[j];
                }
                console.log(coloana);
            }
                
            

            
        if(isShifted)            
            addElement();     
        }          


        function down(){
            //parte comuna
            let isShifted=false;
            
            for(var i=1;i<5;i++){
                let coloana=[];
                for(var j=0;j<4;j++){
                    let ind=i+j*4;
                    coloana[j]=document.querySelector("#box"+ind).innerHTML; 
                }

                
                
            for(var j=0;j<=3;j++){
                for(var k=j+1;k<4;k++){
                    if(coloana[j]!="" && coloana[k]==""){
                        coloana[k]=coloana[j];
                        coloana[j]="";
                        isShifted=true;
                    }  
                }

                for(var k=j+1;k<4;k++){
                    if(coloana[j]==coloana[k]&&coloana[j]!=""){
                        coloana[k]=parseInt(coloana[k])+parseInt(coloana[j]);
                        coloana[j]="";
                        isShifted=true;
                    }           
                }
            }

            for(var j=0;j<4;j++){
                    let ind=i+j*4;
                    document.querySelector("#box"+ind).innerHTML=coloana[j];
                }

            console.log(coloana);
        }

            
        if(isShifted)            
            addElement();     
        }          

