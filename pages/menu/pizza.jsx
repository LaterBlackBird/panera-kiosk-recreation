import React from 'react'

import MenuLayout from "../../components/molecules/MenuLayout";


const Sandwiches = () => {
  return (
    <div>Sandwiches</div>
  )
}

export default Sandwiches

Sandwiches.getLayout = function getLayout(page) {
  return (
    <MenuLayout>
      {page}
    </MenuLayout>
  )
}