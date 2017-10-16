import Vue from 'vue';

const yandexBaseUrl = 'https://login.yandex.ru';

function getUserInfo(token) {
  return Vue.http.get(`${yandexBaseUrl}/info?format=json&oauth_token=${token}`).then(res => res.data);
}

function isAuthorized(userId) {
  return Vue.http.get(`users/isAuthorized/${userId}`).then(res => res.data);
}

export { getUserInfo, isAuthorized };
