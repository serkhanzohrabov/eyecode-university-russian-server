'use client'
import './style.css';
import { useState } from 'react';
import LiquidButton from '@/shared/ui/liquid-button/liquid-button';
import { X ,ArrowUpRight,Info} from 'lucide-react';
import ChatFab from '@/shared/ui/chat-fab/chat-fab';
import Link from 'next/link';

const SupportChat = () => {

    const [isView, setIsView] = useState(false);

    return (
       <>
       <ChatFab fn={() => { setIsView(current => !current) }}/>

           {isView ?
               <div className="support-chat">
                   <p><Info color='black' size={16} /> Выберите удобный мессенджер </p>
                   <div className='support-chat-links'>
                        <Link href="https://t.me/serkhanzohrabov">       <LiquidButton> Telegram <ArrowUpRight size={12}/>  </LiquidButton></Link>
                        <Link href="https://wa.me/+79283526584">         <LiquidButton> WhatsApp <ArrowUpRight size={12}/></LiquidButton></Link>
                        <Link href="https://vk.com/eyecodeuniversity">   <LiquidButton> VK <ArrowUpRight size={12}/></LiquidButton></Link>
                        <LiquidButton
                            sx={{ position: 'absolute', top: '6%', right: '6%' }}
                            onClick={() => { setIsView(current => !current) }}
                        >
                       <X size={14} />
                   </LiquidButton>
                   </div>
                 
               </div>
               : ''}
       </>
    );
};

export default SupportChat;
