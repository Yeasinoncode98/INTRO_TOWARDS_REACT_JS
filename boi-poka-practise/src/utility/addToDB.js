const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readlist");
  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    alert("Bhai ei id already exists");
  } else {
    storedBookData.push(id);

    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readlist", data);
  }
};

export { addToStoredDB, getStoredBook };
