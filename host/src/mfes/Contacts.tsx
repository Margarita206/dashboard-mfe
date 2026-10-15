import Mfe from "./Mfe.tsx";
import React from "react";

const Faq = () => {
    return <Mfe remoteUrl={'https://localhost:3005/remoteEntry.js'} scope={'contacts_mfe'} component={'./App'}/>
}

export default Faq;