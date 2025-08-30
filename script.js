const content = {
  fillers: {
    title: "Dermal Fillers",
    text: "Bacon ipsum dolor amet fatback cupim venison ground round jerky. Leberkas t-bone pancetta, cupim swine flank shoulder jowl biltong short ribs porchetta picanha bacon. Shank pork loin chuck boudin pork shankle ham hock brisket meatloaf. Beef strip steak tail, bresaola ground round sirloin bacon pig short ribs pork loin short loin buffalo turducken pork. Drumstick flank venison ham hock tri-tip tongue.",
<<<<<<< HEAD
    image: "images/fillers.jpg"
=======
    image: "images/fillers.jpg",
>>>>>>> 529a66c (final update)
  },
  coolsculpting: {
    title: "CoolSculpting Elite",
    text: "Ham ball tip drumstick leberkas chicken, landjaeger hamburger chislic filet mignon. Swine corned beef kevin tenderloin pancetta shankle kielbasa chislic meatloaf tri-tip bacon frankfurter salami rump. Spare ribs turkey pastrami bresaola swine cupim, meatball sirloin pork belly pork loin. Tail frankfurter porchetta short ribs doner. Pork venison fatback hamburger jerky shankle bacon brisket picanha rump short ribs cupim t-bone ham. Meatloaf hamburger venison burgdoggen drumstick, brisket corned beef short loin flank buffalo alcatra chicken tri-tip.",
<<<<<<< HEAD
    image: "images/coolsculpting.jpg"
=======
    image: "images/coolsculpting.jpg",
>>>>>>> 529a66c (final update)
  },
  qwo: {
    title: "QWO",
    text: "Jerky chuck cow kevin pork chop chislic shoulder pig, beef fatback bresaola doner pork loin frankfurter. Swine sausage chislic short ribs brisket frankfurter tail spare ribs capicola flank jowl. Frankfurter bacon cow sausage, chicken shoulder chislic burgdoggen swine pork chop doner shankle hamburger. Tenderloin pastrami meatball filet mignon swine pig pork sirloin kielbasa drumstick cow pancetta capicola. Leberkas pastrami bacon sausage corned beef, meatball cupim beef venison turducken spare ribs ham hock boudin pork loin alcatra. Shankle pork chop biltong porchetta, jerky pork loin strip steak flank spare ribs tenderloin. Tri-tip tail landjaeger, pancetta pork chop tongue turducken.",
<<<<<<< HEAD
    image: "images/qwo.jpg"
=======
    image: "images/qwo.jpg",
>>>>>>> 529a66c (final update)
  },
  lasers: {
    title: "Advanced Lasers",
    text: "Jowl pork tail ribeye. Fatback shankle doner, drumstick pastrami picanha chislic jerky landjaeger. Pancetta doner pig strip steak boudin kevin ball tip bacon porchetta. Ball tip brisket hamburger pancetta beef ribs pork belly venison jowl turducken alcatra fatback ribeye pork loin andouille shank. Boudin ribeye brisket landjaeger beef ribs filet mignon rump ham hock chuck beef jowl.",
<<<<<<< HEAD
    image: "images/lasers.jpg"
=======
    image: "images/lasers.jpg",
>>>>>>> 529a66c (final update)
  },
  microneedling: {
    title: "Microneedling",
    text: "Porchetta salami drumstick, shoulder doner biltong pork swine kevin. Andouille chislic frankfurter tongue cupim, t-bone turducken ham hock flank burgdoggen. Tri-tip spare ribs pig, ribeye meatball short ribs meatloaf salami tongue turkey pastrami sirloin cupim alcatra corned beef. Porchetta venison t-bone beef.",
<<<<<<< HEAD
    image: "images/microneedling.jpg"
=======
    image: "images/microneedling.jpg",
>>>>>>> 529a66c (final update)
  },
  botox: {
    title: "Botox",
    text: "Biltong kielbasa jowl, burgdoggen ball tip tail swine jerky. Biltong pastrami pork belly, sausage chicken shank pancetta sirloin burgdoggen. Chislic shankle turkey buffalo cupim. Leberkas sausage spare ribs tail ham hock tongue shank, filet mignon buffalo swine pig sirloin picanha. Pork chop doner capicola, salami prosciutto brisket turducken swine turkey chuck chislic ham pig. Ham burgdoggen chislic beef ribs ribeye. Landjaeger buffalo salami, tenderloin sausage jowl porchetta hamburger filet mignon pancetta ground round ham.",
<<<<<<< HEAD
    image: "images/botox.jpg"
  }
=======
    image: "images/botox.jpg",
  },
>>>>>>> 529a66c (final update)
};

const buttons = document.querySelectorAll("nav button");
const main = document.getElementById("content");

<<<<<<< HEAD
buttons.forEach(button => {
=======
// Add an active class to the first button (Dermal Fillers) on page load
const initialButton = document.querySelector('button[data-tab="fillers"]');
if (initialButton) {
  initialButton.classList.add("active");
}

buttons.forEach((button) => {
>>>>>>> 529a66c (final update)
  button.addEventListener("click", () => {
    const tab = button.getAttribute("data-tab");
    const data = content[tab];

<<<<<<< HEAD
    buttons.forEach(btn => btn.classList.remove("active"));
=======
    buttons.forEach((btn) => btn.classList.remove("active"));
>>>>>>> 529a66c (final update)

    button.classList.add("active");

    main.classList.add("fade-out");

    setTimeout(() => {
      main.innerHTML = `
<<<<<<< HEAD
        <div class="text">
          <h2>${data.title}</h2>
          <p>${data.text}</p>
          <button class="learn-more">${data.title}</button>
        </div>
        <div class="image">
          <img src="${data.image}" alt="${data.title}" />
        </div>
=======
        <div class="image">
          <img src="${data.image}" alt="${data.title}" />
        </div>
        <div class="more-info-image">
          <div class="text">
            <h2>${data.title}</h2>
            <p>${data.text}</p>
            <button class="learn-more">${data.title} →</button>
          </div>
        </div>
>>>>>>> 529a66c (final update)
      `;

      main.classList.remove("fade-out");
    }, 500);
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 529a66c (final update)
