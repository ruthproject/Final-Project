import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

// export default function Timer({ begin }: any) {

//     const [value, setValue] = useState("0:00");
//     const [counter, setCounter] = useState(0);

//     var seconds: any; var time: any;

//     useEffect(() => {
//         var timer = setInterval(() => {
//             setCounter(counter + 1)
//             seconds = Math.max(0, getSecondsFromHHMMSS(counter.toString()));
//             time = toHHMMSS(seconds);
//             setValue(time)
//         }, 1000)
//         return () => clearInterval(timer)
//     })
//     const getSecondsFromHHMMSS = (value: any) => {
//         const [str1, str2, str3] = value.split(":");

//         const val1 = Number(str1);
//         const val2 = Number(str2);
//         const val3 = Number(str3);

//         if (!isNaN(val1) && isNaN(val2) && isNaN(val3)) {
//             return val1;
//         }

//         if (!isNaN(val1) && !isNaN(val2) && isNaN(val3)) {
//             return val1 * 60 + val2;
//         }

//         if (!isNaN(val1) && !isNaN(val2) && !isNaN(val3)) {
//             return val1 * 60 * 60 + val2 * 60 + val3;
//         }

//         return 0;
//     };

//     const toHHMMSS = (secs: any) => {
//         const secNum = parseInt(secs.toString(), 10);
//         const hours = Math.floor(secNum / 3600);
//         const minutes = Math.floor(secNum / 60) % 60;
//         const seconds = secNum % 60;

//         return [hours, minutes, seconds]
//             .map((val) => (val < 10 ? `0${val}` : val))
//             .filter((val, index) => val !== "00" || index > 0)
//             .join(":")
//             .replace(/^0/, "");
//     };
//     return (
//         <>
//             <h1>{value}</h1>
            
//         </>
//     )
// }

export default function Timer({ begin }: any) {

    const [value, setValue] = useState("0:00");
    const [counter, setCounter] = useState(1);

    var seconds: any; var time: any;

    useEffect(() => {
        var timer = setInterval(() => {
            setCounter(counter + 1)
            seconds = Math.max(0, getSecondsFromHHMMSS(counter.toString()));
            time = toHHMMSS(seconds);
            setValue(time)
        }, 1000)
        return () => clearInterval(timer)
    })

    const getSecondsFromHHMMSS = (value: any) => {
        const [str1, str2] = value.split(":");

        const val1 = Number(str1);
        const val2 = Number(str2);

        if (!isNaN(val1) && isNaN(val2)) {
            return val1;
        }

        if (!isNaN(val1) && !isNaN(val2) ) {
            return val1 * 60 + val2;
        }

        if (!isNaN(val1) && !isNaN(val2) ) {
            return val1 * 60 * 60 + val2 * 60 ;
        }

        return 0;
    };
    const toHHMMSS = (secs: any) => {
        const secNum = parseInt(secs.toString(), 10);
        const hours = Math.floor(secNum / 3600);
        const minutes = Math.floor(secNum / 60) % 60;

        return [hours, minutes]
            .map((val) => (val < 10 ? `0${val}` : val))
            .filter((val, index) => val !== "00" || index >= 0)
            .join(":")
            .replace(/^0/, "");
    };
    return (
        <>
            <h1>{value}</h1>
            
        </>
    )
}
