const db = require('../db');

class Product {
    static async getAll(offset, limit) {
        const [rows] = await db.query(
          `SELECT p.ProductId, p.ProductName, c.CategoryName, c.CategoryId
           FROM Product p
           JOIN Category c ON p.CategoryId = c.CategoryId
           ORDER BY p.ProductId ASC
           LIMIT ?, ?`,
          [offset, limit]
        );
        return rows;
      }
      

  static async create(name, categoryId) {
    return db.query('INSERT INTO Product (ProductName, CategoryId) VALUES (?, ?)', [name, categoryId]);
  }

  static async delete(id) {
    return db.query('DELETE FROM Product WHERE ProductId = ?', [id]);
  }

  static async count() {
    const [rows] = await db.query('SELECT COUNT(*) AS total FROM Product');
    return rows[0].total;
  }
}

module.exports = Product;
