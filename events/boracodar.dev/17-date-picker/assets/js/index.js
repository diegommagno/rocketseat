const months = document.querySelectorAll('.month');

let selectedMonth = null;

months.forEach(month => {
  month.addEventListener('click', () => {
    if (selectedMonth) {
      selectedMonth.classList.remove('isSelected');
    }

    selectedMonth = month;
    selectedMonth.classList.add('isSelected');
  });
});