// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cardViewBtn = document.getElementById('cardViewBtn');
    const tableViewBtn = document.getElementById('tableViewBtn');
    const cardView = document.getElementById('cardView');
    const tableView = document.getElementById('tableView');

    cardViewBtn.addEventListener('click', () => {
        cardView.classList.remove('hidden');
        tableView.classList.add('hidden');
        cardViewBtn.classList.add('active');
        tableViewBtn.classList.remove('active');
    });

    tableViewBtn.addEventListener('click', () => {
        tableView.classList.remove('hidden');
        cardView.classList.add('hidden');
        tableViewBtn.classList.add('active');
        cardViewBtn.classList.remove('active');
    });
});
