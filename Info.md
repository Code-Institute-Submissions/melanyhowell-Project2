CODE

Original Code for nav picked from Bootstrap
 <ul class="nav justify-content-end">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">link</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Link</a>
                        </li>
                      </ul>

Code for hamburger nav bar 
<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>

Had an issue with CSS changes not loading to Preview, cleared my chache and previews updated

Decided to replace the following code for a cleaner look on the game...
<!--Below Nav will be visible on screens large than sm-->
                <div class="col-12 d-none d-sm-block menu-options">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="index.html"><strong>Game</strong></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#"><strong>How To Play</strong></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#"><strong>Contact</strong></a>
                        </li>
                      </ul>
                </div>
                <!--Mobile Nav bar-->
                <div class="col-12 d-sm-none">
                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-dark p-4">
                            <ul class="nav justify-content-center">
                                <li class="nav-item">
                                  <a class="nav-link active link-light" aria-current="page" href="index.html"><strong>Game</strong></a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link link-light" href="#"><strong>How To Play</strong></a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link link-light" href="#"><strong>Contact</strong></a>
                                </li>
                              </ul>
                        </div>
                      </div>
                      <nav class="navbar navbar-dark bg-dark">
                        <div class="container-fluid">
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                        </div>
                      </nav>
With the below code which has been modified from bootstrap...
<nav class="navbar bg-body-tertiary fixed-top">
          <div class="container-fluid">
            <a href="index.html"><img src="/assets/images/logoimage.jpg" alt="memory_game" class="logo"></a>
            <h2>Memory Game</h2>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><strong>Game</strong></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><strong>How To Play</strong></a>
                  </li>
                  <li>
                    <a class="nav-link" href="#"><strong>Contact</strong></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>