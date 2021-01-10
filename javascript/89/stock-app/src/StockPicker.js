import React, {useEffect, useState} from 'react';

export default function StockPicker(){
    const key = 'Ojc1NzQ3Y2RhODVkNDc2ZDBiMTFhOWU0NjYwOGE4YWEx';
    const [companies, setCompanies] = useState([]);
   
    useEffect(()=>{
       
       (async function fetchData(){
        try{
            const response = await fetch(`https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=${key}`);
            if(!response.ok){
                throw new Error(response.status);
            }
            const data = await response.json();
            setCompanies(data.companies);
           // console.log(data.companies);
            }
        catch(err){
            console.error(err)
        }
        }())
        console.log(companies);
    },[])


    const displayData = (companies)=>{
        // return companies.length > 0 ? companies.map((company)=>{
        //     <div>
        //         {company.id}
        //         {company.ticker}
        //         {company.name} 
        //     </div>
        // }) : null
        if(companies.length > 0){
            return companies.map((company)=>{
                    <div>
                        {company.id}
                        {company.ticker}
                        {company.name} 
                    </div>
            })
        }
        return null;

    
    }
    
    return(
        <>
            {displayData(companies)}
        </>
    )
}