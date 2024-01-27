const key = "2d9bd811d7e441339622a6f81dae8f68";
const apiUrl = `https://crudcrud.com/api/${key}/users`;

async function findAll() {
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function findById(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function save(user) {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function update(user, id) {
  try {
    await fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    throw error;
  }
}

async function remove(id) {
  try {
    await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw error;
  }
}
