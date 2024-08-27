import { getUserData } from "./storage.js";

const host = "https://parseapi.back4app.com";
const appId = "SOhOYWgCL87XL1dRmIJdGvGFcgMvOmO1aq1DB3Dz";
const jsKey = "BE0DWH8wS6Okow44rnuD9sKjgdCUgNToVZe2dpDf";

export async function request(method, url, data) {
  const options = {
    method,
    headers: {
      "X-Parse-Application-Id": appId,
      "X-Parse-JavaScript-Key": jsKey
    }
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const userData = await getUserData();
  if (userData) {
    options.headers["X-Parse-Session-Token"] = userData?.sessionToken;
  }

  try {
    const response = await fetch(host + url, options);
    if (!response.ok) {
      const err = await response.json();

      alert(err)
    }
    if (response.status === 204) {
      return response;
    }

    return response.json();
  } catch (err) {
    alert(err.error);
    throw err;
  }
}

export const get = (url) => request("GET", url);
export const post = (url, data) => request("POST", url, data);
export const put = (url, data) => request("PUT", url, data);
export const del = (url) => request("delete", url);
