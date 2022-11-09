import React from 'react'

import MenuLayout from "../../components/molecules/MenuLayout";


const Beverages = () => {
  return (
    <div>Beverages</div>
  )
}

export default Beverages

Beverages.getLayout = function getLayout(page) {
  return (
    <MenuLayout>
      {page}
    </MenuLayout>
  )
}