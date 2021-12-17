export const delay = (ms:number) => {
    return new Promise<number>(resolve => setTimeout(()=>resolve(ms), ms));
}