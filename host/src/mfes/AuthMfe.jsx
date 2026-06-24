import React from 'react';
import Mfe from "./Mfe";

const AuthMfe = () => {
    return <Mfe remoteUrl={'https://localhost:3001/remoteEntry.js'} scope={'auth_mfe'} component={'./App'}/>
}

export default AuthMfe