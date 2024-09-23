import { useEffect, useState } from "react";

function useCount() {
    const [count, setCount] = useState(0)

    useEffect((() => {
        const saveCount = localStorage.getItem('count')
        if (saveCount) {
            setCount(Number(saveCount))
        }
    }), [])

    function increment() {
        return setCount(count + 1)
    }

    function deccrement() {
        return setCount(count - 1)
    }


}