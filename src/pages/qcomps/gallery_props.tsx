interface AwardProps {
  count: number;
  list: string;
}

interface ProfileImageProps {
  imageUrl: string;
  name: string;
}

interface ProfileDetailsProps {
  profession: string;
  awards: AwardProps;
  discovery: string;
}

interface ProfileProps {
  name: string;
  imageUrl: string;
  profession: string;
  awards: AwardProps;
  discovery: string;
}

function ProfileImage({ imageUrl, name }: ProfileImageProps) {
  return (
    <img
      className="avatar"
      src={imageUrl}
      alt={name}
      width={70}
      height={70}
    />
  );
}

function ProfileDetails({ profession, awards, discovery }: ProfileDetailsProps) {
  return (
    <ul>
      <li>
        <b>Profession: </b>
        {profession}
      </li>
      <li>
        <b>Awards: {awards.count} </b>
        ({awards.list})
      </li>
      <li>
        <b>Discovered: </b>
        {discovery}
      </li>
    </ul>
  );
}

function Profile(props: ProfileProps) {
  const { name, imageUrl, profession, awards, discovery } = props;
  return (
    <section className="profile">
      <h2>{name}</h2>
      <ProfileImage imageUrl={imageUrl} name={name} />
      <ProfileDetails 
        profession={profession}
        awards={awards}
        discovery={discovery}
      />
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl="https://i.imgur.com/szV5sdGs.jpg"
        profession="physicist and chemist"
        awards={{
          count: 4,
          list: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
        }}
        discovery="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi" 
        imageUrl="https://i.imgur.com/YfeOqp2s.jpg"
        profession="geochemist"
        awards={{
          count: 2,
          list: "Miyake Prize for geochemistry, Tanaka Prize"
        }}
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
