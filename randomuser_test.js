fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((data) => {
    const user = data.results[0];

    console.log("Nom :", user.name.first, user.name.last);
    console.log("Email :", user.email);
    console.log("Pays :", user.location.country);
  })
  .catch((err) => console.log("Erreur :", err));
