import express from 'express';
import pool from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtTokens } from '../utils/jwt-helpers.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await pool.query('SELECT * FROM users WHERE email=$1', [email]);

        // Email check
        if (!user.rows.length) return res.status(401).json({ error: "Incorrect Email." });

        // Password check
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password);
        if (!validPassword) return res.status(401).json({ error: "Incorrect Password" });

        // JWT
        // If email & password are correct, return jwt tokens.
        let tokens = jwtTokens(user.rows[0]);
        res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
        res.json(tokens);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

export default router;