const db = require('../db');

class Category {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM Category');
    return rows;
  }

  static async create(name) {
    return db.query('INSERT INTO Category (CategoryName) VALUES (?)', [name]);
  }

  static async delete(id) {
    return db.query('DELETE FROM Category WHERE CategoryId = ?', [id]);
  }
}

module.exports = Category;
