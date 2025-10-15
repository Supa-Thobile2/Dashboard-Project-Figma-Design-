import {FaSearch, FaClock, FaShoppingCart, FaDollarSign, FaRegClock, FaTimes, FaMoneyBill,FaBell, FaUser, FaChevronDown, FaCalendar, FaComment, FaCog, FaSignOutAlt, FaCheck} from 'react-icons/fa'
import { BsKanban } from 'react-icons/bs'
import image from '../assets/react.svg'
import { FaBriefcase, FaCartShopping, FaChartBar, FaRegRegistered } from 'react-icons/fa6'


export const overViewData =[
    {
        icon: <FaShoppingCart/>,
        heading: 'Monthly Sales',
        subText: 1234,
        subPer: 12
    },
      {
        icon: <FaDollarSign/>,
        heading: 'Return',
        subText: 956,
        subPer: 5
    },
      {
        icon: <FaRegClock/>,
        heading: 'Total Revenue',
        subText: 10566.01,
        subPer: 35
    },
    
    
      {
        icon: <FaDollarSign/>,
        heading: 'Marketing',
        subText: 5566.01,
        subPer: 15
    },

]

export const transactionHistoryData =[
      {
        icon: <FaCheck/>,
        heading: 'Payment from #"1099"',
        subText: 'Dec 2024, ',
        subText2:'04:00 PM',
        subPer: 421
    },
       {
        icon: <FaClock/>,
        heading: 'Payment from #"1099"',
        subText: 'Dec 2024, ',
        subText2:'04:00 PM',
        subPer: 421
    },
       {
        icon: <FaTimes/>,
        heading: 'Payment from #"1099"',
        subText: 'Dec 2024, ',
        subText2:'04:00 PM',
        subPer: 421
    },
    

]

export const bestSellData =[
      {
        image: 'icon',
        product: '',
        Icon: '...',
        subPer: 'percent',
        brand: 'ds',
        stock:'100',
        sales: '1234',
        price: '123'
    },
       {
        image: 'icon',
        product: 'heading',
        Icon: '...',
        subPer: 'percent',
        brand: 'ds',
        stock:'100',
        sales: '1234',
        price: '123'
    },
       {
        image: 'icon',
        product: 'heading',
        Icon: '...',
        subPer: 'percent',
        brand: 'ds',
        stock:'100',
        sales: '1234',
        price: '123'
    },
]

export const recentProjectsData =[
    {
        id: 1,
        title:'Hiphonic',
        image: '...',
        text: 'Progress',
        
        numPer: 55,
        spanText: '8/15',
        icon: FaShoppingCart

       

    },
      {
        id: 2,
        title:'SEO Analytics',
        image: '...',
        text: 'Progress',
        
        numPer: 30,
        spanText: '8/40',
        icon: FaRegClock

       

    },
      {
        id: 3,
        title:'Dibhub App',
        image: '...',
        text: 'Progress',
        
        numPer: 89,
        spanText: '40/55',
        icon: FaDollarSign

       

    },
  
]

export const TaskSummary =[
    {
        image:'images',
        title:'Projects',
        value:40
    },

     {
        image:'images',
        title:'Assigned',
        value:79
    },

     {
        image:'images',
        title:'Closed',
        value:89
    }

]

export const MessageData = [
    {
        img: 'image',
        messageHead: 'Andrea Viola',
        subtext: 'Hi!, How are you today?',
        date: '8:30'


    },

     {
        img: 'image',
        messageHead: 'Francesco Long',
        subtext: 'Hi @Angel, I hope you are doing well  ',
        date: '07:00'


    },

     {
        img: 'image',
        messageHead: 'Alexandra Michu',
        subtext: 'Hi, How are you today?',
        date: '23'


    }
]

export const analyticsData =[
    {
        header: 'View our ADs',
        amount: 40.55,
        per: 59,
        icon: <FaShoppingCart/>

    },
        {
        header: 'Comment on our AD',
        amount: 40.55,
        per: 59

    },
        {
        header: 'Create an account',
        amount: 40.55,
        per: 59

    },
        {
        header: 'Other platforms',
        amount: 40.55,
        per: 59

    },
]

