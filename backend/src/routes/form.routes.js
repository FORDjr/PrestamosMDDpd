import { Router } from "express";
import { createForm, getForm, updateForm, deleteForm } from "../controllers/form.controller.js";

const router = Router();

// Ruta para crear formulario
router.post("/", (createForm) => {
  res.send("Formulario enviado");
});

// Ruta para obtener formulario
router.get("/:id", (getForm) => {
  res.send("Formulario");
});

// Ruta para modificar formulario
router.put("/:id", (updateForm) => {
  res.send("Formulario modificado");
});

// Ruta para eliminar formulario
router.delete("/:id", (deleteForm) => {
  res.send("Formulario eliminado");
});

export default router;

