async function getProducts() {
    let url = 'products.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderProducts() {
    let items = await getProducts();
    let html = '';
    items.forEach(item => {
        let htmlSegment = `
        <div key="${item.id}" class="products__item" >
        <img
        
          class="products__item-photo"
          src="${item.img}"
          alt=""
        />
        <div class="products__item-info">
          <header >
            <h3>${item.title}</h3>
            <span class="products__item-price"><b>${item.price}сом</b></span>
          </header>
          <p class="products__item-text">
            ${item.desc}
          </p>
        </div>
      </div>
      `;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderProducts();