const modalContainer = document.querySelector(".modal-body");

const createListUsers = (listDataUsers) => {
  const listUsers = document.createElement("div");
  listUsers.className = "modal-body-list-users";
  listUsers.innerHTML = `
    <ol>
    ${listDataUsers
      .sort((user) => {
        user.rank;
      })
      .map((user) => {
        return `<li class='modal-body-list-users-item'>${user.name}</li>`;
      })
      .join("")}
    </ol>
    `;
  modalContainer.append(listUsers);
};

fetch("js/content/users.json")
  .then((response) => {
    return response.json();
  })
  .then((listDataUsers) => {
    createListUsers(listDataUsers);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
