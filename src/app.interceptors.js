import Vue from 'vue';
import { appConstants } from "./app.constants";

function setAuthHeader() {
  Vue.http.interceptors.push(function (request, next) {
    request.headers.set('Authorization', `OAuth ${localStorage.getItem(appConstants.authTokenKey)}`);

    // continue to next interceptor
    next();
  });
}

export { setAuthHeader };
