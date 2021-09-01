import Router from "express";
import noteController from "./controller.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World from API");
});

router.get("/notes", async (_, res) => {
  try {
    const notes = await noteController.index();
    res.json(notes);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/notes/:id", async (req, res) => {
  try {
    const note = await noteController.show(req.params.id);
    res.json(note);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/notes", async (req, res) => {
  try {
    const newNote = await noteController.create(req.body);
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

export default router;
