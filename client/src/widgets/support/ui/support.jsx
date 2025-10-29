import styles from '../style/style.module.css';
import { faqData } from "../data/data";
import Accordion from "@/shared/ui/accordion/accordion";
import Container from "@/Components/organisms/Containers/container/Container";
import Link from 'next/link';
export default function Support() {


 
  return (
       <Container>
    <section className={styles.support}>
   
         <h2>Часто задаваемые вопросы</h2>

         <p className={styles.support_subtitle}>
             Это самые популярные вопросы об Eyecode University.
             Не нашли то, что искали?
             <Link href={'https://wa.me/79283526584'}> <span className='link'>Свяжитесь с нашей дружелюбной командой ›</span> </Link>
         </p>

      <div className={styles.container}>
      {faqData.map((item, index) => (
               <Accordion key={index} question={item.question} answer={item.answer} icon={item.icon}/>
      ))}
    </div>
         
    </section>
    </Container>
  );
}