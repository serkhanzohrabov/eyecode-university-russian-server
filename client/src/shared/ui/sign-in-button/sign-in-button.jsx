
import './style.css';

export default function SignInButton({children,click}) {

    

    return (
        <button onClick={()=>{click(current=>!current)}} className="sign-in-button">
            {children}
        </button>
    );

}