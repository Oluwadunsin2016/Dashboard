import { MdHome,MdContacts,MdNotifications } from "react-icons/md";
import { FaUsers} from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import PersonalInformation from "../components/PersonalInformation";
import IdentityVerification from "../components/IdentityVerification";
import BusinessInformation from "../components/BusinessInformation";

export const services = [
  {
    label: "Electric Car",
    value: "electric_car",
    image: "https://m.media-amazon.com/images/I/61lwZr22zkL._AC_UF894,1000_QL80_.jpg"
  },
  {
    label: "Cross Border Payment",
    value: "cross_border_payment",
    image: "https://www.nitrobox.com/wp-content/uploads/what-are-payment-service-providers-wiki-article-feature-image.png"
  },
  {
    label: "Credit Card - Workforce CC",
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
    business_sector: [
      { label: "Business Work Email", value: "business.johndoe@gmail.com" },
      { label: "Business WhatsApp Number", value: "+2348141234567" },
      { label: "Business Work Address", value: "789 Commerce Way, Springfield, USA" },
      { label: "Business Closest Bstop", value: "Commerce Street Stop" },
    ],
    work_sector: [
      { label: "Work Email Address", value: "work.johndoe@company.com" },
      { label: "Work Phone Number", value: "+2348149876543" },
      { label: "Office Address", value: "456 Corporate Blvd, Springfield, USA" },
      { label: "Office Bstop", value: "Corporate Blvd Stop" },
    ],
    account_information: [
      { label: "Account Name", value: "John Doe" },
      { label: "Account Number", value: "1234567890" },
      { label: "Card Number", value: "1234 5678 9012 3456 (Visa)" },
      { label: "Payment Apps", value: "Zelle: johndoe@zelle.com, Cash App: $JohnDoe" },
    ],
    identity_verification: [
      { label: "National Identity Card", value: "ID123456789" },
      { label: "Driver's License", value: "DL987654321" },
      { label: "CAC", value: "CAC123456" },
      { label: "BVN", value: "BVN987654321" },
      { label: "Utility Bills", value: "Springfield Power Co." },
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
    business_sector: [
      { label: "Business Work Email", value: "business.janesmith@gmail.com" },
      { label: "Business WhatsApp Number", value: "+2348142345678" },
      { label: "Business Work Address", value: "123 Tech Park, Chicago, USA" },
      { label: "Business Closest Bstop", value: "Tech Park Stop" },
    ],
    work_sector: [
      { label: "Work Email Address", value: "work.janesmith@company.com" },
      { label: "Work Phone Number", value: "+2348148765432" },
      { label: "Office Address", value: "789 Innovation Way, Chicago, USA" },
      { label: "Office Bstop", value: "Innovation Blvd Stop" },
    ],
    account_information: [
      { label: "Account Name", value: "Jane Smith" },
      { label: "Account Number", value: "9876543210" },
      { label: "Card Number", value: "5678 9012 3456 7890 (Mastercard)" },
      { label: "Payment Apps", value: "Venmo: JaneS, Cash App: $JaneSmith" },
    ],
    identity_verification: [
      { label: "National Identity Card", value: "ID987654321" },
      { label: "Driver's License", value: "DL123456789" },
      { label: "CAC", value: "CAC987654" },
      { label: "BVN", value: "BVN123456789" },
      { label: "Utility Bills", value: "Chicago Gas Co." },
    ],
  },
  {
    name: "Michael Brown",
    role: "Marketing Manager",
    image: "https://i.pravatar.cc/150?u=a04258164e29026804d",
    dob: "22/05/1988",
    homeAddress: "789 Pine Street, Austin, USA",
    officeAddress: "123 Marketing Drive, Austin, USA",
    contact: "+2348141238765",
    mobile: "+2348141238765",
    email: "michaelbrown@gmail.com",
    social_handles: [
      { platform: "Facebook", url: "https://facebook.com/michaelbrown" },
      { platform: "Twitter", url: "https://twitter.com/michaelbrown" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/michaelbrown" },
    ],
    business_sector: [
      { label: "Business Work Email", value: "business.michaelbrown@gmail.com" },
      { label: "Business WhatsApp Number", value: "+2348145678901" },
      { label: "Business Work Address", value: "234 Commerce Blvd, Austin, USA" },
      { label: "Business Closest Bstop", value: "Commerce Blvd Stop" },
    ],
    work_sector: [
      { label: "Work Email Address", value: "work.michaelbrown@company.com" },
      { label: "Work Phone Number", value: "+2348143456789" },
      { label: "Office Address", value: "123 Marketing Drive, Austin, USA" },
      { label: "Office Bstop", value: "Marketing Drive Stop" },
    ],
    account_information: [
      { label: "Account Name", value: "Michael Brown" },
      { label: "Account Number", value: "6543210987" },
      { label: "Card Number", value: "3456 7890 1234 5678 (Amex)" },
      { label: "Payment Apps", value: "PayPal: michaelj@gmail.com" },
    ],
    identity_verification: [
      { label: "National Identity Card", value: "ID654321987" },
      { label: "Driver's License", value: "DL567890123" },
      { label: "CAC", value: "CAC654321" },
      { label: "BVN", value: "BVN567890123" },
      { label: "Utility Bills", value: "Austin Energy Co." },
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
    business_sector: [
      { label: "Business Work Email", value: "business.emilyjohnson@gmail.com" },
      { label: "Business WhatsApp Number", value: "+2348145678902" },
      { label: "Business Work Address", value: "234 Marketing Blvd, Houston, USA" },
      { label: "Business Closest Bstop", value: "Marketing Blvd Stop" },
    ],
    work_sector: [
      { label: "Work Email Address", value: "work.emilyjohnson@company.com" },
      { label: "Work Phone Number", value: "+2348143456788" },
      { label: "Office Address", value: "456 Commerce Road, Houston, USA" },
      { label: "Office Bstop", value: "Commerce Road Stop" },
    ],
    account_information: [
      { label: "Account Name", value: "Emily Johnson" },
      { label: "Account Number", value: "1234567890" },
      { label: "Card Number", value: "1234 5678 9012 3456 (Visa)" },
      { label: "Payment Apps", value: "PayPal: emilyj@gmail.com" },
    ],
    identity_verification: [
      { label: "National Identity Card", value: "ID123456789" },
      { label: "Driver's License", value: "DL987654321" },
      { label: "CAC", value: "CAC123456" },
      { label: "BVN", value: "BVN987654321" },
      { label: "Utility Bills", value: "Houston Energy Co." },
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
    business_sector: [
      { label: "Business Work Email", value: "business.davidwilliams@gmail.com" },
      { label: "Business WhatsApp Number", value: "+2348145678903" },
      { label: "Business Work Address", value: "345 Data Blvd, New York, USA" },
      { label: "Business Closest Bstop", value: "Data Blvd Stop" },
    ],
    work_sector: [
      { label: "Work Email Address", value: "work.davidwilliams@company.com" },
      { label: "Work Phone Number", value: "+2348143456787" },
      { label: "Office Address", value: "567 Analytics Drive, New York, USA" },
      { label: "Office Bstop", value: "Analytics Drive Stop" },
    ],
    account_information: [
      { label: "Account Name", value: "David Williams" },
      { label: "Account Number", value: "9876543210" },
      { label: "Card Number", value: "4321 8765 2109 6543 (Mastercard)" },
      { label: "Payment Apps", value: "PayPal: davidw@gmail.com" },
    ],
    identity_verification: [
      { label: "National Identity Card", value: "ID987654321" },
      { label: "Driver's License", value: "DL123456789" },
      { label: "CAC", value: "CAC987654" },
      { label: "BVN", value: "BVN123456789" },
      { label: "Utility Bills", value: "New York Energy Co." },
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
    business_sector: [
      { label: "Business Work Email", value: "business.sophiadavis@gmail.com" },
      { label: "Business WhatsApp Number", value: "+2348145678904" },
      { label: "Business Work Address", value: "678 Dev Blvd, Boston, USA" },
      { label: "Business Closest Bstop", value: "Dev Blvd Stop" },
    ],
    work_sector: [
      { label: "Work Email Address", value: "work.sophiadavis@company.com" },
      { label: "Work Phone Number", value: "+2348143456786" },
      { label: "Office Address", value: "345 Development Street, Boston, USA" },
      { label: "Office Bstop", value: "Development Street Stop" },
    ],
    account_information: [
      { label: "Account Name", value: "Sophia Davis" },
      { label: "Account Number", value: "5678901234" },
      { label: "Card Number", value: "5678 1234 0987 6543 (Discover)" },
      { label: "Payment Apps", value: "PayPal: sophia.d@gmail.com" },
    ],
    identity_verification: [
      { label: "National Identity Card", value: "ID567890123" },
      { label: "Driver's License", value: "DL345678901" },
      { label: "CAC", value: "CAC567890" },
      { label: "BVN", value: "BVN345678901" },
      { label: "Utility Bills", value: "Boston Energy Co." },
    ],
  },
];



export const tabs=[
{label:'Personal Information', value:'personal information', component:PersonalInformation},
{label:'Identity Verification', value:'identity verification', component:IdentityVerification},
{label:'Business Information', value:'business information', component:BusinessInformation},
]

