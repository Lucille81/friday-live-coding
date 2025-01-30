import { Article } from './js/Article';
import { Modal } from './js/Modal';

const data = [
  {
    id: 1,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/pic1.jpg',
    tags: ['Art', 'Design'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020',
  },
  {
    id: 2,
    title: 'Motivation Is The First Step To Success',
    urlToImage: './src/img/strategies/pic2.jpg',
    tags: ['Culture'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020',
  },
  {
    id: 3,
    title: 'Success Steps For Your Personal Or Business Life',
    urlToImage: './src/img/strategies/pic3.jpg',
    tags: ['Culture', 'Design', 'Art'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020',
  },
  {
    id: 4,
    title: 'Success Steps For Your Personal Or Business Life Plus Funny Image on the Back',
    urlToImage: './src/img/strategies/pic4.jpg',
    tags: ['Culture'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020',
  },
  {
    id: 5,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/pic5.jpg',
    tags: ['Design'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020',
  },
];

window.onload = function () {
  // Render Articles
  if (data) {
    renderAtriclesToDom();
  }

  // Tags
  addTagsClickHandler();

  // Generate Base Modal from Modal Class
  addToolsClickHandler();
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

const renderAtriclesToDom = () => {
  let strategiesWrapper = getStrategiesWrapper();
  generateArticles(data).forEach((article) => {
    strategiesWrapper.append(article.generateArticle());
  });
};

const getStrategiesWrapper = () => {
  const strategiesContainer = document.querySelector('.strategy__wrapper');
  strategiesContainer.innerHTML = '';
  return strategiesContainer;
};

const generateArticles = (data) => {
  let articles = [];
  data.forEach((article) => {
    articles.push(new Article(article));
  });
  return articles;
};

const addToolsClickHandler = () => {
  document.querySelector('.tools__button .button').addEventListener('click', () => {
    generateToolsModal();
  });
};

const generateToolsModal = () => {
  renderModalWindow('test content');
};

const renderModalWindow = (content) => {
  let modal = new Modal('tools-modal');
  modal.buildModal(content);
};
