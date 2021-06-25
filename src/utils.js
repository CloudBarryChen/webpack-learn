export function getTime() {
    return new Date().getTime();
}

export function debounce(fn) {
    let timer = null;
    return () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, 100);
    }
}