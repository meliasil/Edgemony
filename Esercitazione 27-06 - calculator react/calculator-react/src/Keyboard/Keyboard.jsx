import './Keyboard.css';
import { Button } from '../Button/Button';

const buttons = ["AC", "+/-", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", "Reset", 0, ".", "="];

const Keyboard = ({ onButtonClick }) => {
return (
    <div className="keyboard">
    {buttons.map((btn, index) => (
        <Button key={index} value={btn} onClick={onButtonClick} />
    ))}
    </div>
);
};

export {Keyboard};