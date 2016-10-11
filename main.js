function updateTime() { 

  	
    var now = new Date();
    var hours = now.getHours ();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

  if (minutes < 10) { 
    minutes = '0' + minutes;
  }
  if (seconds < 10) { 
    seconds = '0' + seconds;
  }				

		

  if (hours > 12) { 
    hours = hours - 12;
    hours = '0' + hours;
  }

    
    var currentTime = "#" +hours  + minutes  + seconds ;   

    var myClock = document.getElementById('clock');
    myClock.innerHTML = currentTime;


myClock.style.backgroundColor = ("#" + hours+minutes+seconds);
  };

setInterval(function(){ updateTime() }, 1000);

updateTime()