export const debounce = (fn: Function, delay: number) => {
    let timer: null | ReturnType<typeof setTimeout> = null;
    return function (...args: unknown[]) {
        const context = this;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
};
