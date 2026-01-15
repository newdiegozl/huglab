import { useCallback } from "react";

const OpDownload = () => {
    const handdlerDownload = useCallback((e)=> {
        console.log(`[handdlerDownload]: ${e}`);
        // change behavior
    }, []) 

    return (
        <div className="border-black border p-5 w-64 h-26 flex flex-col items-start">
            {['huggingface module','wget','curl'].map((e) => (
                <button className={`
                    mono text-lg dark-text-primary
                    hover:underline 
                    `}>{e}</button>
                ))}        
        </div>
    );
}
export default OpDownload