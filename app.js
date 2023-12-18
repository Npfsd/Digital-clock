var ampm=document.getElementById('txt')
function dateTime(){
    const date=new Date()
    
   var hr=date.getHours();
    var min= date.getMinutes();
    var sec=date.getSeconds();
    if(hr>12){
        hr=hr-12
        ampm.innerHTML='PM'
    }
    else if(hr==0){
        hr=12;
    }
    hr=hr<10?'0'+hr:hr;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;
    document.getElementById("hours").innerHTML=hr;
    document.getElementById("min").innerHTML=min;
    document.getElementById("second").innerHTML=sec;
    
   
}

setInterval(dateTime,500)

