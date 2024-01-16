const express = require('express');
const router = express.Router()
const db = require('./db');


//Endpoint de criacao de aula(create)
router.post('/aulas', (req, res) =>{
    const{nome_aula, descricao} = req.body;

    const query = `INSERT INTO aulas(nome_aula, descricao) VALUES ('${nome_aula}','${descricao}')`;

    db.query(query, (err, result) =>{
        if (err){
            res.status(500).send(`Erro ao criar: ${JSON.stringify(err)}`);
        }else{
            res.status(201).send('Aulas criadas com sucesso');
        }
    });
});

//Endppoit de leitura leitura(read)
router.get('/aulas', (req, res) =>{
    const query = "SELECT * FROM aulas";

    db.query(query, (err, result) =>{
        if (err){
            res.status(500).send(`Erro ao obter aulas: ${JSON.stringify(err)}`);
        }else{
            res.json(result);
        }
    });
});

//Endppoit de atualizacao de aula(update)
router.put('/aulas/:id', (req, res) =>{
    const {id} = req.params;
    const{nome_aula, descricao} = req.body;

    const query = `UPDATE aulas SET nome_aula='${nome_aula}', descricao='${descricao}' WHERE id_aula=${id}`;

    db.query(query,(err, result)=>{
        if (err){
            res.status(500).send('Erro ao atualizar aulas');
        }else{
            res.send('Aulas atualizadas com sucesso');
        }
    });
});

//Endppoit de exlusao(delete)
router.delete('/aulas/:id', (req, res) =>{
    const {id} = req.params;

    const query = `DELETE FROM aulas WHERE id_aula=${id}`;

    db.query(query, (err, result) =>{
        if (err) {
            res.status(500).send('Erro ao excluir aulas');
        }else{
            res.send('Aulas excluidas com sucesso');
        }
    });
});
//-----------------------------------ALUNOS---------------------------------
router.post('/alunos', (req, res) =>{
    const {nome, idade} = req.body;

    const query = `INSERT INTO alunos(nome, idade) VALUES('${nome}',${idade})`;

    db.query(query, (err, result) =>{
        if (err){
            res.status(500).send(`Erro ao criar: ${JSON.stringify(err)}`);
        }else{
            res.status(201).send('Alunos criados com sucesso');
        }
    });
});

//Endppoit de leitura leitura(read)
router.get('/alunos', (req, res) =>{
    const query = "SELECT * FROM alunos";

    db.query(query, (err, result) =>{
        if (err){
            res.status(500).send(`Erro ao obter alunos: ${JSON.stringify(err)}`);
        }else{
            res.json(result);
        }
    });
});

//Endppoit de atualizacao de aula(update)
router.put('/alunos/:id', (req, res) =>{
    const {id} = req.params;
    const{nome, idade} = req.body;

    const query = `UPDATE alunos SET nome='${nome}', idade=${idade} WHERE id_aluno=${id}`;

    db.query(query,(err, result)=>{
        if (err){
            res.status(500).send('Erro ao atualizar alunos');
        }else{
            res.send('Alunos atualizados com sucesso');
        }
    });
});

//Endppoit de exlusao(delete)
router.delete('/alunos/:id', (req, res) =>{
    const {id} = req.params;

    const query = `DELETE FROM alunos WHERE id_aluno=${id}`;

    db.query(query, (err, result) =>{
        if (err) {
            res.status(500).send('Erro ao excluir alunos');
        }else{
            res.send('Alunos excluidos com sucesso');
        }
    });
});

router.put

module.exports = router; 