
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const todosRoutes = express.Router();
const prisma = new PrismaClient();

// C
todosRoutes.post("/", async (request, response) => { 
    const { name, description, dueDate } = request.body;
    if (!name || !description || !dueDate) {
        return response.status(400).json("Name, description, and due date are mandatory");
    }

    const todo = await prisma.todo.create({
        data: {
            name,
            description,
            dueDate: new Date(dueDate),
        },
    });

    return response.status(201).json(todo);
});

// R
todosRoutes.get("/", async (request, response) => { 
    const { status } = request.query;
    let todos;

    if (status !== undefined) {
        const statusBoolean = status === "true";
        todos = await prisma.todo.findMany({
            where: { status: statusBoolean },
        });
    } else {
        todos = await prisma.todo.findMany();
    }

    return response.status(200).json(todos);
});

// U
todosRoutes.put("/", async (request, response) => { 
    const { id, name, description, dueDate, status } = request.body;

    if (!id) {
        return response.status(400).json("id is mandatory");
    }

    const todoAlreadyExist = await prisma.todo.findUnique({ where: { id } });

    if (!todoAlreadyExist) {
        return response.status(404).json("todo not exist");
    }

    const todo = await prisma.todo.update({
        where: { id },
        data: {
            name: name || undefined,
            description: description || undefined,
            dueDate: dueDate ? new Date(dueDate) : undefined,
            status: status !== undefined ? status : undefined,
        },
    });

    return response.status(200).json(todo);
});

// D
todosRoutes.delete("/:id", async (request, response) => { 
    const { id } = request.params;
    const intId = parseInt(id);

    if (!intId) {
        return response.status(400).json("id is mandatory");
    }

    const todoAlreadyExist = await prisma.todo.findUnique({
        where: { id: intId },
    });

    if (!todoAlreadyExist) {
        return response.status(404).json("todo not exist");
    }

    await prisma.todo.delete({ where: { id: intId } });
    return response.status(200).send();
});

module.exports = todosRoutes;
