import React,{useState,useEffect} from "react";
import DefaultLayout from "./../components/DefaultLayout";
import axios from "axios";
import {Row,Col} from 'antd'
import ItemList from "./../components/ItemList";

const Homepage = () => {
  const [itemData,setItemData] = useState([]);

  useEffect(()=>{
    const getAllItems = async () =>{
      try{
        const {data} = await axios.get("/api/items/get-item");
        setItemData(data);
        console.log(data)
      }catch(error){
        console.log(error)
      }
    };
    getAllItems();
  },[])

  return (
    <DefaultLayout>
      <Row>
        {
          itemData.map(item=>(
            <Col xs={24} lg={6} md={12} sm={6}>
            <ItemList item={item}/>
            </Col>
          ))
        }
      </Row>
    </DefaultLayout>
  );
};

export default Homepage;
