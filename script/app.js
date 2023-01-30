const product = {
    'crazy': {
        name: 'Crazy',
        price: 31000,
        img: '.images/products/burger-1.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    'light': {
        name: 'Light',
        price: 26000,
        img: '.images/products/burger-2.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    'cheeseburger': {
        name: 'CheeseBurger',
        price: 29000,
        img: '.images/products/burger-3.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    'dburger': {
        name: 'dBurger',
        price: 24000,
        img: '."images/products/burger-4.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
}



const navbarbtn = document.querySelector('.wrapper__navbar-btn')
const navbarCount = document.querySelector('.warapper__navbar-count')
const navbarbasket = document.querySelector('.wrapper__navbar-basket')
const navbarClose = document.querySelector('.wrapper__navbar-close')
const totalPrice = document.querySelector('.wrapper__navbar-totalprice')
const listbtn = document.querySelectorAll('.wrapper__list-btn')

navbarbtn.addEventListener('click', () => {
    if (navbarbasket.classList.contains('active')) {
        navbarbasket.classList.remove('active')
    } else {
        navbarbasket.classList.add('active')
    }
})

navbarClose.addEventListener('click', () => {
    navbarbasket.classList.remove('active')
})

listbtn.forEach(btn => {
    btn.addEventListener('click', () => {
        plusOrMines(btn)
    })
})

function plusOrMines(btn) {
    let parrent = btn.closest('.wrapper__list-card')
    let parrentID = parrent.getAttribute('id')
    product[parrentID].amount++
    basket()
}

function basket() {
    const productArr = []
    for (const key in product) {
        let prKey = product[key]
        let listcard = document.querySelector(`#${key}`)
        let prIndecator = listcard.querySelector('.wrapper__list-count')
        if (prKey.amount) {
            productArr.push(prKey);
            prIndecator.classList.add('active')
            prIndecator.innerHTML = prKey.amount
        } else {
            prIndecator.classList.remove('active')
            prIndecator.innerHTML = ''
        }

    }
    const allCount = totalCountProduct()
    if (allCount) {
        navbarCount.classList.add('active')
    } else {
        cartCount.classList.remove('active')
    }
    navbarCount.innerHTML = allCount.toLocaleString()
    totalPrice.innerHTML = totalPriceProduct()

}

function totalCountProduct() {
    let total = 0
    for (const key in product) {
        total += product[key].amount != 0 ? 1 : 0
    }
    return total
}


function totalPriceProduct() {
    let total = 0
    for (const key in product) {
        total += product[key].totalSum
    }
    return total.toLocaleString()
}