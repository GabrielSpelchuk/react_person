export const Person = ({ person }) => {
  let partnerNode = '';

  if (person.isMarried) {
    if (person.sex === 'm') {
      partnerNode = `${person.partnerName} is my wife`;
    } else {
      partnerNode = `${person.partnerName} is my husband`;
    }
  } else {
    partnerNode = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age !== undefined ? (
        <p className="Person__age">{`I am ${person.age}`}</p>
      ) : null}
      <p className="Person__partner">{partnerNode}</p>
    </section>
  );
};
