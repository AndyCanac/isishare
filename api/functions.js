const pool = require("./db");

const selectAllFrom = (table, res) => {
  res.setHeader("Content-Type", "application/json");
  const query = `SELECT * FROM ${table}`;
  pool.query(query, (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ error: "An error occurred while executing the query" });
    } else {
      res.json(results);
    }
  });
};

const selectIdFrom = (table, id, res) => {
  res.setHeader("Content-Type", "application/json");
  const query = `SELECT * FROM ${table} WHERE id = ?`;
  pool.query(query, [id], (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ error: "An error occurred while executing the query" });
    } else {
      res.json(results);
    }
  });
};

const selectIdUserFrom = (table, userId, res) => {
  res.setHeader("Content-Type", "application/json");
  const query = `SELECT * FROM ${table} WHERE user_id = ?`;
  pool.query(query, [userId], (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ error: "An error occurred while executing the query" });
    } else {
      res.json(results);
    }
  });
};

const insertInto = (table, data, res) => {
  res.setHeader("Content-Type", "application/json");
  const query = `INSERT INTO ${table} (${data.colomns}) VALUES (${data.values})`;
  pool.query(query, (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ error: "An error occurred while executing the query" });
    } else {
      res.json({ success: true });
    }
  });
};

const updateInto = (table, data, res) => {
  res.setHeader("Content-Type", "application/json");

  const query = `UPDATE ${table}
  SET ${data.colomns} = ${data.colomns} + ${data.values}
  WHERE id = ${data.id}`;
  pool.query(query, (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ error: "An error occurred while executing the query" });
    } else {
      res.json({ success: true });
    }
  });
};

const changeInto = (table, data, res) => {
  res.setHeader("Content-Type", "application/json");
  const query = `UPDATE ${table}
  SET ${data.colomns} = "${data.values}"
  WHERE id = ${data.id}`;
  pool.query(query, (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ error: "An error occurred while executing the query" });
    } else {
      res.json({ success: true });
    }
  });
};

const deleteIdFrom = (table, id, res) => {
  res.setHeader("Content-Type", "application/json");
  const query = `DELETE FROM ${table} WHERE id = ${id}`;
  pool.query(query, (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ error: "An error occurred while executing the query" });
    } else {
      res.json(results);
    }
  });
};

const deleteUserHandler = async (table, id, res) => {
  res.setHeader("Content-Type", "application/json");
  const query = `CALL delete_user('${id.id}')`;
  pool.query(query, (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ error: "An error occurred while executing the query" });
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  selectAllFrom,
  selectIdFrom,
  selectIdUserFrom,
  insertInto,
  updateInto,
  changeInto,
  deleteIdFrom,
  deleteUserHandler
};
