import React from 'react'
import NavBar from './NavBar'
import { auth } from '@/auth'

const NavBarcontainer = async () => {

    const session = await auth()
    const user = session?.user
        // console.log(session)
    // Validation stricte pour ne passer que si tout est défini et non null
    const loggedInUser = user && user.name && user.email && user.image
    ? {
        name: user.name,
        email: user.email,
        image: user.image,
        }
    : null

  return (
    <NavBar LoggedInUser={loggedInUser}/>
  )
}

export default NavBarcontainer
