## Add une valeur à un array :

a) Js :
const people = []
people.push('sonny', qazi')


b) React :
const [ setPeople, people ] = useState([]);
setPeople([...people, 'sonny'])