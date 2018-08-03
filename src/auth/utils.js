let local = window.localStorage;

export const setStore = (name, data) => {
  if (!name) return;
  local.setItem(name, JSON.stringify(data), 1);
};

export const getStore = name => {
  if (!name) return;
  local.getItem(name);
};

export const removeStore = name => {
  if (!name) return;
  local.removeItem(name);
};
