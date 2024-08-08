import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Fetching from "../templates/fetching";

const ExperienceCv = ({ dataSite }) => {
    const { t } = useTranslation();
    const kinhnghiemlamviec = dataSite?.kinhnghiemlamviec || [];
    const [dataCongty, setDataCongty] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDataCongty = useCallback(async () => {
        if (!dataSite?.json_url) {
            setLoading(false);
            return;
        }

        try {
            const request = await fetch(`${dataSite.json_url}/wp-json/wp/v2/congty`);
            const response = await request.json();
            setDataCongty(response);
        } catch (error) {
            console.log('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }, [dataSite?.json_url]);

    useEffect(() => {
        fetchDataCongty();
    }, [fetchDataCongty]);

    const getCongtyName = (value) => {
        const result = dataCongty.find((item) => item.id === value);
        return result ? result.name : "";
    };

    if (loading) {
        return <Fetching />;
    }

    return (
        <div id="experience-cv">
            <h2 className="w3-padding-16">{t("Kinh nghiệm làm việc")}</h2>
            {
                kinhnghiemlamviec.length > 0 ?
                    kinhnghiemlamviec.map((item, key) => (
                        <React.Fragment key={key}>
                            <div className="w3-row">
                                <div className="w3-twothird">
                                    <h6>
                                        <strong style={{ textTransform: "uppercase" }}>
                                            <span className="w3-uppercase">{getCongtyName(item.congty)}</span>
                                        </strong>
                                    </h6>
                                    <i>{item.vitri}</i>
                                </div>
                                <div className="w3-third">
                                    <p>{item.thoigian}</p>
                                </div>
                            </div>
                            <ol className="w3-ol">
                                {
                                    item.congviec.map((item, key) => (
                                        <li key={key}>
                                            {item.item}
                                        </li>
                                    ))
                                }
                            </ol>
                        </React.Fragment>
                    ))
                    : <Fetching />
            }
        </div>
    );
};

export default ExperienceCv;
