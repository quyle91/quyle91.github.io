import { useEffect, useState } from "react"
// import { useTranslation } from "react-i18next";

import SingleDuan from './single-duan'
import SingleLoading from './single-loading'
// data
import {data_blog} from "../../data/datas"
// import { projectsDataItems, projectsDataItemType} from '../../data/projects'



const ContentDuan = () => {
    const [loading, setLoading] = useState(true);
    // 1. Cho lần chạy đầu tiên.
    const [duan, setDuan] = useState([]);
    const [congty, setCongty] = useState([]);
    const [loaiduan, setLoaiduan] = useState([]);
    const [namduan, setNamduan] = useState([]);

    useEffect(() => {
        fetchDataFromJSON(99); // lần load đầu tiên là 9
    }, []); // Mảng rỗng sẽ đảm bảo hàm useEffect chỉ được gọi một lần khi component được tải lần đầu

    const fetchDataFromJSON = async (param) => {        
        try {
            // promise
            const urls = [
                data_blog.test_url+'/wp-json/wp/v2/featured_item?per_page='+param,
                data_blog.test_url+'/wp-json/wp/v2/congty',
                data_blog.test_url+'/wp-json/wp/v2/loaiduan',
                data_blog.test_url+'/wp-json/wp/v2/nam'
            ];
            const fetchRequests = urls.map(url => fetch(url));
            const responses = await Promise.all(fetchRequests);
            const dataPromises = responses.map(response => response.json());
            const jsonData = await Promise.all(dataPromises);

            setDuan(jsonData[0]);
            setCongty(jsonData[1]);
            setLoaiduan(jsonData[2]);
            setNamduan(jsonData[3]);
            setLoading(false);

        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };


    const [filterLoaiduan, setFilterLoaiduan] = useState("")
    const handleChangeLoaiduan = (e)=>{
        setFilterLoaiduan(e.target.value);
    }
    const [filterNamduan, setFilterNamduan] = useState("")
    const handleChangeNamduan = (e)=>{
        setFilterNamduan(e.target.value);
    }
    const [filterCongty, setFilterCongty] = useState("")
    const handleChangeCongty = (e)=>{
        setFilterCongty(e.target.value);
    }

    return ( 
        <>
            <div id="content-project" className="w3-row">
                <div className="w3-content content">
                    <div className="col-container row-fix-margin">
                        <div className="w3-col l3 s6 w3-padding setLoaiduan">
                            <select className="w3-select w3-white w3-border" onChange={handleChangeLoaiduan}>
                                <option value="">- Tất cả loại dự án- </option>
                                {
                                    loaiduan.map((item,key)=>(
                                        <option value={item.id} key={key}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="w3-col l3 s6 w3-padding nam">
                            <select className="w3-select w3-white w3-border"  onChange={handleChangeNamduan}>
                                <option value="">- Tất cả năm- </option>
                                {
                                    namduan.map((item,key)=>(
                                        <option value={item.id} key={key}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="w3-col l3 s6 w3-padding congty">
                            <select className="w3-select w3-white w3-border"  onChange={handleChangeCongty}>
                                <option value="">- Tất cả công ty- </option>
                                {
                                    congty.map((item,key)=>(
                                        <option value={item.id} key={key}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <hr/>
                    { 
                        loading?
                        <SingleLoading/>:
                        (
                            <div className="col-container row-fix-margin">
                            {
                                duan.map((post,key)=>(
                                    (filterLoaiduan==='' && filterNamduan==='' && filterCongty==='') ?
                                        <SingleDuan key={key} post={post} congty={congty}/>
                                    :
                                        (
                                            (filterLoaiduan ==='' || post.loaiduan.includes(Number(filterLoaiduan))) && 
                                            (filterNamduan ==='' || post.nam.includes(Number(filterNamduan))) &&
                                            (filterCongty ==='' || post.congty.includes(Number(filterCongty)))
                                        )?
                                        <SingleDuan key={key} post={post} congty={congty}/>
                                        :
                                            ""
                                ))
                            }
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="w3-padding-32 w3-content w3-text-grey" style={{marginBottom: "64px"}}></div>
        </>
    )
}
export default ContentDuan