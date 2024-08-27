import { del, get, post } from "../src/api.js";

const endpoints = {
  getAllRecepies: "/classes/Recepi",
  getReciepeById: "/classes/Recepi/",
  delRecepiById:  "/classes/Recepi/",
};

export async function createRecepi({
  imageUrl,
  title,
  ingrediance,
  description
}) {
  return await post(endpoints.getAllRecepies, {
    imageUrl,
    title,
    ingrediance,
    description
  });
}

export async function getAllRecepies(data) {
  return await get(endpoints.getAllRecepies, data);
}

export async function getReciepeById(id) {
  return await get(endpoints.getReciepeById + id);
}

export async function deleteReciepe(id) {
  return await del(endpoints.delRecepiById + {
    className: 'Recepi',
    _objCount: 1,
    id: `${id}`
  });
}
