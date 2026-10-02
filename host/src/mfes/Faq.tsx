import Mfe from "./Mfe.tsx";
import React from "react";

const Faq = () => {
    return <Mfe remoteUrl={'https://localhost:3003/remoteEntry.js'} scope={'faq_mfe'} component={'./App'}/>
}

export default Faq;