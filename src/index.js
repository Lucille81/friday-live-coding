window.onload = function () {
  // Tags
  addTagsClickHandler();
};

const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
      let clickedTag = e.target;

      removeSelectedTags();
      selectClickedTag(clickedTag);

      if (clickedTag.innerText === 'All') {
        showAllStrategies();
      } else {
        filterStrategiesBySelectedTag(clickedTag);
      }
    }
  });
};

const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.strategies__tags .tag');
  tags.forEach((tag) => {
    tag.classList.remove('tag_selected');
    tag.classList.add('tag_bordered');
  });
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.remove('tag_bordered');
  clickedTag.classList.add('tag_selected');
};

const showAllStrategies = () => {
  let strategies = document.querySelectorAll('.strategy__wrapper .strategy');

  strategies.forEach((strategy) => {
    strategy.classList.remove('strategy_hidden');
  });
};

const filterStrategiesBySelectedTag = (clickedTag) => {
  let strategies = document.querySelectorAll('.strategy__wrapper .strategy');

  strategies.forEach((strategy) => {
    strategy.classList.add('strategy_hidden');

    strategy.querySelectorAll('.tag').forEach((tag) => {
      if (tag.innerText === clickedTag.innerText) {
        strategy.classList.remove('strategy_hidden');
      }
    });
  });
};
