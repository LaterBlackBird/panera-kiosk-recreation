import React from 'react'

import MenuLayout from "../../components/molecules/MenuLayout";


const Pizza = () => {
  return (
    <div>Pizza</div>
  )
}

export default Pizza

Pizza.getLayout = function getLayout(page) {
  return (
    <MenuLayout>
      {page}
    </MenuLayout>
  )
}