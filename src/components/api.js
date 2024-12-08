const apiConfig = {
    baseUrl: "https://nomoreparties.co/v1/frontend-st-cohort-201",
    headers: {
      authorization: "e917fcde-2631-4d66-8b1b-9f78dd5b2165",
      "Content-Type": "application/json",
    },
  };
  
function handleResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}
  
export function getUserInfo() {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
        headers: apiConfig.headers,
    }).then(handleResponse);
}
  
export function getInitialCards() {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        headers: apiConfig.headers,
    }).then(handleResponse);
}
  
export function addCard(data) {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        method: "POST",
        headers: apiConfig.headers,
        body: JSON.stringify({
        name: data.name,
        link: data.link,
        }),
    }).then(handleResponse);
}
  
export function deleteCard(cardId) {
    return fetch(`${apiConfig.baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: apiConfig.headers,
    }).then(handleResponse);
}
  
export function likeCard(cardId) {
    return fetch(`${apiConfig.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: apiConfig.headers,
    }).then(handleResponse);
  }
  
export function dislikeCard(cardId) {
    return fetch(`${apiConfig.baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: apiConfig.headers,
    }).then(handleResponse);
}
  
export function updateAvatar(avatarUrl) {
    return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: apiConfig.headers,
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    }).then(handleResponse);
  }
  
export function updateUserInfo(userData) {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
      method: "PATCH",
      headers: apiConfig.headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    }).then(handleResponse);
  }
  