const productItems = [{
  id: 1,
  image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a21c2bd10db44f1873dae9801719513_9366/Ultra_4DFWD_Shoes_Green_GY8389_01_standard.jpg",
  alt: "Image 1",
  pricing: 999,
  title: "Adidas Ultra 4DFWD",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},

{
  id: 2,
  image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6dd32dd3f72407084c0af120100820d_9366/Forum_Bonega_Shoes_Beige_IF4829_01_standard.jpg",
  alt: "Image 2",
  pricing: 459,
  title: "Adidas Forum Bonega",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},
{
  id: 3,
  image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c586f7bbc3477f8165af1f00f70356_9366/Ultraboost_22_Shoes_Blue_HP9933_01_standard.jpg",
  alt: "Image 3",
  pricing: 869,
  title: "Adidas Ultraboost 22",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},
{
  id: 4,
  image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3cbce0e235aa4e1d93aaad2000615c90_9366/TERREX_AX4_PRIMEGREEN_HIKING_SHOES_Black_FY9673_01_standard.jpg",
  alt: "Image 1",
  pricing: 499,
  title: "Adidas Terrex AX4",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},
{
  id: 5,
  image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/w_383,c_limit/0de73c76-fbb0-487f-9ec2-103bf0629dfa/air-zoom-pegasus-39-road-running-shoes-H2wpv0.png",
  alt: "Image 5",
  pricing: 579,
  title: "Nike Air Zoom Pegasus 39 Premium",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},

{
  id: 6,
  image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3249465b-a198-4399-8373-741d17da9935/air-jordan-1-retro-high-og-shoes-a7Zzxm.png",
  alt: "Image 6",
  pricing: 729,
  title: "Nike Air Jordan 1 Retro High OG",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},
{
  id: 7,
  image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7d9880b-2447-44e9-ac9f-b054cb7b7fe1/air-max-penny-shoes-S7vvF3.png",
  alt: "Image 7",
  pricing: 799,
  title: "Nike Air Max Penny",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},
{
  id: 8,
  image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/24f2f231-3ee6-4b0d-a5db-a48dabd61396/air-max-flyknit-racer-next-nature-shoes-CCWCCw.png",
  alt: "Image 8",
  pricing: 709,
  title: "Nike Air Max Flyknit Racer Next Nature",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},
{
  id: 9,
  image: "https://cdn.shopify.com/s/files/1/0267/2164/8819/products/216231_BKRD_410x.jpg?v=1653981085",
  alt: "Image 9",
  pricing: 299,
  title: "Skechers Performance GOrun Fast",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},

{
  id: 10,
  image: "https://cdn.shopify.com/s/files/1/0267/2164/8819/products/216223_NVY_410x.jpg?v=1649120779",
  alt: "Image 10",
  pricing: 299,
  title: "Skechers GOwalk Glide-Step Flex",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},
{
  id: 11,
  image: "https://cdn.shopify.com/s/files/1/0267/2164/8819/products/104163_NVCL_1024x1024.jpg?v=1621241230",
  alt: "Image 11",
  pricing: 129,
  title: "Skechers Arch Fit Refine Sport Active",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},
{
  id: 12,
  image: "https://cdn.shopify.com/s/files/1/0267/2164/8819/products/149719_BKWP_600x.jpg?v=1656665065",
  alt: "Image 12",
  pricing: 179,
  title: "Skechers Women Sport Arch Fit",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},
{
  id: 13,
  image: "https://www.fila.com/dw/image/v2/AAEJ_PRD/on/demandware.static/-/Sites-FilaUSACatalogID/default/dwcc43b10c/images/ProductImages/1BM01866_107_01_e.jpg?sw=1334&sh=2000&sm=fit",
  alt: "Image 13",
  pricing: 95,
  title: "Fila Men's MB",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},

{
  id: 14,
  image: "https://www.fila.com/dw/image/v2/AAEJ_PRD/on/demandware.static/-/Sites-FilaUSACatalogID/default/dw69e251b5/images/ProductImages/1JM01689_025_01_e.jpg?sw=523&sh=785&sm=fit",
  alt: "Image 14",
  pricing: 80,
  title: "Fila Men's Oakmont Tr",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},
{
  id: 15,
  image: "https://www.fila.com/dw/image/v2/AAEJ_PRD/on/demandware.static/-/Sites-FilaUSACatalogID/default/dw4d261e09/images/ProductImages/5FM01777_800_01_e.jpg?sw=340&sh=510&sm=fit",
  alt: "Image 15",
  pricing: 75,
  title: "Fila Women's F-14",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},
{
  id: 16,
  image: "https://www.fila.com/dw/image/v2/AAEJ_PRD/on/demandware.static/-/Sites-FilaUSACatalogID/default/dw638de1ce/images/ProductImages/5HM01099_001_01_e.jpg?sw=340&sh=510&sm=fit",
  alt: "Image 16",
  pricing: 100,
  title: "Fila Women's Yak Boots",
  qty: 1,
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur iste aut, itaque dolores quis! Error, itaque numquam culpa nemo quam dignissimos impedit id recusandae quisquam iste veritatis doloremque repellendus?",
  size: {
    L: "USA:7.5, UK:7, EU: 41",
    LM: "USA:8, UK:8, EU: 42",
    XL: "USA:8.5, UK:9, EU: 43",
    XL2: "USA:9, UK:10, EU: 44",
    XXL: "USA:10, UK:11, EU: 45"
  },
},
];

export default productItems;