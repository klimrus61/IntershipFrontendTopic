const topicContainer = document.querySelector(".sidebar-body");

const createTopic = (topicData) => {
    const { title, articles } = topicData;
    const topic = document.createElement("div")
    topic.classList.add("sidebar-inner-nav")
    topic.innerHTML = `
        <ul>
        <p><strong>${title}: </strong></p>

            ${
                articles.map((article) => {
                    return `
                    <li>
                        ${article}
                    </li>`
                })
                .join("")}
        </ul>
    
    `;
    topicContainer.append(topic)
}


fetch('js/content/topics.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return data = response.json(); // Parse JSON data from the response
  })
  .then(data => {
    for (const topic of data) {
        createTopic(topic)
    }
    console.log(data); // Output the parsed JSON object
    // Now you can work with the 'data' object as needed
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

