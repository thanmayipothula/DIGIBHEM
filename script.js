let day=document.getElementById('days')
let per=document.getElementById('person')
let room=document.getElementById('rt')
let am=document.getElementById('amen')
let adv=document.getElementById('advance')
let rc=document.getElementById('rooms')
let ac=document.getElementById('amenc')
let tc=document.getElementById('total')
let bal=document.getElementById('balance')
let adc=document.getElementById('acharge')
let cal=document.getElementById('f')

function calculate(){
    cal.addEventListener('submit',function(event){
        event.preventDefault();
        roomc();
        ament();
        addcharge();
        totalcost();
        balance();
      });
    }

function roomc(){
    const t=Number(day.value);
    const rtype=room ==='s'? 4000:2500;
    rc.value=t*rtype;
}

function ament(){
    const t=Number(day.value);
    const atype=room ==='l'? 300:1000;
    ac.value=t*atype;
}

function addcharge(){
    if(per.value>2){
        adc.value=(((Number(per.value)-2)*1000)*Number(day.value))/2;
     }
     else{
       adc.value=0;
     }
}

function totalcost(){
     tc.value=Number(rc.value)+Number(ac.value)+Number(adc.value);  
}

function balance(){
    bal.value=Number(tc.value)-Number(adv.value);
}