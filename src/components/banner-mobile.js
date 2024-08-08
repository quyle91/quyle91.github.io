import { useState, useEffect } from 'react';
import { fetchDataSite } from '../data/datasite';

const BannerMobile = () => {
    const [dataSite, setDataSite] = useState(null);
    useEffect(() => {
        const loadData = async () => {
            const data = await fetchDataSite();
            if (data) {
                setDataSite(data);
            }
        };
        loadData();
    }, []);

    // Tránh lỗi nếu dataSite chưa được load
    const banner = dataSite?.information?.banner || '';

    return (
        <>
            <div
                id="banner-mobile"
                className="bgimg w3-grayscale-max w3-hide-large"
                style={{
                    height: "300px",
                    width: "100%",
                    backgroundImage: `url(${banner})`,
                    backgroundPosition: "center center"
                }}
            ></div>
        </>
    )
}
export default BannerMobile