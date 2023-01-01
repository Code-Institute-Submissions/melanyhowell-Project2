# Testing 

I Have used the following testing  sites to check my code -

- [Code Validation](#code-validation)
    - [W3C HTML Validator](#w3c-html-validator) 
    - [W3C CSS Validator](#w3c-css-validator)
- [Lighthouse](#lighthouse)


## Code Validation

### W3C HTML Validator
![HTML home](/assets/readme-images/HTLM%20home%20validator.png)


### W3C CSS Validator
![CSS Validator](/assets/readme-images/CSS%20validator.png)

## Lighthouse
![Lighthouse](/assets/readme-images/lighthouse.png)


## Resolved Issues

+  I initially tried to have menu in the top of my header that used up more of the page. 

The Fix - With my decision for the requirement of the main focus to be on the game I decided to change this to an expandable menu to solve this potential issue. 
This I got from Bootstrap, mentioned in the index.html code on the nav section.
This also cut down on the amount of code used making it appear tidier.

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





+ 

## Unresolved

+ I was uanble to find a way to only produce the email confirmation popup once the form was correctly filled in then the submission button pressed, for now even if the form is blank and you click the button the popup will appear.