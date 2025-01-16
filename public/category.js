document.addEventListener('DOMContentLoaded', () => {
    const categoryList = document.getElementById('categoryList');
    const addCategoryForm = document.getElementById('addCategoryForm');
  
    // Add a new category
    addCategoryForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const categoryName = document.getElementById('categoryName').value;
  
      const response = await fetch('/category/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: categoryName }),
      });
  
      if (response.ok) {
        const newCategory = await response.json();
        const newLi = document.createElement('li');
        newLi.dataset.id = newCategory.CategoryId;
        newLi.innerHTML = `
          <span>${newCategory.CategoryName}</span>
          <button class="delete-btn">Delete</button>
        `;
        categoryList.appendChild(newLi);
        document.getElementById('categoryName').value = '';
      }
    });
  
    // Delete a category
    categoryList.addEventListener('click', async (e) => {
      if (e.target.classList.contains('delete-btn')) {
        const li = e.target.closest('li');
        const categoryId = li.dataset.id;
  
        const response = await fetch('/category/delete', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: categoryId }),
        });
  
        if (response.ok) {
          li.remove();
        }
      }
    });
  });
  