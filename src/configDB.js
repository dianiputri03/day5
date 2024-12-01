import { openDB } from 'idb';

export const initializeDB = async () => {
    return openDB('UserDatabase', 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('users')) {
                db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
            }
        },
    });
};

export const addUserToDB = async (user) => {
    const db = await initializeDB();
    await db.add('users', user);
    console.log('User added to IndexedDB:', user);
};
