// import "companies.css";
import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import CompanyDetails from './CompanyDetails';


export default function Companies(){

    const [companies, setCompanies] = useState([]);
    const [inputValue, setValue] = useState();
    const [selectedCompany, setSelected] = useState();
  
    const key = 'Ojc1NzQ3Y2RhODVkNDc2ZDBiMTFhOWU0NjYwOGE4YWEx';

    useEffect(()=>{

        (async function loadCompanies(){
            try{
               const response = await fetch(`https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=${key}`);
               if(!response.ok){
                   throw new Error(response.status);
               }
               const data = (await response.json());
               setCompanies(data.companies);
               console.log(companies);
             
            }
            catch(err){
                console.error(err);
            }
       
        }());

    },[]);
    console.log(companies);
    
      
    function getList(){
        if(companies.length> 0){
            return  (  
                <div>
                    <input list = "companies" onChange={(e)=>{setValue(e.target.value)}}/>
                    <datalist id = "companies">
                        {companies.map(company=>
                        <option value = {company.ticker} key={company.id}/>
                        )}
                    </datalist>
                   
                </div>
             )
        }
        return null;
       
    }
    const handleClick = (e)=>{
        e.preventDefault();
        setSelected(inputValue);
    }
    return(
        <>
          { getList() }
          <button onClick={handleClick}>Update</button>
            <CompanyDetails company = {selectedCompany} />
       </> 
   )
}