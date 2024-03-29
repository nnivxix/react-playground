import { createContext, useContext, useState } from 'react'
import Default from '../layouts/Default'

interface UserContextType {
  user: {
    name: string;
    age: number;
  };
  setUser: ({ name, age }: {
    name: string,
    age: number
  }) => void
}
const UserContext = createContext<UserContextType>({
  user: {
    name: '',
    age: 0,
  },

  setUser: () => null
})

export default function UseContext() {

  // Parent Component
  const [user, setUser] = useState({
    name: '',
    age: 0,
  });

  return (
    <Default>
      <UserContext.Provider value={{ user, setUser }}>
        <h1>use context: parent component</h1>
        <Form />
      </UserContext.Provider>
    </Default>
  )
}


function Form() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      {!user.name && (
        <button onClick={() =>
          setUser({
            name: 'hanasa',
            age: 26
          })
        }>
          login as hanasa
        </button>
      )}
      {user.name && (
        <Welcome />
      )}
      <p>from Form component</p>
    </>
  )
}

function Welcome() {
  const { user, setUser } = useContext(UserContext)
  return (
    <div className='border'>
      <h1>Welcome back {user.name}</h1>
      <h1>Your age {user.age} years old</h1>
      <button onClick={() => {
        setUser({
          name: '',
          age: 0
        })
      }}>
        Logout
      </button>
      <User />

      <p>from Welcome component</p>
    </div>
  )
}

function User() {
  const { user } = useContext(UserContext)
  return (
    <div className='border'>
      <p>{user.name}</p>
      <p>from User component</p>
    </div>
  )

}