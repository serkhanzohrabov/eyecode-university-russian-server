import CallBackModal from "@/widgets/callback-modal/ui/call-back";


export default function RootLayout({ children }) {
    return (
      <>
               <CallBackModal/>  
       {children} 
     </>
    );
  }
  