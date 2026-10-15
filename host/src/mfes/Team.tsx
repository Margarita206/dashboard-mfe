import Mfe from "./Mfe.tsx";
import React from "react";

const Faq = () => {
    return <Mfe remoteUrl={'https://localhost:3004/remoteEntry.js'} scope={'team_mfe'} component={'./App'}/>
}

export default Faq;