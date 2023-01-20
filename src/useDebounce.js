import  { useEffect, useRef } from 'react'

export default function useDebounce(cb, delay, dep) {
    let timeOut = useRef();
    useEffect(() => {
        clearTimeout(timeOut);
        timeOut = setTimeout(cb, delay);
    }, [dep])
}
