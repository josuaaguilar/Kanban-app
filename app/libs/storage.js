export default storage => ({
    get(k) {
        try {
            return JSON.parse(storage.getItem(k));
        } catch (error) {
            return null;
        }
    },
    set(k, v) {
        storage.setItem(k, JSON.stringify(v));
    }
})