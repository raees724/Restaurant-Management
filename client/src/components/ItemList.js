import React from 'react'
import { Button,Card } from "antd";
import { useDispatch } from 'react-redux';
const ItemList = ({item}) => {
  const dispatch = useDispatch();
  //update cart handler
  const handleAddToCart =() =>{
    dispatch({
      type:'updateCart',
      payload: item
    })
  }
  const {Meta} = Card;
  return (
    <div>
      <Card
      style={{width:240, marginBottom:20}}
      cover={<img alt={item.name} src={item.image} style={{height:250}}/>}
      >
        <Meta title={item.name} />
        <div className='item-button'>
          <Button onClick={handleAddToCart}>Add to cart</Button>
        </div>
      </Card>
    </div>
  )
}

export default ItemList
