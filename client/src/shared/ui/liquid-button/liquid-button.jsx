import './style.css';
const LiquidButton = ({children,onClick,sx}) => {
    return (
        <button className="liquid-button" onClick={onClick} style={sx}>
          {children}
        </button>
    );
};

export default LiquidButton;