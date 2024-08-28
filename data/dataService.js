import { del, get, post, put } from "../src/api.js";

const endpoints = {
  getAllRecepies: "/classes/Recepi",
  getReciepeById: "/classes/Recepi/",
  delRecepiById: "/classes/Recepi/"
};

export async function createRecepi({
  imageUrl,
  title,
  ingrediance,
  description,
  prepTime
}) {
  return await post(endpoints.getAllRecepies, {
    imageUrl,
    title,
    ingrediance,
    description,
    prepTime
  });
}

export async function getAllRecepies(data) {
  return await get(endpoints.getAllRecepies, data);
}

export async function getReciepeById(id) {
  return await get(endpoints.getReciepeById + id);
}

export async function deleteReciepe(id) {
  return await del(endpoints.delRecepiById + id);
}

export async function updateRecepi(
  id,
  { imageUrl, title, ingrediance, description, prepTime }
) {
  return await put(endpoints.getReciepeById + id, {
    imageUrl,
    title,
    ingrediance,
    description,
    prepTime
  });
}
