fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then((res) => res.json())
  .then((data) => {
    console.log("Titre :", data.title);
    console.log("Date :", data.date);
    console.log("Explication :", data.explanation.substring(0, 100) + "...");
    console.log("Image URL :", data.url);
  })
  .catch((err) => console.log("Erreur :", err));