export const TaskData =[
{
    para:'Create userflow for Hisphonic Application Design ',
    title: 'In Review',
    icon: 'image'

},
{
    para:'Homepage Design for DibHub Application',
    title: 'In Progress',
    icon: 'image'

}
]

export const toDoData =[
    {
        heading: 'Implement Login',
        subTitle: 'Development',
        description: 'Add Forgot password option when login & send email to reset password...',
        img: 'icon'
    },
      {
        heading: 'Design Review',
        subTitle: 'Design',
        img: 'icon'
    },
      {
        heading: 'Release 1 MVP',
        subTitle: 'Planning',
        description: 'The app should be working and could receive first users',
        img: 'icon'
    },
]

export const inProgress =[
    {
        heading: 'UI Adjustments',
        subText:'Design',
        para:
'You just need to adapt the UI to what you did before'    },

    {
        heading: 'Dashboard Improvements',
        subText:'Design',
        img:'image'   
     },

]
export const inReviewData =[
    {
        heading:'Authentication ',
        subText: 'Development',
        img: 'image',
       
        icon:'icon',
        icon2: 'icon2',

    },
      {
        heading:'Automated Goals ',
        subText: 'Development',
        para:'Analytics delivers actionable, industry-read initiatives',
       
        icon:'icon',
        icon2: 'icon2',

    }
]

export const doneData =[
    {
        heading: 'Design Landing Page',
        subText:'Design',
        para:'Design landing page for Hiphonic pellentesque massa quam',
        icon:'icon',
        icon2:'icon',
    },
       {
        heading: 'Competitor Analysis',
        subText:'Research',
        para:'Design landing page for Hiphonic pellentesque massa quam',
        icon: FaCalendar,
        icon2:FaComment,
    },

    
       {
        heading: 'Set Up project and brief',
        subText:'Planning',
     
        icon:'icon',
        icon2:'icon',
    },

]

// export const KanbanHeadData=[
//     {
//         title: 'To Do',
//         Icon: 'icon',
//         icon: 'icon2'
//     },
//       {
//         title: 'In Progress',
//         Icon: 'icon',
//         icon: 'icon2'
//     },

// ]

export const menuItemsData=[
    {
        listItem: '',
        icon: ''
    },
    {
        listItem: '',
        icon: ''
    },
    {
        listItem: '',
        icon: ''
    },
    {
        listItem: '',
        icon: ''
    },
    {
        listItem: '',
        icon: ''
    },
]

export const mailPlatform =[
    {
        icon: 'image',
        heading: 'Kraken Black',
        description: 'To say thanks for another amazing (but also challenging 😅) year and to celebrate the creative potential of 2022...',
        date:'Dec 29'
    },
    {
        icon: 'image',
        heading: 'Darrel Steward',
        description: 'Tellus mi, id fusce semper. Purus enim, mattis eget ullamcorper adipiscing purus feugiat sit pharetra. Platea auctor morbi...',
        date: 'Dec 27'
    },
    {
        icon: 'image',
        heading: 'Annete Black',
        description: 'Cursus nibh pharetra sit id tortor faucibus velit odio. Id dui praesent aliquet et fermentum amet, nunc, faucibus eu. Sed purus...',
        date: 'Dec 25'
    }
];

export const jobData =[
    {
        title:'UID',
        subTitle:'UI Designer',
        amount: 3837 ,
        per: 32

    },

     {
        title:'UXD',
        subTitle:'UX Designer',
        amount: 2345 ,
        per: 12

    },

     {
        title:'PM',
        subTitle:'Project Manager',
        amount: 1345 ,
        per: 24

    }
]

