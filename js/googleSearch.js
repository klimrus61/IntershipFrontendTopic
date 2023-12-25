function searchInGoogle() {
  const text = document.getElementById("search").value;
  const cleanQuery = text.replace(" ", "+", text);
  const url = "http://www.google.com/search?q=" + cleanQuery;

  window.location.href = url;
}
