import {ComponentType, useEffect, useState} from "react";
import axios from "axios";

//@ts-ignore
const MODE = process.env.MODE
// const MODE = import.meta.env.MODE
console.log('mode', MODE)
const remotesSourceUrl = MODE === 'development' ? String(process.env.VITE_MFE_REMOTES_SOURCE) : '__VITE_MFE_SOURCES_IP__'/*'http://192.168.101.27:31130/'*/

const client = axios.create({
    baseURL: remotesSourceUrl
})

// Функция для динамической загрузки remoteEntry.js
const loadRemoteEntry = async (scope: string, url: string) => {
    //@ts-ignore
    if (window[scope]) return; // Уже загружен

    // Создаем script-тег для загрузки remoteEntry.js
    await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });

    //@ts-ignore
    console.log(scope, window[scope])
    // Инициализируем remote в Module Federation
    // @ts-ignore
    await window[scope].init(__webpack_share_scopes__.default);
};

export const useDynamicFederation = (remoteUrl:string, scope: string, component: string) => {
    const [Component, setComponent] = useState<ComponentType | null>(null)
    // const [remoteUrl, setRemoteUrl] = useState<string | null>(null);
    //
    // useEffect(() => {
    //     console.log('fetching...')
    //     client.get<{ remotes: Record<string, string> }>('/remotes/current').then(response => {
    //         const remotes = response.data.remotes
    //         console.log('remote_url', remotes[scope], scope)
    //         setRemoteUrl(remotes[scope])
    //     })
    // }, [scope]);

    useEffect(() => {
        const loadComponent = async () => {
            try {
                if (!remoteUrl || !remoteUrl.length) return;

                await loadRemoteEntry(scope, remoteUrl)

                // 2. Получаем контейнер модуля
                //@ts-ignore
                const container = window[scope];
                console.log('container', container)
                const factory = await container.get(component);
                const module = factory();

                setComponent(() => module.default || module);
            } catch (e) {
                console.log('scope', scope)
                console.error(e)
            }
        }
        loadComponent();
    }, [remoteUrl, scope, component]);

    return Component
}