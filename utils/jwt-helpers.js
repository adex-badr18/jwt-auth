import jwt from 'jsonwebtoken';

function jwtTokens({ user_id, username, email }) {
    const user = { user_id, username, email };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '40s' });
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '5m' });
    return { accessToken, refreshToken };
}

export { jwtTokens };