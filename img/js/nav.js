const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
     <div class="nav">
    <img src="dark-logo.png" class="brand-logo" alt="image of brand logo">
<div class="nav-items">
    <div class="search">
        <input type="text" class="search-box" placeholder="search brand,  product">
        <button class="search-btn">search</button>
    </div> 
    <a href="#"><img src="user.png" alt="image of user"></a>
    <a href="#"><img src="cart.png" alt="image of cart"></a>
</div> 
</div>
<ul class="links-container">
    <li class="link-item"><a href="#" class="link">Home</a></li>
    <li class="link-item"><a href="#" class="link">Women</a></li>
    <li class="link-item"><a href="#" class="link">Men</a></li>
    <li class="link-item"><a href="#" class="link">Kids</a></li>
    <li class="link-item"><a href="#" class="link">Accessories</a></li>
</ul>`;
}

createNav();
