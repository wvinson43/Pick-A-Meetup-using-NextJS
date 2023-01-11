import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup
const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_MONGODB_URI
    );
    const db = client.db();

    const meetupsCollection = db.collection('mymeetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  } else if (req.method === 'DELETE') {
    const data = req.body;
    const client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_MONGODB_URI
    );
    const db = client.db();

    const meetupsCollection = await db.collection('meetups');
    try {
      await meetupsCollection.deleteOne({ _id: ObjectId(data) });
    } catch (event) {
      print(event);
    }

    client.close();
    res.status(201).json({ message: 'Meetup deleted!' });
  }
};

export default handler;
