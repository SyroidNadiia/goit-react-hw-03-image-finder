// import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34120015-2fabafcb6d32a905917c5fb2c';

const serchParams = new URLSearchParams({
  imageType: 'photo',
  orientation: 'horizontal',
  safeSearch: 'true',
  per_page: '12',
});

export const fetchAsync = async (query, page) => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&${serchParams.toString()}`;

  const { data } = await axios.get(url);
  return data;
};
