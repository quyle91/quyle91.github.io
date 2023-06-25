import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

export const data_lngs = [
	{ 
		code: "en", 
		native: "English" ,
		flag: './img/languages/english.svg'
	},
	{ 
		code: "vn", 
		native: "Vietnamese" ,
		flag: './img/languages/vietnamese.svg'
	},
];


i18n.use(initReactI18next).init(
	{
		debug: false,
		fallbackLng: 'vn',
		interpolation: {
	  		escapeValue: false, // not needed for react as it escapes by default
		},
		resources: {
			vn: {
				translation: {
					Language: "Ngôn ngữ",
					/*"Tìm tôi trên mạng xã hội": "Tìm tôi trên mạng xã hội",
					"Về tôi" : "Về tôi",*/
				}
			},
			en: {
				translation: {
					Language: "Language",
					"Tìm tôi trên mạng xã hội": "I am on Socials",
					"Về tôi" : "About me",
					"Kinh nghiệm làm việc từ 2014 đến nay": "From 2014",
					"Là người có trách nhiệm với công việc và hướng đến sự chuyên nghiệp. Tôi mong muốn nhận được sự tin tưởng của đồng nghiệp & khách hàng.": "Be responsible for work and aim for professionalism. I look forward to gaining the trust of colleagues & customers.",
					"Xem Cv của tôi": "View my CV",
					"Khách hàng" : "Clients",
					"Dự án đã hoàn thành" : "The project had finished",
					"Khách hàng có phản hồi tốt" : "Customers have good feedback",
					"Thông tin liên hệ": "Contact informations",
					"Gọi cho tôi" : "Call me",
					"Quý Lê" : "Quy Le",
					"Trang chính": "Home",
					"Dự án" : "Projects",
					"Kinh nghiệm làm việc" : "Work experience",
					"Lê Văn Quý" : "Quy Le",
					"Sở thích": "Interest",
					"Đôi chút về tính cách": "A little bit about personality",
					"Dự án gần đây": "Recent Projects",
					"Xem thêm" : "View more",
					"Plugin wordpress Administrator Z": "Wp plugin Administrator Z",
					"Plugin wordpress tự tạo sản phẩm khi tải hình ảnh": "WP plugin auto product after upload",
					"Người tham chiếu": "Reference person",
					"Kỹ năng": "Skills",
					"Học vấn": "Certificate",
					"Các dự án đã hoàn thành": "Completed projects",
					"Lọc": "Filters",
					"bài viết": "post",
					"Xem phiên bản online tại":"View the online version at",
					"Đang fetch dữ liệu. Chờ tý nha...": "Fetching data. Wait a minute..."
				}
			},
		}
	}
);
export default i18n;




