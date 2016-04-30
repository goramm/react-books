export const IMAGE_URL = 'http://loremflickr.com';
export const IMAGE_SIZE = 150;

export const books = [
  {
    id: 1,
    title: 'SurviveJS - Webpack and',
    description: '<a href="http://survivejs.com/">SurviveJS - Webpack and React</a> is the most comprehensive freely available book I\'m aware of. It will show you how to set up a <a href="https://webpack.github.io/">webpack</a> based development environment and then develop a simple <a href="https://en.wikipedia.org/wiki/Kanban">Kanban</a> based on it. More theoretical topics, such as linting, styling and library authoring are discussed as well. At the time of writing it has over 250 pages and more content is planned based on demand.',
    image: `${IMAGE_URL}/${IMAGE_SIZE}/${IMAGE_SIZE}/girl?random=1`
  },
  {
    id: 2,
    title: 'React Webpack Cookbook',
    description: '<a href="https://christianalfoni.github.io/react-webpack-cookbook/">React Webpack Cookbook</a> is a little guide I developed with <a href="http://www.christianalfoni.com/">Christian Alfoni</a>. The eventual plan is to polish the content and host the improved version here with a similar support model.',
    image: `${IMAGE_URL}/${IMAGE_SIZE}/${IMAGE_SIZE}/girl?random=2`
  },
  {
    id: 3,
    title: 'Hacking with React',
    description: '<a href="http://www.hackingwithreact.com/">Hacking with React</a> by Paul Hudson delves straight into React. At the time of writing it has 123 pages and it uses a no-nonsense approach. In some ways it\'s the anti-thesis to SurviveJS, but there\'s room for different kind of offerings. Even though the book is free to read online, the author offers it through <a href="https://leanpub.com/hackingwithreact/">Leanpub</a> as well. The minimum price without VAT is $10.',
    image: `${IMAGE_URL}/${IMAGE_SIZE}/${IMAGE_SIZE}/girl?random=3`
  },
  {
    id: 4,
    title: 'React Native Animation Book',
    description: '<a href="http://browniefed.com/react-native-animation-book/">React Native Animation Book</a> by <a href="http://browniefed.com/">Jason Brown</a> explains how to deal with animation in React Native. You get all relevant bits in a single place. That\'s it really.',
    image: `${IMAGE_URL}/${IMAGE_SIZE}/${IMAGE_SIZE}/girl?random=4`
  }
];
