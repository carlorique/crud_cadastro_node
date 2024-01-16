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