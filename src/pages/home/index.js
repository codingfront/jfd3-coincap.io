import { useEffect, useState } from "react";
import DefaultLayout from "components/layouts/defaultLayout";
import api from 'utils/api';
import { Link } from "react-router-dom";
import { Table } from "antd";

export function Home(){
    const [loading, setLoading] = useState(false);
    const [assets, setAssets] = useState([]);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const columnsObject = [
        {
            title:"name",
            dataIndex:"id",
            key:"id",
            render: text =>{
                return(
                    <Link to={`/crypto/${text}`}>{text}</Link>
                )
            },
            // render : function(text){
            //     return <Link to={text}>{text}</Link>
            // }
        
        },
        {
            title:"rank",
            dataIndex:"rank",
            key:"rank"
        },
        {
            title:"maxSupply",
            dataIndex:"maxSupply",
            key:"maxSupply",
            render: text=> <p className="Max">{Math.round(text)}</p>
        },
        {
            title:"%change 24Hr",
            dataIndex:"changePercent24Hr",
            key:"changePercent24Hr",
            render: text=> <p>{Math.round(text)}</p>
        }
    ]
    useEffect(function(){
        async function getApi(){
            try{
                setLoading(true);
                const response = await api.get('assets', {limit: limit, offset: offset});
                console.log(response);
                setAssets(response.data.data);
                setLoading(false);
            }catch(e){
                setLoading(false);
            }
        }
        getApi();
    },[])
    function renderFarm(){
        return assets.map(function(item){
            return(
                <li key={item.id}><Link to={`/crypto/${item.id}`}>{item.id}</Link></li>
            )
        })
    }
    async function loadMore(){
        try{
            setOffset(offset+10)
            const response = await api.get('assets', {limit: limit, offset: offset + 10 });
            setAssets(assets.concat(response.data.data))
        }catch(e){

        }
    }
    return(
        <DefaultLayout>
            <div style={{display: loading ? "block" : "none"}}>Loading...</div>
            <p>Home</p>
            {/* <ul>
            {renderFarm()}
            </ul> */}
            <Table columns={columnsObject} dataSource={assets}/>
            <button onClick={loadMore}>Load more</button>
        </DefaultLayout>
    )
}
export default Home;