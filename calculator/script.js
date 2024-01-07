    var output = document.getElementById('output');
  
    function display(num) {
      output.value =  output.value  + num;
    }
  
    function Clear() {
      output.value = "";
    }
  
    function del() {
      output.value = output.value.slice(0, -1);
    }
  
    function equal() {
      try {
        output.value = eval(output.value);
      } catch {
        alert("Invalid number");
      }
    }
    var tl=gsap.timeline({
      defaults:{
        opacity:0,
        ease:"linear",
        duration:1,
        
      }
    })
    tl.fromTo('.calculator',{
      x:-100,
      width:0,
      
      

    },{
      x:0, 
      width:400,
      opacity:1,
      
    })
    tl.fromTo('.left',{
      x:-100,
      
      

    },{
      x:0, 
      opacity:1,
      duration:0.5,
      
    })
    
    tl.fromTo('.right',{
      x:-100,
      opacity:0,
      

    },{
      x:0, 
      opacity:1,duration:0.5,
      
    })
   