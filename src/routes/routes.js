const express = require('express');
const router = express.Router();

const {
    Alumno
} = require('../models/alumno');
const {
    Curso
} = require('../models/curso');

router.get('/', (req, res) => {
    res.status(200).send('Hola desde rutas')
});

// Create
router.post('/devf/api/v1/cursos', (req, res) => {
    const json = req.body;
    const nuevoCurso = Curso(json);

    nuevoCurso.save((err, curso) => {
        err
            ?
            res.status(409).send(err) :
            res.status(420).send(curso)
    });
})

// read
router.get('/devf/api/v1/cursos', (req, res) => {
    Curso
        .find()
        .exec()
    then(curso => {
            releaseEvents.status(200).send(curso)
        })
        .catch(error => res.status(404).error(error))
})

// read an specific element by ID
router.get('/devf/api/v1/cursos/:id', (req, res) => {
    const cursoId = req.params.id;
    Curso
        .findById(cursoId)
        .exec()
        .then(curso => {
            res.status(200).send(curso)
        })
        .catch(error => res.status(404).error(error))
})

//update

router.put('/devf/api/v1/cursos/:id', (req, res) => {
    const cursoId = req.params.id;
    const json = req.body;
    Curso
        .findOneAndUpdate(
            cursoId, {
                $set: json
            }, {
                new: true
            })
        .exec()
        .then(cursoActualizado => {
            res.status(200).send(cursoActualizado)
        })
        .catch(error => res.status(400).send(error))
})


//delete

router.delete('/devf/api/v1/cursos/:id', (req, res) => {
    const cursoId = req.params.id
    Curso
        .findByIdAndRemove(cursoId)
        .exec()
        .then(cursoEliminado => {
            res.status(204).send({message:'El curso se borró exitosamente'});
        })
        .catch(error => res.status(404).send(error));

})

//---------------------------------------------------------------

// Create alumno
router.post('/devf/api/v1/alumno', (req, res) => {
    const json = req.body;
    const nuevoAlumno = Alumno(json);

    nuevoAlumno.save((err, alumno) => {
        err
            ?
            res.status(409).send(err) :
            res.status(420).send(alumno)
    });
})

// read
router.get('/devf/api/v1/alumno', (req, res) => {
    Curso
        .find()
        .exec()
    then(curso => {
            releaseEvents.status(200).send(curso)
        })
        .catch(error => res.status(404).error(error))
})

router.get('/devf/api/v1/alumno/:id', (req, res) => {
    const alumnoId = req.params.id;
    Alumno
        .findById(alumnoId)
        .exec()
        .then(alumno => {
            res.status(200).send(alumno)
        })
        .catch(error => res.status(404).error(error))
})

//update

router.put('/devf/api/v1/alumno/:id', (req, res) => {
    const alumnoId = req.params.id;
    const json = req.body;
    Alumno
        .findByIdAndUpdate(
            alumnoId, {
                $set: json
            }, {
                new: true
            })
        .exec()
        .then(alumnoActualizado => {
            res.status(200).send(alumnoActualizado)
        })
        .catch(error => res.status(400).send(error))
})

//delete

router.delete('/devf/api/v1/alumno/:id', (req, res) => {
    const alumnoId = req.params.id
    Alumno
        .findByIdAndRemove(alumnoId)
        .exec()
        .then(alumnoEliminado => {
            res.status(204).send({message:'El alumno se borró exitosamente'});
        })
        .catch(error => res.status(404).send(error));

})








module.exports = router;