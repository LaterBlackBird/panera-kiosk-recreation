import React from 'react'

import MenuLayout from "../../components/molecules/MenuLayout";


const Salads = () => {
  return (
    <div>Salads</div>
  )
}

export default Salads

Salads.getLayout = function getLayout(page) {
  return (
    <MenuLayout>
      {page}
    </MenuLayout>
  )
}