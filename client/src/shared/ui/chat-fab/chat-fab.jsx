import './style.css';
import { Fab } from "@mui/material";
import { MessagesSquare } from 'lucide-react';

const ChatFab = (props) => {

    const {fn} = props;
    
    return(
        <div className="chat-fab" onClick={fn}>
            <Fab color="primary" size='medium' aria-label="chat" sx={{background:'linear-gradient(45deg, #866bfeff 30%, #1100ffff 90%)'}}>
                <MessagesSquare size={18} />
            </Fab>
        </div>
    )
}

export default ChatFab;