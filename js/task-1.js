const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };
  console.log(user);
  console.log(user.name);
  console.log(typeof user.age);


  user.colaboration = 'engenear';

  console.log(user.colaboration);

  console.log(user);

  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;

  console.log(user);

  for ( const key in user) {
    console.log(key);
  }
const keys = Object.keys(user);
  console.log(keys);

  console.log(Object.keys(user));

  for (const key of keys) {
    console.log(key,":",user[key]);
  }

  const enteries = Object.entries(user);
  console.log(enteries);