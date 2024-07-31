'use client'; 

import { useState } from 'react';

const CategoryTabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const optns = [
    { value: "All", label: 'All' },
    { value: "Other", label: 'Other' },
    { value: "By Author", label: 'By Author' },
    { value: "Vrat", label: 'Vrat'},
    { value: "Shiv Shakti", label: 'Shiv Shakti' },
    { value: "Shree Hari", label: 'Shree Hari' },
    { value: "Ekadashi", label: 'Ekadashi' },
    { value: "Astrology", label: 'Astrology' },
    { value: "Festival", label: 'Festival'},
    { value: "Jayanti", label: 'Jayanti' },

];

const toggleTab = async (datas, index) => {



  if (datas == 'All') {
       setCategories("")
      const data = {
          keyword: filterSearch,
          category: 'All',
          changeCate: '',
          page: page,
      }
    //   fetch blog API
    let posts = [];
  try {
    const response = await fetch('https://apis.sanatanjyoti.com/article/get_blogs?category=All&categoryName=&keyword=&articleType=PUBLISH&isDraftBlog=false&festivalStatus=true&status=true&page=0&size=5');
    const result = await response.json();
    posts = result.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }


  } else {
       setCategories(datas)
      const data = {
          keyword: filterSearch,
          category: 'All',
          changeCate: datas,
          page: page,
      }
    //   fetch blog API


  }



};

  return (
    <div className="container">
      <div className="bloc-tabs">
            {
                optns?.map((data, index) => {
                    return <>
                        <button
                            className={toggleState === index + 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(data.value, index + 1)}
                        >
                            {data.label}
                        </button>
                    </>
                })
            }
      </div>
    </div>
  );
};

export default CategoryTabs;
