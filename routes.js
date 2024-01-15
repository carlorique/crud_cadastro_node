const express = require('express');
const router = express.Router()
const db = require('./db');


//Endpoint de criacao de aula(create)
router.post('/aulas', (req, res) =>{
    const{nome_aula, descricao} = req.body;

    const query = `INSERT INTO alunos(nome_aula, descricao) VALUES ('${nome_aula}',${descricao})`;

    db.query(query, (err, result) =>{
        if (err){
            res.status(500).send(`Erro ao criar: ${JSON.stringify(err)}`);
        }else{
            res.status(201).send('Aulas criado com sucesso');
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
    const{nome, idade} = req.body;

    const query = `UPDATE alunos SET nome='${nome}', idade=${idade} WHERE id_aluno=${id}`;

    db.query(query,(err, result)=>{
        if (err){
            res.status(500).send('Erro ao atualizar o o aluno');
        }else{
            res.send('Aluno atualizado com sucesso');
        }
    });
});

//Endppoit de exlusao(delete)
router.delete('/alunos/:id', (req, res) =>{
    const {id} = req.params;

    const query = `DELETE FROM alunos WHERE id_aluno=${id}`;

    db.query(query, (err, result) =>{
        if (err) {
            res.status(500).send('Erro ao excluir aluno');
        }else{
            res.send('Aluno excluido com sucesso');
        }
    });
});

module.exports = router; 