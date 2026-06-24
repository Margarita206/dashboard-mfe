import {PropsWithChildren} from "react";

export const MfeWrap = (props: PropsWithChildren<{ disabled?: boolean }>) => {
    if (props.disabled) return <div/>
    return <div className={'flex flex-col w-full h-full fade-in overflow-hidden'}>{props.children}</div>
}