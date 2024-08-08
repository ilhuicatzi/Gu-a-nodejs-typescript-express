export const codeRutas = `
// users.routes.js

import express from 'express';
const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/users', (req, res) => {
    // Lógica para obtener usuarios
});

// Ruta para obtener un usuario por ID
router.get('/users/:id', (req, res) => {
    // Lógica para obtener un usuario específico
});

// Ruta para crear un nuevo usuario
router.post('/users', (req, res) => {
    // Lógica para crear un nuevo usuario
});

// Ruta para actualizar un usuario existente
router.put('/users/:id', (req, res) => {
    // Lógica para actualizar un usuario
});

// Ruta para eliminar un usuario
router.delete('/users/:id', (req, res) => {
    // Lógica para eliminar un usuario
});

export default router;
`

export const codeControladores = `
// users.controllers.js

export const getAllUsers = (req, res) => {
    // Lógica para obtener todos los usuarios
};

export const getUserById = (req, res) => {
    // Lógica para obtener un usuario específico
};

export const createUser = (req, res) => {
    // Lógica para crear un nuevo usuario
};

export const updateUser = (req, res) => {
    // Lógica para actualizar un usuario
};

export const deleteUser = (req, res) => {
    // Lógica para eliminar un usuario
};
`

export const codeIntegracion = `
// users.routes.js

import express from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from './users.controllers';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
`

export const codeEjemploMongo = `
import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import { JwtPayload } from "jsonwebtoken";
import { createAccessToken, decodeToken } from "../libs/jwt";

export const register = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const useFound = await User.findOne({ email });
    if (useFound)
      return res.status(400).json({ message: "The email already exists" });

    const salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: newPassword,
    });
    const savedUser = await newUser.save();

    const token = await createAccessToken({ id: savedUser._id });
    res.cookie("token", token, {
      httpOnly: false, // true in production
      sameSite: "none",
      secure: true, 
    });

    res.json({
      id: savedUser._id,
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      email: savedUser.email,
      createdAt: savedUser.createdAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "User not found" });

    const matchPassword = bcrypt.compareSync(password, userFound.password);
    if (!matchPassword)
      return res.status(400).json({ message: "Invalid password" });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token, {
      httpOnly: false, // true in production
      sameSite: "none",
      secure: true,
    });

    res.json({
      id: userFound._id,
      firstName: userFound.firstName,
      lastName: userFound.lastName,
      email: userFound.email,
      createdAt: userFound.createdAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const profile = async (req: Request, res: Response) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

   try {
    const decoded = await decodeToken(token);

    if (typeof decoded === 'object' && decoded !== null && 'id' in decoded) {
      const existingUser = await User.findById((decoded as JwtPayload).id);
      if (!existingUser) return res.status(401).json({ message: "Unauthorized" });

      res.json({
        id: existingUser._id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        createdAt: existingUser.createdAt,
      });
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
   } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong" });
   }
}

export const logout = async (_req: Request, res: Response) => {
  res.cookie("token", "", {
    expires: new Date(0),
    httpOnly: true,
  });
  res.status(200).json({ message: "Logged out" });
};

export const verify = async (req: Request, res: Response) => {
  //console.log(req.cookies);
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = await decodeToken(token);

    if (typeof decoded === 'object' && decoded !== null && 'id' in decoded) {
      const existingUser = await User.findById((decoded as JwtPayload).id);
      if (!existingUser) return res.status(401).json({ message: "Unauthorized" });

      res.json({
        id: existingUser._id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        createdAt: existingUser.createdAt,
      });
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong" });
  }
};
`