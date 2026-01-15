import { useState } from 'react';
import Header from '@/components/shared/header/Header';
import OpDownload from './OpDownload';
import { Check } from 'lucide-react';

const InterfaceConfig = () => {
    return (
        <div className='w-screen h-screen flex flex-col items-center dark-bg-primary'>
            <Header />
            <h1 className={`
                font-bold mono 
                text-2xl dark-text-primary 
                justify-center 
                mb-2 mt-4
                `}>download options</h1>
            <p className={`
                mb-4
                dark-text-primary
                text-xs
                `}>choose the standard way to download the models.</p>
            <OpDownload/>
        </div>
    ) 
}

export default InterfaceConfig;