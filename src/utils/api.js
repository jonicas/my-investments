const getData = res => res.json();

const requests = {
  get: url => fetch(url).then(getData)
};

const rendimento = {
  get: filtro =>
    requests.get(
      "https://gist.githubusercontent.com/AgtLucas/a67c345e15c2eb3d4668c9b7e330ac44/raw/1de2450cbe69fde065bca9e498aaaaafcca61257/mock-data.js"
    )
};

export { rendimento };
