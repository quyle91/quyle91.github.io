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
					"Chuyên ngành: Thiết kế website - Loại khá": "Major: Website Design - Graduated with honors",
					"Kinh nghiệm làm việc" : "Work experience",
					"Lê Văn Quý" : "Quy Le",
					"Sở thích": "Interest",
					"Đôi chút về tính cách": "A little bit about personality",
					"Là người hướng nội": "Being an introvert",
					"Tiếp thu chậm. Thích tìm hiểu rõ ràng nếu có thể." : "Slow reception. Prefer to find out clearly if possible",
					"Thích xem phim Mỹ và văn hoá thực dụng của người Mỹ, thích nói đến kết quả đi kèm với phương pháp để đạt được kết quả đó. Nghe ko lọt tai những lời khen, chê vô nghĩa." : "Love watching American movies and American pragmatic culture, love talking about results and methods to get them. I can't listen to meaningless compliments and criticisms.",
					"Dự án gần đây": "Recent Projects",
					"Xem thêm" : "View more",
					"Plugin wordpress Administrator Z": "Wp plugin Administrator Z",
					"Plugin wordpress tự tạo sản phẩm khi tải hình ảnh": "WP plugin auto product after upload",
					"Người tham chiếu": "Reference person",
					"Giám đốc điều hành": "Managing director",
					"Kỹ năng": "Skills",
					"Học vấn": "Certificate",
					"Có nhiều năm kinh nghiệm với Wordpress như: phát triển theme/ plugin/ custom":"Having many years of experience with Wordpress such as: developing themes/plugins or building custom functions",
					"Mục tiêu dài hạn: Full stack developer.":"Long term goal: Full stack developer.",
					"Mong muốn: Được làm việc trong môi trường chuyên nghiệp.":"Desire: To work in a professional environment.",
					"Mức lương mong muốn: 15tr - 20tr/ tháng.":"Expected salary: 15 million - 20 million / month.",
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




