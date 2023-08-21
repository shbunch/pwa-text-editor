import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    // Create a new row in the 'content' table with the provided content
    await content.create({ text: content });
    console.log('Content added to the database');
  } catch (error) {
    console.error('Error adding content to the database:', error);
  }
  console.error('putDb not implemented');
}


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    // Retrieve all rows from the 'content' table
    const allContent = await Content.findAll();
    return allContent.map(item => item.text); // Extracting the 'text' field from each item
  } catch (error) {
    console.error('Error retrieving content from the database:', error);
    return []; // Return an empty array or handle the error accordingly
  }
  console.error('getDb not implemented');
}

initdb();

