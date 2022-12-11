export namespace CacheError {
    export const client = new Error("Unable to create client");
    export const get = new Error("Unable to get value");
    export const getAll = new Error("Unable to get all values");
    export const create = new Error("Unable to create value");
    export const update = new Error("Unable to update value");
    export const remove = new Error("Unable to remove value");
    export const removeAll = new Error("Unable to remove all values");
}