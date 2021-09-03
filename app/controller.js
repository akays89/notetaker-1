// Uses the db client from loader.js
import { ObjectId } from "mongodb";
import client from "./loader.js";

const notesConnection = client.db("noteTaker").collection("notes");

export default {
  index() {
    return notesConnection.find().toArray();
  },
  create(newNote) {
    // Returns a promise
    return notesConnection.insertOne(newNote);
  },
  update(id, updatedNote) {
    // Returns a promise
    return notesConnection.update({ _id: ObjectId(id) }, { $set: updatedNote });
  },
  show(id) {
    return notesConnection.findOne(ObjectId(id));
  },
  delete(id) {
    return notesConnection.deleteOne({ _id: ObjectId(id) });
  },
  deleteAll() {
    return notesConnection.deleteMany();
  },
};
