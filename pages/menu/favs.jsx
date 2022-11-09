import React from 'react'

import MenuLayout from "../../components/molecules/MenuLayout";

const Favs = () => {
  return (
    <div>Favs</div>
  )
}

export default Favs

Favs.getLayout = function getLayout(page) {
  return (
    <MenuLayout>
      {page}
    </MenuLayout>
  )
}