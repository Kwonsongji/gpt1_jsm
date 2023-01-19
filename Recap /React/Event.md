## OnChange :
 -Écouteur d'évènement qui a pour but de prendre la valeur dans la champs de frappe et la mettre dans un state local
 -on le place dans la balise entrante de l'INPUT

Nb: pour éviter que la fonction s'enclenche automatiquement au chargement de la page
 on fait une fonction fléché dans l'onClick, onEvent

onChange={(e) => setAddTodo(e.target.value)
e vas nous permettre d'accèder à la target value 
on prends la value et on la passe à setAddTodo

## OnSubmit :
-Écouteur d'évent qui soumet le formulaire 
-on le place dans la balise FORM
 const onSubmit = (event) => {
    event.preventDefault();
  }
on ajoute le preventDefault car on ne veut pas que la page se recharge


## addEventListener : Ajouter un écouteur d'évent 

document.AddEventListener("nom du type d'évènement", callback/handler ) 

On passe l'event object callback/handler 

## removeEventListener : Arrêter un écouteur d'évent 