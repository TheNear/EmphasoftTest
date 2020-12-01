export interface URLInterface {
  BASE: string,
  AUTH: string,
  USER: string,
}

export const URL: URLInterface = {
  BASE: "http://emphasoft-test-assignment.herokuapp.com",
  AUTH: "/api-token-auth/",
  USER: "/api/v1/users/",
};

export const ALERT_LIFE_TIME = 3000;

export const DEBOUNCE_DELAY = 500;
