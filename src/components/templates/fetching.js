import { useTranslation } from "react-i18next";
const Fetching = ()=>{
	const { t } = useTranslation();
	return <i className="	fa fa-spinner w3-spin"></i>
}
export default Fetching