import { useEffect, useState } from 'react'

export default function useTheme() {
    const light = ' #f3ebf6';
    const [mainColor, setmainColor] = useState();
    const [isDark, setisDark] = useState(false);

    useEffect(() => {
        getCurrentTheme();
    }, []);

    const getCurrentTheme = () => {
        const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (darkTheme) {
            setmainColor('black');
            setisDark(true);
            document.documentElement.style.setProperty('--mainColor', 'black');
        } else {
            setmainColor(getComputedStyle(document.documentElement).getPropertyValue('--mainColor'));
        }
    }
    const setTheme = (color) => {
        setmainColor(color);
        document.documentElement.style.setProperty('--mainColor', color);
    }
    const toggleTheme = () => {
        console.log(mainColor)
        if (mainColor === light) {
            document.documentElement.style.setProperty('--mainColor', 'black');
            setmainColor('black');
        } else {

            document.documentElement.style.setProperty('--mainColor', light)
            setmainColor(light);
        }
    }
    const deleteProperty = (ele, proName) => {
        ele.target.style.removeProperty(proName);
    }
    return [mainColor, setmainColor, setTheme, toggleTheme, deleteProperty]
}
