## HOOK USTATE:
 nous permet d'avoir un état local dans un composant de type fonction sans utiliser les classes

## HOOK D'EFFECT 
  nous permet
  ## COMPONENT DIDMOUNT ( MOMENT DU CHARGEMENT DU COMPOSANT ):
  ## COMPONENT DIDUPDATE ( LORS D'UNE MODIFICATION D'UN STATE/PROPS)
import { useEffect } from 'react'; 
//effet de bord ou Hook d'effet permet de charger les données 
  ## COMPONENT WILLUNMOUNT ( LORS DU DÉMONTAGE D'UN COMPOSANT ==> nettoyage)
  car il est impératif de nettoyer pour éviter les fuites de mémoire ( ex: lors d'un abonnement)

  ex: useEffect(() =>, [] )


## HOOK SELECTOR
import { useSelector } from 'react-redux'; 
Le sélecteur est approximativement équivalent à l'argument mapStateToProps pour se connecter de manière conceptuelle.

## HOOK DISPATCH ( dispatch une action)
import { useDispatch } from 'react-redux'; 
Ce hook renvoie une référence à la fonction dispatch du  Redux Store. 
