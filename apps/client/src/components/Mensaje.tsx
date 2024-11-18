import { useMemo } from "react";

type MessageProps = {
    text: string;
};

const Message = ({ text }: MessageProps): JSX.Element => {
    /*const mensaje = useMemo(() => {
        console.log("Generando mensaje");
        return text;
    }, [text]);*/

    const mensaje = getMensaje();
    function getMensaje() {
        console.log("generando mensaje");
        return text;
    }

    return <h1>{mensaje}</h1>;
};

export default Message;
