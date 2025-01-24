interface Person {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'szV5sdG'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'YfeOqp2'
}];

function getImageUrl(imageId: string) {
  return "https://i.imgur.com/" + imageId + "s.jpg"
}

interface PersonImageProps {
  imageId: string;
  name: string;
}

function PersonImage({ imageId, name }: PersonImageProps) {
  return (
    <img
      src={getImageUrl(imageId)}
      alt={name}
    />
  );
}

interface PersonDetailsProps {
  name: string;
  profession: string;
  accomplishment: string;
}

function PersonDetails({ name, profession, accomplishment }: PersonDetailsProps) {
  return (
    <p>
      <b>{name}:</b>
      {' ' + profession + ' '}
      known for {accomplishment}
    </p>
  );
}

interface PersonListItemProps {
  person: Person;
}

function PersonListItem({ person }: PersonListItemProps) {
  return (
    <li key={person.id}>
      <PersonImage imageId={person.imageId} name={person.name} />
      <PersonDetails 
        name={person.name}
        profession={person.profession}
        accomplishment={person.accomplishment}
      />
    </li>
  );
}

export default function List() {
  return (
    <ul>
      {people.map(person => (
        <PersonListItem key={person.id} person={person} />
      ))}
    </ul>
  );
}