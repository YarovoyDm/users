export const useLocalStorage = (key) => {
    const setItemInLocalStorage = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    const getItemFromLocalStorage = () => {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : undefined;
    };

    const removeItemFromLocalStorage = () => {
        window.localStorage.removeItem(key);
    };

    return { setItemInLocalStorage, getItemFromLocalStorage, removeItemFromLocalStorage };
};