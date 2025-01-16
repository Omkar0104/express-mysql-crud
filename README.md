# Node.js CRUD Application with MySQL

This project is a **Node.js CRUD Application** built using **Express.js**, **EJS** as the view engine, and **MySQL** as the database. The application provides CRUD operations for **categories** and **products** and implements server-side pagination for the product list.

---

## **Features**
1. **Category Management**
   - Add, view, and delete categories.
2. **Product Management**
   - Add, view, and delete products.
   - Products belong to categories (foreign key relationship).
3. **Product List**
   - Display products with the following details:
     - `Product ID`, `Product Name`, `Category Name`, `Category ID`.
   - The list is sorted by `Product ID` in ascending order.
   - Server-side pagination.
4. **Navigation**
   - A responsive navbar allows navigation between pages.

---

## **Technologies Used**
- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **MySQL**: Relational database for storage.
- **EJS**: Templating engine for rendering dynamic HTML.
- **CSS**: For styling.

---

## **Getting Started**

### **1. Prerequisites**
Ensure the following are installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MySQL](https://www.mysql.com/)
- A MySQL client (e.g., MySQL Workbench, phpMyAdmin)

---

### **2. Clone the Repository**
```bash
git clone https://github.com/Omkar0104/express-mysql-crud.git
cd express-mysql-crud
