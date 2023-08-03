function searchBar() {
    var div = document.getElementById("divSearch");
    div.innerHTML = '<div class="d-flex align-items-center" style="background-color: white; height: 40%; width: 90%;">' +
                    '    <button class="nav-link"><i class="fas fa-magnifying-glass icon-search"></i></button>' +
                    '    <input autofocus role="text" id="inputSearch" placeholder="Buscar Productos"></input>' +
                    '    <button class="nav-link" onclick="optionsNavbar()"><i class="fas fa-close icon-search"></i></button>' +
                    '</div>';
}

function optionsNavbar(){
    var div = document.getElementById("divSearch");
    div.innerHTML = '<ul class="navbar-nav">' +
                    '   <li class="nav-item active" style="margin: 10px;">' +
                    '      <a class="nav-link text-white font-oswald" style="font-size: 14px;" href="#inicio">INICIO</a>' +
                    '    </li>' +
                    '    <li class="nav-item" style="margin: 10px;">' +
                    '      <a class="nav-link text-white font-oswald" style="font-size: 14px;" href="#tienda">TIENDA</a>' +
                    '    </li>' +
                    '    <li class="nav-item" style="margin: 10px;">' +
                    '      <a class="nav-link text-white font-oswald" style="font-size: 14px;" href="#wallpaper-gratis">WALLPAPER GRATIS</a>' +
                    '    </li>' +
                    '    <li class="nav-item d-flex align-items-center" style="margin: 10px;">' +
                    '        <div class="vertical-line text-white"></div>' +
                    '    </li>' +
                    '    <li class="nav-item d-flex align-items-center"  style="margin: 10px;">' +
                    '        <button class="nav-link text-white" onclick="searchBar()"><i class="fas fa-magnifying-glass text-white" style="font-size: 17px;"></i></button>' +
                    '    </li>' +
                    '    <li class="nav-item d-flex align-items-center"  style="margin: 10px;">' +
                    '        <a href="tienda/ols/cart" class="nav-link text-white"><i class="fas fa-cart-shopping text-white" style="font-size: 17px;"></i></a>' +
                    '    </li>' +
                    '</ul>';
}