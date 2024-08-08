let dataSite = {};

const fetchDataSite = async () => {
    dataSite.source = 'https://quyle91.net';
    try {
        const response = await fetch(`${dataSite.source}/wp-json/options/cv?field=information,kynang,sothich,muctieu,kinhnghiemlamviec,hocvan,tinhcach,nguoithamchieu,blog_category`);
        const data = await response.json();
        dataSite = { ...dataSite, ...data };
        console.log("--xxx-- Đây là setting từ wordpress json --xxx-- ", dataSite);
        return dataSite;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export { fetchDataSite };