import {MfeWrap} from "./MfeWrap";
import {Spin} from "antd";
import {useDynamicFederation} from "../hooks/useDynamicFederation.tsx";

interface IMfeProps {
    scope:string,
    component:string,
    remoteUrl: string,
}

const LoadingComponent = () => {
    return <div className={'w-full h-full overflow-hidden flex flex-col items-center justify-center p-[10px]'}>
        <Spin size={'large'}/>
    </div>
}

const Mfe = (props: IMfeProps & any) => {
    const {scope,component,remoteUrl,...rest} = props
    const Remote = useDynamicFederation(remoteUrl,scope, component)

    if (!Remote) return <LoadingComponent/>
    console.log('remote props', rest)
    return <MfeWrap><Remote {...rest}/></MfeWrap>
}

export default Mfe