export const jobListData =[
    {
        title:'UI Designer',
        subTitle:'As a design team that is responsible for delivering final design for our end-users, you will be assigned...',
        icon: 'image',
        subText:'Eight friends work here',
        btnText:'Apply Now'


    },
       {
        title:'UX Designer',
        subTitle:'We are looking to hire a part-time junior to mid-level UI and Digital Designer to work alongside...',
        icon: 'image',
        subText:'Five friends work here',
         btnText:'Apply Now'


    },
       {
        title:'Product Designer',
        subTitle:'Collaborate with product management and engineering to define and implement innovative...',
        icon: 'image',
        subText:'Ten friends work here',  
        btnText:'Apply Now'


    },
    {
        title:'Graphic Designer',
        subTitle:'Contribute to each phase of product design team workflow, from define to measure...',
        icon: 'image',
        subText:'Four friends work here',
        btnText:'Apply Now'
    },
    {
        title:'Lead Product',
        subTitle:'We are looking for a passionate, user-centered UI/UX Designer to join a collaborative and...',
        icon: 'image',
        subText:'Eleven friends work here',
        btnText:'Apply Now'
    },
    {
        title:'Marketing',
        subTitle:'The ideal candidate will have experience in creating mockups to present to teams, collecting...',
        icon: 'image',
        subText:'Six friends work here',
        btnText:'Apply Now'
    },
    
]

export const jobSearchData =[
    {
        title:'User Interface Designer',
        subTitle:'Gojek • Jakarta, Indonesia • 2 days ago',
        span1: 'Full Time',
        span2:'Senior Level',
        btnText:'Apply Now'
    },
       {
        title:'User Experience Design',
        subTitle:'Bukalapak • Jakarta, Indonesia • 2 days ago',
         span1: 'Full Time',
        span2:'Senior Level',
       btnText:'Apply Now'
    },

      {
        title:'Product Designer',
        subTitle:'Shopee • Jakarta, Indonesia • 2 days ago',
         span1: 'Full Time',
        span2:'Senior Level',
       btnText:'Apply Now'
    },
      {
        title:'Graphic Designer',
        subTitle:'Bibit • Jakarta, Indonesia • 2 days ago',
        span1: 'Full Time',
        span2:'Senior Level',
        btnText:'Apply Now'
    },
      {
        title:'Marketing',
        subTitle:'OVO • Jakarta, Indonesia • 2 days ago',
        span1: 'Full Time',
        span2:'Senior Level',
        btnText:'Apply Now'
    },
     
]



export const MenuLinks =[
    {
        title: 'OverView',
        icon: <FaRegRegistered/>,
        
    },
       {
        title:'Analytics',
        icon:<FaChartBar/>,
        
    },
       {
      title: 'Orders',
      icon: <FaCartShopping/> 
    },
       {
      title:'Products',
      icon:<FaBriefcase/>
    },
       {
      title: 'Customer',
      icon:<FaUser/>
    },
]

export const bottomLinks=[
    {
        title: 'Settings',
        icon: <FaCog/>,

    },
    {
        title: 'Log Out',
        icon: <FaSignOutAlt/>
    }
]


export const productsData =[
    {
heading: 'Products',
     product: 'product',
     brand: 'Apple',
     price:'100'

        
          
    },
      {
        heading: 'Brand',
        product: 'product',
        brand: 'Apple',
        price:'100'

          
    },
      {
        heading: 'Stock',
        product: 'product',
        brand: 'Apple',
        price:'100'

          
    },
      {
        heading: 'Sales',
              product: 'product',
        brand: 'Apple',
        price:'100'
        
          
    },
      {
        heading: 'Price',
        product: 'product',
        brand: 'Apple',
        price:'100'

          
    },

    
]














export const inboxData = [
    {
        img:'image', 
        messageHead: 'Kraken',
        subtext: 'To start trading, sign in, click your name and Get Verified from the drop-down menu. Then choose the account type...',
        date : 'Dec 31'
    },
    {
        img:'image',
        messageHead: '99 Design by Vista',
        subtext: 'To start trading, sign in, click your name and Get Verified from the drop-down menu. Then choose the account type...',
        date: 'Dec 29'
    },
    {
        img: 'image',
        messageHead: 'Darrel Steward',
        subtext:'Tellus mi, id fusce semper. Purus enim, mattis eget ullamcorper adipiscing purus feugiat sit pharetra. Platea auctor morbi...',
        date:'Dec 27',
    },
    {
        img:'image',
        messageHead:'Annette Black',
        subtext:'Cursus nibh pharetra sit id tortor faucibus velit odio. Id dui praesent aliquet et fermentum amet, nunc, faucibus eu. Sed purus...',
        date:'Dec 25'
    }

]







