

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { createContext } from 'react';
// import { children } from 'react';



// const apiValue=createContext();

// function AllData() {

//     const [api,setApi]= useState([]);

//     useEffect( ()=>{

//         axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
//         .then((result)=>{
//             setApi(result.data.meals) // بإستخدام ال setApi بنخزن الداتا اللي جايه من ال api في ال api اللي فوق
//         })
        
//     },[] );


//     return (
//         <div>
//             <apiValue.Provider value={api}>
//             {children} 
//             </apiValue.Provider>
//         </div>
//     )
// }

// export default {AllData, apiValue};