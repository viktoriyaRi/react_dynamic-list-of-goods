import { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export async function get5First(): Promise<Good[]> {
  const goods = await getAll();

  return goods
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
}

export async function getRedGoods(): Promise<Good[]> {
  const goods = await getAll();

  return goods.filter(g => g.color === 'red');
}
