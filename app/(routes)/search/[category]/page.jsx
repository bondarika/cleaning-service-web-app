"use client"
import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState } from 'react'

function BusinessByCategory({params}) {

    const [businessList,setBusinessList]=useState([]);
    useEffect(()=>{
        console.log(decodeURIComponent(params));
        params&&getBusinessList()
    },[params]);

    const getBusinessList=()=>{
        GlobalApi.getBusinessByCategory(
          decodeURIComponent(params.category)
        ).then((resp) => {
          setBusinessList(resp?.businessLists);
        });
    }

  return (
    <div>
      <BusinessList
        title={decodeURIComponent(params.category)}
        businessList={businessList}
      />
    </div>
  );
}

export default BusinessByCategory