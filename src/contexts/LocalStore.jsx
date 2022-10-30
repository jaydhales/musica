import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

const db = new Dexie("Collections");

db.version(1).stores({
  collections: "id,data",
  recent: "id,data, timeStamp",
});

const LocalStore = () => {
  const myCollections = useLiveQuery(() => db.collections.toArray(), []);
  const recentlyPlayed = useLiveQuery(() => db.recent.toArray(), []);

  const addToCollections = async (data) => {
    const { id } = data;
    await db.collections.add({
      id,
      data,
    });
  };

  const addToRecent = async (data) => {
    const { id } = data;
    const isInData = recentlyPlayed.filter((data) => data.id === id);
    // Check if data exist and update timestamp if true
    if (isInData.length) {
      await db.recent.update(id, { timeStamp: Date.now() });
    } else {
      await db.recent.add({
        id,
        data,
        timeStamp: Date.now(),
      });
    }

    const oldestItem = recentlyPlayed.sort(
      (a, b) => a.timeStamp - b.timeStamp
    )[0];

    // Limit Storage to only 5 items
    if (recentlyPlayed.length > 5) {
      await db.recent.delete(oldestItem.id);
    }
  };

  const removeFromCollections = async (id) => {
    await db.collections.delete(id);
  };

  return {
    myCollections,
    addToCollections,
    removeFromCollections,
    recentlyPlayed,
    addToRecent,
  };
};

export default LocalStore;
