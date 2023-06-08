const mockCompanies = [
  {
    id: 1,
    name: "Factory Name1",
    location: "Chonburi",
    nationality: "Thai Company",
    flag: "/images/thaiflag.png",
    thumbnail: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    image1:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image2:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image3:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image4:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum commodi fugiat id eius consequatur optio atque quae veniam, expedita, voluptatibus aliquid in. Nesciunt saepe, tempora incidunt porro error fugiat.",
    website: "https://google.com",
    facebook: "https://facebook.com",
    line: "abc",
  },
  {
    id: 2,
    name: "Factory Name2",
    location: "Chonburi",
    nationality: "Thai Company",
    flag: "/images/thaiflag.png",
    thumbnail: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    image1:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image2:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image3:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image4: null,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum commodi fugiat id eius consequatur optio atque quae veniam, expedita, voluptatibus aliquid in. Nesciunt saepe, tempora incidunt porro error fugiat.",
    website: null,
    facebook: "https://facebook.com",
    line: null,
  },
  {
    id: 3,
    name: "Factory Name3",
    location: "Chonburi",
    nationality: "Thai Company",
    flag: "/images/thaiflag.png",
    thumbnail: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    image1:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image2:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image3:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image4:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum commodi fugiat id eius consequatur optio atque quae veniam, expedita, voluptatibus aliquid in. Nesciunt saepe, tempora incidunt porro error fugiat.",
    website: "https://google.com",
    facebook: "https://facebook.com",
    line: "ndl",
  },
  {
    id: 4,
    name: "Factory Name4",
    location: "Chonburi",
    nationality: "Thai Company",
    flag: "/images/thaiflag.png",
    thumbnail: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    image1:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image2:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image3:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image4:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum commodi fugiat id eius consequatur optio atque quae veniam, expedita, voluptatibus aliquid in. Nesciunt saepe, tempora incidunt porro error fugiat.",
    website: "https://google.com",
    facebook: null,
    line: null,
  },
  {
    id: 5,
    name: "Factory Name5",
    location: "Chonburi",
    nationality: "Thai Company",
    flag: "/images/thaiflag.png",
    thumbnail: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    image1:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image2:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image3:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image4:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum commodi fugiat id eius consequatur optio atque quae veniam, expedita, voluptatibus aliquid in. Nesciunt saepe, tempora incidunt porro error fugiat.",
    website: "https://google.com",
    facebook: "https://facebook.com",
    line: null,
  },
  {
    id: 6,
    name: "Factory Name6",
    location: "Chonburi",
    nationality: "Thai Company",

    flag: "/images/thaiflag.png",
    thumbnail: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    image1:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image2:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image3:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image4:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum commodi fugiat id eius consequatur optio atque quae veniam, expedita, voluptatibus aliquid in. Nesciunt saepe, tempora incidunt porro error fugiat.",
    website: "https://google.com",
    facebook: "https://facebook.com",
    line: null,
  },
];
const mockMachines = [
  {
    id: 1,
    name: "Machine 1",
    location: "Chonburi",
    nationality: "Thai Company",
    flag: "/images/thaiflag.png",
    thumbnail: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    image1:
      "https://ravimachines.com/wp-content/uploads/2016/07/milling-machine-5-scaled.jpg",
    image2:
      "https://ravimachines.com/wp-content/uploads/2016/07/milling-machine-5-scaled.jpg",
    image4:
      "https://ravimachines.com/wp-content/uploads/2016/07/milling-machine-5-scaled.jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum commodi fugiat id eius consequatur optio atque quae veniam, expedita, voluptatibus aliquid in. Nesciunt saepe, tempora incidunt porro error fugiat.",
    website: "https://google.com",
    facebook: "https://facebook.com",
    line: "abc",
  },
  {
    id: 2,
    name: "Machine 2",
    location: "Chonburi",
    nationality: "Thai Company",
    flag: "/images/thaiflag.png",
    thumbnail: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    image1:
      "https://ravimachines.com/wp-content/uploads/2016/07/milling-machine-5-scaled.jpg",
    image2:
      "https://ravimachines.com/wp-content/uploads/2016/07/milling-machine-5-scaled.jpg",
    image3:
      "https://ravimachines.com/wp-content/uploads/2016/07/milling-machine-5-scaled.jpg",
    image4: null,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum commodi fugiat id eius consequatur optio atque quae veniam, expedita, voluptatibus aliquid in. Nesciunt saepe, tempora incidunt porro error fugiat.",
    website: null,
    facebook: "https://facebook.com",
    line: null,
  },
  {
    id: 3,
    name: "Machine 3",
    location: "Chonburi",
    nationality: "Thai Company",
    flag: "/images/thaiflag.png",
    thumbnail: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    image1:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image2:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image3:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image4:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum commodi fugiat id eius consequatur optio atque quae veniam, expedita, voluptatibus aliquid in. Nesciunt saepe, tempora incidunt porro error fugiat.",
    website: "https://google.com",
    facebook: "https://facebook.com",
    line: "ndl",
  },
  {
    id: 4,
    name: "Machine 4",
    location: "Chonburi",
    nationality: "Thai Company",
    flag: "/images/thaiflag.png",
    thumbnail: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    image1:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image2:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image3:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image4:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum commodi fugiat id eius consequatur optio atque quae veniam, expedita, voluptatibus aliquid in. Nesciunt saepe, tempora incidunt porro error fugiat.",
    website: "https://google.com",
    facebook: null,
    line: null,
  },
  {
    id: 5,
    name: "Machine 5",
    location: "Chonburi",
    nationality: "Thai Company",
    flag: "/images/thaiflag.png",
    thumbnail: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    image1:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image2:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image3:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image4:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum commodi fugiat id eius consequatur optio atque quae veniam, expedita, voluptatibus aliquid in. Nesciunt saepe, tempora incidunt porro error fugiat.",
    website: "https://google.com",
    facebook: "https://facebook.com",
    line: null,
  },
  {
    id: 6,
    name: "Machine 6",
    location: "Chonburi",
    nationality: "Thai Company",

    flag: "/images/thaiflag.png",
    thumbnail: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    image1:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image2:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image3:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    image4:
      "https://industrytoday.com/wp-content/uploads/2021/04/nextgen-factory-analytics-optimizes-inventory-levels-prevents-late-penalties-and-frees-up-excess-capital-tied-up-in-static-inventory-image009.jpg",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum commodi fugiat id eius consequatur optio atque quae veniam, expedita, voluptatibus aliquid in. Nesciunt saepe, tempora incidunt porro error fugiat.",
    website: "https://google.com",
    facebook: "https://facebook.com",
    line: null,
  },
];

export default { mockCompanies, mockMachines };
