import { MdHome,MdContacts,MdNotifications } from "react-icons/md";
import { FaUsers} from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import PersonalInformation from "../components/PersonalInformation";
import AccountInformation from "../components/AccountInformation";
import BusinessInformation from "../components/BusinessInformation";

export const services = [
  {
    label: "Electric Car Charger",
    value: "electric_car_charger",
    image: "https://m.media-amazon.com/images/I/61lwZr22zkL._AC_UF894,1000_QL80_.jpg"
  },
  {
    label: "Cross Border Payment",
    value: "cross_border_payment",
    image: "https://www.nitrobox.com/wp-content/uploads/what-are-payment-service-providers-wiki-article-feature-image.png"
  },
  {
    label: "Credit Card- Workforce CC",
    value: "creditcard_workforce_cc",
    image: "https://media.gettyimages.com/id/1779996890/photo/bath-united-kingdom-in-this-photo-illustration-the-visa-mastercard-and-american-express-logos.jpg?s=612x612&w=gi&k=20&c=Q-ZrjkJtTiJG8OsS0Oqqqya8ElLsf-fzdZ15gJBpNts="
  },
  {
    label: "Restaurant",
    value: "restaurant",
    image: "https://blog.vectatravels.com/wp-content/uploads/2018/05/rsz_fancy.jpg"
  },
  {
    label: "C-Mall Ecommerce",
    value: "c_mall_ecommerce",
    image: "https://www.servcorp.co.uk/media/34561/e-commerce-img.jpeg?format=webp&quality=80&width=688"
  },
  {
    label: "Music Money Box - MMB",
    value: "music_money_box",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKVYn8mgqSf0Fb0AXsuHTdnJ8D_rrj9nT3g&s"
  },
  {
    label: "Real Estate",
    value: "real_estate",
    image: "https://cdn.prod.website-files.com/62d9c717894dc19357ee7640/63ca8aa33c1b3b7c87cc13d3_realestate.jpg"
  },
  {
    label: "Car Pooling Service",
    value: "car_pooling_service",
    image: "https://www.elog-group.com/upload/pooling_sistem1.jpg"
  },
  {
    label: "Mobile Health Service",
    value: "mobile_health_service",
    image: "https://media.licdn.com/dms/image/v2/C4D1BAQHKoycNIXHKYg/company-background_10000/company-background_10000/0/1583639567756/medex_healthcare_co_cover?e=2147483647&v=beta&t=cxhITWOAEuXZ7PO7ZSVwbflxEqE2uBMWpRVzcZI5FpY"
  }
];

export const navIcons = [
{name:'Home', icon: MdHome },
{name:'Contact', icon: MdContacts },
{name:'Users', icon: FaUsers },
{name:'Notifications', icon: MdNotifications },
{name:'Edit', icon: CiEdit },
]


export const users = [
  {
    name: "John Doe",
    role: "Product Designer",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    dob: "04/08/1990",
    homeAddress: "123 Main Street, Springfield, USA",
    officeAddress: "456 Corporate Blvd, Springfield, USA",
    contact: "+2348143454433",
    mobile: "+2348143454433",
    email: "johndoe@gmail.com",
    social_handles: [
      { platform: "Twitter", url: "https://twitter.com/johndoe" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
      { platform: "Instagram", url: "https://instagram.com/johndoe" },
    ],
  },
  {
    name: "Jane Smith",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    dob: "12/03/1985",
    homeAddress: "456 Elm Street, Chicago, USA",
    officeAddress: "789 Innovation Way, Chicago, USA",
    contact: "+2348147454537",
    mobile: "+2348147454537",
    email: "janesmith@gmail.com",
    social_handles: [
      { platform: "Twitter", url: "https://twitter.com/janesmith" },
      { platform: "GitHub", url: "https://github.com/janesmith" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/janesmith" },
    ],
  },
  {
    name: "Michael Brown",
    role: "UX Researcher",
    image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    dob: "15/06/1992",
    homeAddress: "789 Pine Avenue, Los Angeles, USA",
    officeAddress: "123 Research Blvd, Los Angeles, USA",
    contact: "+2348032233211",
    mobile: "+2348032233211",
    email: "michaelbrown@gmail.com",
    social_handles: [
      { platform: "Twitter", url: "https://twitter.com/michaelbrown" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/michaelbrown" },
      { platform: "Dribbble", url: "https://dribbble.com/michaelbrown" },
    ],
  },
  {
    name: "Emily Johnson",
    role: "Marketing Specialist",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    dob: "23/11/1988",
    homeAddress: "321 Oak Street, Houston, USA",
    officeAddress: "654 Commerce Road, Houston, USA",
    contact: "+2348067654455",
    mobile: "+2348067654455",
    email: "emilyjohnson@gmail.com",
    social_handles: [
      { platform: "Facebook", url: "https://facebook.com/emilyjohnson" },
      { platform: "Instagram", url: "https://instagram.com/emilyjohnson" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/emilyjohnson" },
    ],
  },
  {
    name: "David Williams",
    role: "Data Scientist",
    image: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
    dob: "05/02/1993",
    homeAddress: "678 Cedar Lane, New York, USA",
    officeAddress: "890 Analytics Drive, New York, USA",
    contact: "+2348071112233",
    mobile: "+2348071112233",
    email: "davidwilliams@gmail.com",
    social_handles: [
      { platform: "Twitter", url: "https://twitter.com/davidwilliams" },
      { platform: "Kaggle", url: "https://kaggle.com/davidwilliams" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/davidwilliams" },
    ],
  },
  {
    name: "Sophia Davis",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    dob: "09/09/1996",
    homeAddress: "234 Maple Avenue, Boston, USA",
    officeAddress: "567 Development Street, Boston, USA",
    contact: "+2348056788899",
    mobile: "+2348056788899",
    email: "sophiadavis@gmail.com",
    social_handles: [
      { platform: "GitHub", url: "https://github.com/sophiadavis" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/sophiadavis" },
      { platform: "Twitter", url: "https://twitter.com/sophiadavis" },
    ],
  },
];


export const tabs=[
{label:'Personal Information', value:'personal information', component:PersonalInformation},
{label:'Account Information', value:'account information', component:AccountInformation},
{label:'Business Information', value:'business information', component:BusinessInformation},
]

