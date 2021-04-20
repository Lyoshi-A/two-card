import {
  BACK,
  CARDS,
  DESK_CARDS_COUNT,
  HAND_CARDS_COUNT,
  CARDS_WEIGHT,
} from '../consts/consts';

const pairs = [];
const list = {};
const winner = {
  hand: [],
  pairs: 0,
  weight: [],
};

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

export const analysisHandResult = (array, index) => {
  list[index] = {};
  pairs[index] = [];
  array.forEach((value) => {
    const item = CARDS[value];
    if (!list[index][item.value]) {
      list[index][item.value] = { count: 1 };
    } else
    if (list[index][item.value].count === 1) {
      list[index][item.value].count = 2;
      list[index][item.value].pairs = 1;
      pairs[index].push(item.value);
    } else
    if (list[index][item.value].count === 2) {
      list[index][item.value].count = 3;
    } else {
      list[index][item.value].count = 4;
      list[index][item.value].pairs = 2;
      pairs[index].push(item.value);
    }
  });

  if (winner.pairs <= pairs[index].length) {
    const weight = pairs[index].reduce((sum, item) => sum + item, 0);
    const label = pairs[index].map((item) => CARDS_WEIGHT[item - 1]).join(', ');
    if (winner.pairs < pairs[index].length) {
      winner.pairs = pairs[index].length;
      winner.data = label;
      winner.weight = weight;
      winner.hand = [index + 1];
    } else
    if (winner.weight < weight) {
      winner.pairs = pairs[index].length;
      winner.data = label;
      winner.weight = weight;
      winner.hand = [index + 1];
    } else
    if (winner.weight === weight) {
      winner.pairs = pairs[index].length;
      winner.data = label;
      winner.weight = weight;
      winner.hand.push(index + 1);
    }
  }
};

export const generateEmptyGame = (number) => Array
  .from(Array(number).keys())
  .map((value, index) => Array(DESK_CARDS_COUNT).fill(BACK.value)
    .slice(index * HAND_CARDS_COUNT, (index + 1) * HAND_CARDS_COUNT));

export const runNewGame = (number, cards) => {
  Object.keys(list).forEach((key) => delete list[key]);
  pairs.length = 0;
  winner.hand = [];
  winner.pairs = 0;
  winner.weight = [];
  winner.data = '';

  return Array
    .from(Array(number).keys())
    .map((value, index) => {
      const result = shuffle(cards)
        .slice(index * HAND_CARDS_COUNT, (index + 1) * HAND_CARDS_COUNT)
        .sort((a, b) => a - b);
      analysisHandResult(result, index);
      return result;
    });
};

export const getWinner = () => winner;
export const getResults = () => list;
