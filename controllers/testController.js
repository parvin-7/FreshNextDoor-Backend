// controllers/testController.js
import { db } from '../configs/firebaseAdmin.js';

export const addTestData = async (req, res) => {
  try {
    const docRef = await db.collection('testCollection').add({
      name: 'Water Bottle',
      price: 140,
    });
    res.status(200).send(`Document written with ID: ${docRef.id}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getTestData = async (req, res) => {
  try {
    const snapshot = await db.collection('testCollection').get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
