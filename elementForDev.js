var elem = document.createElement('div');
elem.innerHTML = `
<h1>Oceny</h1>
<h2> Mercedes GLS X166 Off-Tourer</h2>
<div id='ratingContainer' class='rating-container' style="
display: flex; justify-content: space-between;">
<div class="leftPart-rating-container">
<div class="leftPart-one"> 
<h3>Wrażenia</h3>
<div class="rating-one" style="display: flex;justify-content: flex-start;"> <p class="ratingName">Silnik</p><div class="ratingValue"><img src="https://dev.automotyw.com/wp-content/uploads/2021/08/star_gold.svg"><img src="https://dev.automotyw.com/wp-content/uploads/2021/08/star_gold.svg"><img src='https://dev.automotyw.com/wp-content/uploads/2021/08/star_gold.svg'><img src='https://dev.automotyw.com/wp-content/uploads/2021/08/star_gold.svg'></div> </div>
<div class="rating-one" style="display: flex;justify-content: flex-start;"> <p class="ratingName">Skrzynia biegow</p><div class="ratingValue"><span>*<span><span>*<span><span>*<span><span>*<span><span>*<span></div> </div>
</div> 
<div class="leftPart-one"> 
<h3>Komfort</h3>
<div class="rating-one" style="display: flex;justify-content: flex-start;"> <p class="ratingName">widocznosc</p><div class="ratingValue"><span>*<span><span>*<span><span>*<span><span>*<span><span>*<span></div> </div>
<div class="rating-one" style="display: flex;justify-content: flex-start;"> <p class="ratingName">Ergonomia</p><div class="ratingValue"><span>*<span><span>*<span><span>*<span><span>*<span><span>*<span></div> </div>
</div> 

<div class="leftPart-one"> 
<h3>Ekonomicznosc</h3>
<div class="rating-one" style="display: flex;justify-content: flex-start;"> <p class="ratingName">Łatwosc utrzymania</p><div class="ratingValue"><span>*<span><span>*<span><span>*<span><span>*<span><span>*<span></div> </div>
<div class="rating-one" style="display: flex;justify-content: flex-start;"> <p class="ratingName">Stosunek jakość/cena</p><div class="ratingValue"><span>*<span><span>*<span><span>*<span><span>*<span><span>*<span></div> </div>
</div> 

</div>
<div class="rightPart-rating-container">
<div class="pros-and-cons" style="display: flex;">
<img src='https://dev.automotyw.com/wp-content/uploads/2021/08/rekagora.svg' >
<div> <h3>Zalety</h3>
<p>Silnik</p>
<p>Przeniesienie napedu</p>
</div>
</div>
<div class="pros-and-cons" style="display: flex;">
<img src='https://dev.automotyw.com/wp-content/uploads/2021/08/rekadol.svg' >
<div> <h3>Wady</h3>
<p>Karosieria</p>
<p>wyciszenie</p>
</div>
</div>
</div>


</div>`;

var contentPage = document.querySelector("#primary").querySelector(".entry-content")
contentPage.appendChild(elem);