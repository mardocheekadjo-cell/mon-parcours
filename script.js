// Script pour gérer la navigation entre les onglets
fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((events) => {
    const list = document.querySelector("#starred");
    if (!list) {
      console.error("Element #starred not found");
      return;
    }
    
    if (!Array.isArray(events) || events.length === 0) {
      list.innerHTML = "<li>No starred repositories found</li>";
      return;
    }
    
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name || "Unknown"} — starred ${event.starred || "N/A"}`;
      list.appendChild(item);
    });
  })
  .catch((error) => {
    console.error("Error loading events:", error);
    const list = document.querySelector("#starred");
    if (list) {
      list.innerHTML = "<li>Error loading starred repositories</li>";
    }
  });
