const toggleButton = document.getElementById('dark-mode-toggle');



toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.header.classList.toggle('dark-mode');
  document.button.classList.toggle('dark-mode');
});

const milionersBlocks = document.querySelector('.milioners_block');
const select = document.querySelector('.sort');

function milionerRender(millionaires) {
    milionersBlocks.innerHTML = '';
    millionaires.map((element) => {
        let millionairesCard = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element?.name}</h5>
          <h6 class="card-text">${element?.age}</h6>
          <p class="text_coin">${element?.netWorth}$</p>
        </div>
      </div>
        `
        milionersBlocks.insertAdjacentHTML('beforeend', millionairesCard)
    });
}
milionerRender(millionaires);

select.addEventListener('change', (param) => {
   let selectedValue = select.value;

    if(selectedValue == 'desc'){
        let newSelect = millionaires.sort((a, b) => b.netWorth - a.netWorth)
        milionerRender(newSelect);
    }
    else if(selectedValue == 'asc'){
        let newSelect = millionaires.sort((a, b) => a.netWorth - b.netWorth)
        milionerRender(newSelect);
    }
})



