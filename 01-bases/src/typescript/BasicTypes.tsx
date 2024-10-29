// type Props = {

// }
export const BasicTypes = (/* {}: Props */) => {
  const name: string = 'Diego';
  const age: number = 42;
  const isActive: boolean = true;
  const powers: string[] = ['Swim', 'Climb', 'Code', 'Fight'];

  return (
    <>
      <h2>Basic Types</h2>
      <p>
        {name} - {age} - {isActive ? 'Active' : 'Inactive'}
        <br />
        Powers:{' '}
        {powers.join(', ')}
      </p>
    </>
  );
};
