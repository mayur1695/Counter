let count=0;

const value=document.querySelector('#value');
const btns=document.querySelectorAll('.btn');
 btns.forEach(function(btn){    
    
    btn.addEventListener('click',function(e){         
     const styles=e.currentTarget.classList;
     if (styles.contains('decrease')) {
         count--;
         value.style.color = "red"
     }
     
        value.textContent=count;
    })
    btn.addEventListener('click',function(e){         
        const styles=e.currentTarget.classList;
        if (styles.contains('increase')) {
            count++;
            value.style.color = "green"
            
            
        }
        
          
           value.textContent=count;
           
       })
       btn.addEventListener('click',function(e){         
        const styles=e.currentTarget.classList;
        if (styles.contains('reset')) {
            count=0;
            value.style.color = "blue"
        }
        
           value.textContent=count;
       })
     });
     