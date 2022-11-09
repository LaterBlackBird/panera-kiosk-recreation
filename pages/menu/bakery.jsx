import React from 'react'

import MenuLayout from "../../components/molecules/MenuLayout";


const Bakery = () => {
  return (
    <div>Bakery</div>
  )
}

export default Bakery

Bakery.getLayout = function getLayout(page) {
  return (
    <MenuLayout>
      {page}
    </MenuLayout>
  )
}