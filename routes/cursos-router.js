import { Router } from "express";
import cursosController from "../controllers/cursos-controller.js";

//instanciar el ruteador de cursos
const cursosRouter = Router();

//Metodo GET: Listado de cursos
cursosRouter.get('/', cursosController.getCursos)

cursosRouter.get('/:id', cursosController.getCursoById);

cursosRouter.post('/', cursosController.createCurso);

cursosRouter.put('/:id', cursosController.updateCurso);

cursosRouter.delete('/:id', cursosController.deleteCurso);

//OTRA-FORMA
// cursosRouter.route('/id')
//         .get(cursosController.getCursoById)
//         .put(cursosController.updateCurso)
//         .delete(cursosController.deleteCurso);


export default cursosRouter;


