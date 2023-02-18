hero : section super mise en avant avec un peu de travail graphique

margin: 1rem 0; /* espace en haut et bad et middle */

flex-grow: 1; // chaque item ont la même largeur 


flex-grow: 2; // le 1er item est la largeur de la somme des deux autres items 

flex: 1 means the following:

flex-grow : 1;    ➜ The div will grow in same proportion as the window-size       
flex-shrink : 1;  ➜ The div will shrink in same proportion as the window-size 
flex-basis : 0;   ➜ The div does not have a starting value as such and will 
                     take up screen as per the screen size available for
                     e.g:- if 3 divs are in the wrapper then each div will take 33%.



::nth-of-type(1) vise le 1er élément
::nth-of-type(2n +1) vise partie impairs 

::nth-of-type(2n) vise partie pairs 

&nbsp : espace

backdrop-filter: blur(4px); effet de flou derrière l'élément

 outline: rgb(255,0,0) dashed 1px; /* bordure */
 box-sizing: border-box; /* bordure imaginaire */

 visibility : visible/hidden, rendre un élement caché ou visible

scroll-behavior: smooth; défilement plus doux

line-height: 25px; /* espacement entre les lignes */

text-transform: capitalize; /* met la 1ère lettre de chaque mot en maj */

display: flex; /* par défaut ce sera en ligne */

outline : bordure interne par ex d'un input 

 <div /> {/* avoir de l'espace */}

 :lastchild La pseudo-classe permet de cibler un élément qui est le dernier enfant de son parent.