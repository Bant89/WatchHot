import React from 'react'
import { MovieItem } from '../MovieItem'
import { Spin, List } from 'antd'
export const MovieList = ({ loading = true, items = [] }) => {
  
  if(loading) {
    return <Spin tip="Loading"></Spin>
  }else {
    return (
      <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}>
        {items.map(e => {
          return <List.Item key={e.id}><MovieItem movie={e} /></List.Item>
        })}
      </List>
    )
  }
}


