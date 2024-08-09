import { useEffect, useState, useMemo, useCallback } from "react";
import { fetchDataSite } from "../../data/datasite";
import SingleDuan from './single-duan';
import SingleLoading from './single-loading';
import NoData from '../templates/nodata';
import { useTranslation } from "react-i18next";

const ContentDuan = () => {
    const { t } = useTranslation();
    const [json_url, setJsonUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [duan, setDuan] = useState([]);
    const [congty, setCongty] = useState([]);
    const [loaiduan, setLoaiduan] = useState([]);
    const [namduan, setNamduan] = useState([]);

    const [filterLoaiduan, setFilterLoaiduan] = useState("");
    const [filterNamduan, setFilterNamduan] = useState("");
    const [filterCongty, setFilterCongty] = useState("");

    const [error, setError] = useState(null); // Thêm trạng thái lỗi

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchDataSite();
                if (data && data.json_url) {
                    setJsonUrl(data.json_url);
                    fetchDataFromJSON(99, data.json_url);
                } else {
                    setLoading(false);
                }
            } catch (err) {
                setError('Failed to fetch data from the server.'); // Thiết lập thông báo lỗi
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const fetchDataFromJSON = async (param, json_url) => {
        try {
            const urls = [
                `${json_url}/wp-json/wp/v2/featured_item?per_page=${param}`,
                `${json_url}/wp-json/wp/v2/congty`,
                `${json_url}/wp-json/wp/v2/loaiduan`,
                `${json_url}/wp-json/wp/v2/nam`
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
            setError('Error fetching data from JSON.'); // Thiết lập thông báo lỗi
            setLoading(false); // Đặt loading = false ngay cả khi có lỗi để tránh vòng lặp tải không ngừng
        }
    };

    const filteredDuan = useMemo(() => {
        return duan.filter(post =>
            (filterLoaiduan === '' || post.loaiduan.includes(Number(filterLoaiduan))) &&
            (filterNamduan === '' || post.nam.includes(Number(filterNamduan))) &&
            (filterCongty === '' || post.congty.includes(Number(filterCongty)))
        );
    }, [duan, filterLoaiduan, filterNamduan, filterCongty]);

    const handleChangeLoaiduan = useCallback((e) => {
        setFilterLoaiduan(e.target.value);
    },[]);

    const handleChangeNamduan = useCallback((e) => {
        setFilterNamduan(e.target.value);
    },[]);

    const handleChangeCongty = useCallback((e) => {
        setFilterCongty(e.target.value);
    },[]);

    return (
        <>
            <div id="content-project" className="w3-row">
                <div className="w3-content content">
                    <div className="col-container row-fix-margin">
                        <div className="w3-col l3 s6 w3-padding setLoaiduan">
                            <select className="w3-select w3-white w3-border" onChange={handleChangeLoaiduan}>
                                <option value="">- {t("Tất cả loại dự án")}- </option>
                                {loaiduan.map((item, key) => (
                                    <option value={item.id} key={key}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w3-col l3 s6 w3-padding nam">
                            <select className="w3-select w3-white w3-border" onChange={handleChangeNamduan}>
                                <option value="">- {t("Tất cả năm")}- </option>
                                {namduan.map((item, key) => (
                                    <option value={item.id} key={key}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w3-col l3 s6 w3-padding congty">
                            <select className="w3-select w3-white w3-border" onChange={handleChangeCongty}>
                                <option value="">- {t("Tất cả công ty")}- </option>
                                {congty.map((item, key) => (
                                    <option value={item.id} key={key}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <hr />
                    {loading ? <SingleLoading /> : (
                        error ? <div>{error}</div> : (
                            <div className="col-container row-fix-margin">
                                {filteredDuan.length === 0 ? <NoData /> : (
                                    filteredDuan.map((post, key) => (
                                        <SingleDuan key={key} post={post} congty={congty} />
                                    ))
                                )}
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="w3-padding-32 w3-content w3-text-grey" style={{ marginBottom: "64px" }}></div>
        </>
    );
};

export default ContentDuan;
