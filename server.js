import Fastify from 'fastify';
import cors from '@fastify/cors';

async function start() {
    const servidor = Fastify();

    await servidor.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
});
};

//-----------------------------------------------------------------------------

servidor.get('/produtos', async (request, reply) => {
    return reply.status(200).send({id: 1, nome: 'Produto 1', preco: 10.99});
});

servidor.post('/produtos', async (request, reply) => {
    const tema = request.body.tema;
    if (!tema) {
        return reply.status(400).send({error: 'O campo "tema" é obrigatório.'});
    };
    return reply.status(200).send({id: 1, nome: `Produto relacionado a ${tema}`, preco: 10.99});
});

//-----------------------------------------------------------------------------

servidor.listen({
  port: process.env.PORT || 3000,
  host: '0.0.0.0'
});

start();