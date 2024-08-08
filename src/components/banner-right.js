import { useState, useEffect } from 'react';
import { fetchDataSite } from '../data/datasite';

const BannerRight = () => {
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
    const banner = dataSite?.information?.banner || '';

    return (
        <>
            <nav className="w3-sidebar w3-hide-medium w3-hide-small" style={{ width: "15%", right: "0px" }}>
                <div className="bgimg w3-grayscale-max" style={{ backgroundImage: `url(${banner})` }}></div>
            </nav>
        </>
    )
}
export default BannerRight