import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

const db = new Dexie("Collections");

db.version(1).stores({
  collections: "id,data",
});

const collectionLogic = () => {
  const myCollections = useLiveQuery(() => db.collections.toArray(), []);

  const addToCollections = async (data) => {
    const { id } = data;
    await db.collections.add({
      id,
      data,
    });
  };

  const removeFromCollections = async (id) => {
    await db.collections.delete(id);
  };

  
    return { myCollections, addToCollections, removeFromCollections };
};

export default collectionLogic;
