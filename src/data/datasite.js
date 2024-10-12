let dataSite = { json_url: 'https://quyle91.net' };
let isFetching = false;
let resolveQueue = [];

const fetchDataSite = () => {
    if (Object.keys(dataSite).length > 1) { // Đảm bảo dữ liệu khác ngoài json_url đã được gọi
        return Promise.resolve(dataSite);
    }

    if (isFetching) {
        return new Promise(resolve => resolveQueue.push(resolve));
    }

    isFetching = true;

    const url = `${dataSite.json_url}/wp-json/options/cv?field=information,vetoi,kynang,sothich,muctieu,kinhnghiemlamviec,hocvan,tinhcach,nguoithamchieu,setup,socials`;

    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            dataSite = { ...dataSite, ...data };
            resolveQueue.forEach(resolve => resolve(dataSite));
            resolveQueue = [];
            console.log("Fetch Wordpress json ", dataSite); 
            return dataSite;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resolveQueue.forEach(resolve => resolve(null));
            resolveQueue = [];
            return null;
        })
        .finally(() => {
            isFetching = false;
        });
};

export { fetchDataSite };
