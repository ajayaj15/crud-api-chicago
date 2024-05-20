let API_URL = 'https://api.artic.edu/api/v1/artworks';


async function displayData() {
    try{
        let data = await fetch(API_URL);
        if(data.status === 200){
            let value = await data.json();
            let UI_Cards = document.getElementById('UI_Cards');
            UI_Cards.innerHTML = ""
            let card = ""
            value.data.forEach((item) => {
                const title = item.artist_title ? item.artist_title : item.artist_display;
                card += `<div class="col-md-4 col-sm-12 col-xs-12 mt-3">
                <div class="card" style="width:400px">
                <img src="http://feedinspiration.com/wp-content/uploads/2015/04/surrealism-painting-568.jpg"/>
                <div class="card-body card-background">
                  <h4 class="card-title text-center text-uppercase">${title}</h4>
                  <p class="card-text text-center">${item.place_of_origin}</p>
                  <h4 class="card-title text-center text-uppercase">Work Title</h4>
                  <p class="card-text text-center">${item.artwork_type_title}</p>
                  <p class="card-text text-center">${item.credit_line}</p>
                </div>
              </div>
              </div>`
            })

            UI_Cards.innerHTML = card

        }
    }
    catch(err){
        console.log(err);
    }
}


displayData()