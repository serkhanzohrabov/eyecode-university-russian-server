'use client'
import { useEffect } from "react"

const  GlobalKeydownTracker = (props) => {
 

    const { action} = props;
   

      useEffect(()=>{
       
       
         
      const handleKeyDown = (e) => {
      
            console.log(e.key  + 'pressed');
            if(e.key === 'Escape'){
              action(false)
            }
          
      };
    
       window.document.addEventListener('keydown', handleKeyDown )


       return ()=>{
        window.document.removeEventListener('keydown',handleKeyDown);
       }     

      },[])



      return(<>
           
      </>)
         
    
     
    }



    export default GlobalKeydownTracker;

    
    