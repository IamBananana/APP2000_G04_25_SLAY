import { useState } from "react"

interface IconProps {
    iconName: string;
    onClick?: () => void | ((any : any) => void);
    className?: string;
}

export default function Icon({iconName, onClick = () => {}, className} : IconProps){
        const [hover, setHover] = useState(false);

        const style = {
            color: hover ? "#0d6efd" : "#6c757d",
            transition: "color 0.3s ease, transform 0.3s ease",
            cursor: "pointer",
            caretColor: "transparent"
        } 

    return (
        <i 
            className={`bi bi-${iconName} ${className}`} 
            style={style}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
        ></i>
    )
}