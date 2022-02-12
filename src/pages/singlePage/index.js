import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "utils/api";
import DefaultLayout from "components/layouts/defaultLayout"
import { Descriptions } from "antd";

export function SinglePage(){
    const [item, setItem] = useState({});
    const {mamad} = useParams()
    useEffect(function(){
        async function getApi(){
            try{
                const response = await api.get(`assets/${mamad}`);
                setItem(response.data.data)
            }catch(e){

            }
        }
        getApi();
    },[])
    return(
        <DefaultLayout>
        <p>single page</p>
        <Descriptions title="User Info" bordered={true} layout="vertical">
            <Descriptions.Item label="price">{item.priceUsd}</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
        </DefaultLayout>
    )
}
export default SinglePage; 