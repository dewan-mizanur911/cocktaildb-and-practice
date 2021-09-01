const spin = () => {
    const spinner = document.getElementById('spinner');
    spinner.removeAttribute('hidden');
    setTimeout(() => spinner.setAttribute('hidden', true), 500);
}

const getCocktails = async () => {
    const input = document.getElementById('input');
    const value = input.value;
    spin();

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCocktails(data.drinks);

    input.value = '';
}

const displayCocktails = cocktails => {
    const cocktailContainer = document.getElementById('cocktail-container');
    cocktailContainer.textContent = '';
    document.getElementById('details-container').textContent = '';
    cocktails.forEach(cocktail => {
        const div = document.createElement('div');
        div.textContent = '';
        div.classList.add('col', 'card');
        div.innerHTML = `
                    <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${cocktail.strDrink}</h5>
                    <p class="card-text">${cocktail.strInstructions.slice(0, 100)}</p>
                    <button onclick="getDetails('${cocktail.idDrink}')" type="button" class="btn btn-primary btn-lg">Click Here</button>
                    </div>
        `;
        cocktailContainer.appendChild(div);
    })
}

const getDetails = async cocktail => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail}`;

    const res = await fetch(url);
    const data = await res.json();
    showDetails(data.drinks[0]);
}

const showDetails = cocktail => {
    const detailsContainer = document.getElementById('details-container');
        detailsContainer.innerHTML = `
                    <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${cocktail.strDrink}</h5>
                    <p class="card-text">${cocktail.strInstructions.slice(0, 100)}</p>
                    </div>
        `;
}