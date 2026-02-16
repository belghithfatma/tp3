fetch("https://openlibrary.org/search.json?q=harry+potter")
  .then((res) => res.json())
  .then((data) => {
    console.log("Titre :", data.docs[0].title);
    console.log("Auteur :", data.docs[0].author_name[0]);
    console.log("Année :", data.docs[0].first_publish_year);
  })
  .catch((err) => console.log("Erreur :", err));
