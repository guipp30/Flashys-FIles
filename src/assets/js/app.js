(function () {
  var tabs = document.querySelectorAll('.filter-tabs button');
  var cards = document.querySelectorAll('#articles-grid .article-card');
  var search = document.getElementById('articles-search');

  if (!tabs.length || !search) return;

  function filterCards() {
    var activeFilter = document.querySelector('.filter-tabs button.active').dataset.filter;
    var query = search.value.toLowerCase().trim();

    cards.forEach(function (card) {
      var matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
      var matchesSearch = query === '' || card.textContent.toLowerCase().includes(query);
      card.style.display = matchesFilter && matchesSearch ? '' : 'none';
    });
  }

  tabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabs.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      filterCards();
    });
  });

  search.addEventListener('input', filterCards);
})();
