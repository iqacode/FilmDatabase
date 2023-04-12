" This is where your API will go "
  
      // a simple loop to create Movies and TV Shows
      response.results.forEach(result => {
        const card = document.createElement('div');
        card.classList.add('card');
  
        const title = document.createElement('h2');
        title.textContent = result.title;
  
        const year = document.createElement('p');
        year.textContent = result.year;
  
        const image = document.createElement('img');
        image.src = result.image.url;
        image.alt = result.title;
  
        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(image);
  
        container.appendChild(card);
      });
    })
    .catch(err => console.error(err));
  
