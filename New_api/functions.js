const pool = require('./db');

const selectAllFrom = (table, res) => {
    res.setHeader('Content-Type', 'application/json');
    const query = `SELECT * FROM ${table}`;
    pool.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'An error occurred while executing the query' });
        } else {
            res.json(results);
        }
    });
};


const selectIdFrom = (table, req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const id = Number(req.params.id);
    const query = `SELECT * FROM ${table} WHERE id = ${id}`;
    pool.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'An error occurred while executing the query' });
        } else {
            res.json(results);
        }
    });
};


const login = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    pool.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'An error occurred while executing the query' });
        } else {
            if (results.length > 0) {
                res.json({ success: true });
            } else {
                res.json({ success: false });
            }
        }
    });
}

module.exports = { selectAllFrom, selectIdFrom };