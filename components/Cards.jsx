import { Card } from 'antd'
import React from 'react'

function Cards({item}) {
  console.log('item', item)
  return (
    <div className="site-card-border-less-wrapper">
    <Card
      title={item?.title}
      bordered={false}
      style={{
        width: "100%",
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
  )
}

export default Cards