import React from 'react'
import NavBar from './NavBar'
import { auth } from '@/auth'

const NavBarcontainer = async () => {

    const session = await auth()
    const user = session?.user || null;
        // console.log(session)

  return (
    <NavBar LoggedInUser={user}/>
  )
}

export default NavBarcontainer
