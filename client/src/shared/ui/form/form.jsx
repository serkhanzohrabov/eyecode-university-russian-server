import { useState} from 'react';
import style from './style.module.css';
import Image from 'next/image';
import { Flame,BadgeCheck,Gift,User2,Gem } from 'lucide-react';
import Form from 'next/form';
import CustomPhoneInput from '../phone-number-input/phone-number-input';
import GlobalKeydownTracker from '@/widgets/callback-modal/utils/globalKeydownTracker';
import { X } from 'lucide-react';
const ClassicForm = (props) => {

   const {setFormIsActive,handleAction} = props;


    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
     
    const  handleSubmit = async (e) => {
              setLoading(true)
              e.preventDefault();
              console.log({name,number})
              handleAction();
              setLoading(false);

        try{
            
            const res =  await fetch('/api/hello',{
                method:'POST',
                headers:{
                  'Content-Type':'application/json'
                },
                body:JSON.stringify({name,number})
              })


              const data = await res.json()
              setResponse(data);
     
        }catch(err){
          console.log(err)

        }
  

      }
    

    return(
      <div 
        
        className={style.form_overlay}
        >
          <GlobalKeydownTracker action={setFormIsActive}/>
          <div className={style.form} > 
            <X size={20} className={style.form_close}  onClick={() => {
          setFormIsActive(false);
        }}/>
                  <Image
                    src={'/gh.jpg'}
                    width={200}
                    height={200}
                    alt='github'

                    />
                  <h4>Добро пожаловать на 3х дневное обучение, под названием Your first Journey!</h4>
                  <p className={style.form_subtitle}>Как мы можем к вам обращаться ?</p>
              
              <div className={style.course_name}>
                
                    <Flame color='orangered'/>
                    
                    <div>
                      <p className={style.course_name_title}>#ИскусственныйИнтеллект #РазработкаИгры</p>  
                      <p className={style.course_name_duration}>Длительность 3д</p>
                    </div> 

                    <BadgeCheck color='greenyellow'/>
                    
                    

              </div>

                  <div className={style.course_name}>
                
                  
                      <Flame color='orangered'/>
                          <h6>Секретный подарок </h6>
                      <Gift color='blue'/>
                    
                    

              </div>
              
                <Form action="#" className={style.form_input}>
          
                <div className={style.form_username}> <User2 color='gray' /> <input required placeholder='@ваше_имя' onChange={(e)=>{setName(e.target.value)}} name="username" /></div>

                <CustomPhoneInput onChange={setNumber} />

            <button type="submit" onClick={(e)=>{
              handleSubmit(e);
            }}>Записаться <Gem size={18}/> </button>
          </Form>
                  

          </div>

      </div>
          )
}




export default ClassicForm;