let sidebarData = "";
const topicContainer = document.querySelector(".sidebar-body");
const filterArticle = document.getElementById("sidebar-filter-input");

const createTopic = (topicData) => {
  const { title, articles } = topicData;
  const topic = document.createElement("div");

  topic.classList.add("sidebar-inner-nav");
  topic.innerHTML = `
      <ul>
      <p><strong>${title}: </strong></p>

          ${articles
            .map((article) => {
              return `
                  <li>
                      ${article}
                  </li>`;
            })
            .join("")}
      </ul>
  `;
  topicContainer.append(topic);
};

fetch("js/content/topics.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    sidebarData = data;
    for (const topic of data) {
      createTopic(topic);
    }
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

const resetTopics = () => {
  topicContainer.innerHTML = "";

  sidebarData.map((topic) => createTopic(topic));
};

const inputHandler = function (e) {
  const inputText = e.target.value.toLowerCase();
  topicContainer.innerText = e.target.value;

  if (inputText === "") {
    resetTopics();
  } else {
    resetTopics();

    for (const topicTitle of topicContainer.getElementsByTagName("p")) {
      if (!topicTitle.innerText.toLowerCase().includes(inputText)) {
        topicTitle.style.display = "none";
      }
    }

    for (const topicArticle of topicContainer.getElementsByTagName("li")) {
      if (!topicArticle.innerText.toLowerCase().includes(inputText)) {
        topicArticle.style.display = "none";
      }
    }
  }
};

filterArticle.addEventListener("input", inputHandler);
filterArticle.addEventListener("propertychange", inputHandler);
