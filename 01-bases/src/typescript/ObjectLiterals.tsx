interface iObjLit {
  age: number;
  name: string;
  lastName: string;
  address: {
    country: string;
    city: string;
  };
}

export const ObjLit: iObjLit = {
  age:42,
  name:'Diego',
  lastName:'Dalairac',
  address:{
    country:'Argentina',
    city:'Buenos Aires',
  }

}
export const ObjectsLiterals = (/* {}: Props */) => {
  return (
    <p>
{JSON.stringify(ObjLit, null, 2)}
    </p>
  );
}
