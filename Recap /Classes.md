
### PROGRAMATION ORIENTÉ OBJET:
## DIDMOUNT ( MOMENT DU CHARGEMENT DU COMPOSANT ):
Dans un composant de type classe, on a accès aux méthode de cycle de vie
## DIDMOUNT ( MOMENT DU CHARGEMENT DU COMPOSANT ):
## DIDUPDATE ( LORS D'UNE MODIFICATION D'UN STATE/PROPS)
## Les Classes :
Modèle qui définit la structure d'un objet, ses attributs, ses méthodes. Les OBJETS sont créés ("INSTANCIÉS") à partir de ce modèle.
Nb : short hand rcc (), rconst ( constructor), cdm (componentDidMount)
## L'instanciation :
Créer une instance (un objet) de la classe MyClass avec new :

const instance = new MyClass()

Nb : instance est un OBJET

## ATTRIBUT :
- 1) Déclarer les attributs d'une classe :

class Person {
  name = 'John Doe';
}

- 2) Lire une valeur :
  - créer un obj de la class Person puis log:
  const instance = new Person();
  console.log(intance.name); // John Doe

- 3) Assigner un nouv' valeur 
  instance.name = 'Barbara Moo';
   console.log(intance.name); // BarBara Moo

## MÉTHODE
- 1) Déclarer les méthodes d'une classe :

class Person {
  hello()
  {
    console.log('Oh hello ! ')
  }
}
- 2) Appeler/Executer la méthode(publique) :
  const anonymous = new Person();
  anonymous.hello()

## THIS :
Variable accessible dans le contexte de l'objet, référence à l'objet lui-même :

class Person
{
    name = 'John Doe';

    hello()
    {
        console.log('Oh, hello, my name is '  + this.name);
    }
}

## GETTER ET SETTER :

Méthodes standard qui permettent un accès contrôlé aux PROPRIÉTÉS PRIVÉES.

class Person {
  #secret = 123;
}
get secret()
{
  return this.#secret; 
}
set secret()
{
  if(!isNan(parseInt(newSecret))) {
    this.#secret = newSecret 
  }
}

## CONSTRUTOR
Méthode magique d'un objet qui est appelée automatiquement à l'instanciation de l'objet.