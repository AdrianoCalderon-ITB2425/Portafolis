document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      // Remove 'active' class from all items
      document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
  
      // Add 'active' class to clicked item
      item.classList.add('active');
  
      // Update the content dynamically (you can add logic here to load specific content)
      const content = document.querySelector('.content');
      content.innerHTML = `<h3>${item.textContent} <span>@ Company</span></h3>
                           <p>Role details and responsibilities for ${item.textContent}</p>
                           <ul>
                                <li>Deliver high-quality, robust production code for various clients.</li>
                                <li>Collaborate with creative directors and designers to transform ideas into production.</li>
                                <li>Provide leadership through collaboration and mentorship.</li>
                            </ul>`;
    });
  });
  