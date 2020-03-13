import { handleResponse, handleError } from "./apiUtils";
const baseUrl = 'https://testrered11.free.beeceptor.com';

export function getAuthors() {
  return fetch(baseUrl + '/authors')
    .then(handleResponse)
    .catch(handleError);
}
