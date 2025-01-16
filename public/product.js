document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const addProductForm = document.getElementById('addProductForm');
  
    // Add a new product
    addProductForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const productName = document.getElementById('productName').value;
      const categoryId = document.getElementById('categorySelect').value;
  
      const response = await fetch('/product/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: productName, categoryId }),
      });
  
      if (response.ok) {
        const newProduct = await response.json();
        const newLi = document.createElement('li');
        newLi.dataset.id = newProduct.ProductId;
        newLi.innerHTML = `
          <span>${newProduct.ProductName} - ${newProduct.CategoryName}</span>
          <button class="delete-btn">Delete</button>
        `;
        productList.appendChild(newLi);
        document.getElementById('productName').value = '';
      }
    });
  
    // Delete a product
    productList.addEventListener('click', async (e) => {
      if (e.target.classList.contains('delete-btn')) {
        const li = e.target.closest('li');
        const productId = li.dataset.id;
  
        const response = await fetch('/product/delete', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: productId }),
        });
  
        if (response.ok) {
          li.remove();
        }
      }
    });
  });
  