import React from 'react'

import MenuLayout from "../../components/molecules/MenuLayout";


const Soup = () => {
  return (
    <div>Soup</div>
  )
}

export default Soup

Soup.getLayout = function getLayout(page) {
  return (
    <MenuLayout>
      {page}
    </MenuLayout>
  )
}