const modalContainer = document.querySelector(".modal-body");

const createListUsers = (listDataUsers) => {
    const listUsers = document.createElement("div");
    listUsers.className = "modal-body-list-users"
    listUsers.innerHTML = `
    <ol>
    ${listDataUsers
                    .sort((user) => {user.rank})
                    .map((user) => {
                        return `<li class='modal-body-list-users-item'>${user.name}</li>`
                    })
                    .join("")}
    </ol>
    `
    modalContainer.append(listUsers)
}
 

fetch("js/content/users.json")
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON data from the response
  })
  .then(listDataUsers => {
    createListUsers(listDataUsers)
    console.log(listDataUsers); // Output the parsed JSON object
    // Now you can work with the 'data' object as needed
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });