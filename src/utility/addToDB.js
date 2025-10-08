const getStoreInstalledApp = () =>{
    const storeAppSTR = localStorage.getItem("AppList")
    if(storeAppSTR){
        const storedAppData = JSON.parse(storeAppSTR);
        return storedAppData
    }else{
        return []
    }
}

const addToStoreDB = (id) =>{
    const storedAppData = getStoreInstalledApp()

    if(storedAppData.includes(id)){
        alert("Already Exist")
    }else{
        storedAppData.push(id)
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("AppList",data)
    }
}

export {addToStoreDB,getStoreInstalledApp}