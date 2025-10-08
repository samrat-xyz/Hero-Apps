const getStoreInstalledApp = () => {
  const storeAppSTR = localStorage.getItem("AppList")
  if (storeAppSTR) {
    return JSON.parse(storeAppSTR)
  } else {
    return []
  }
}

const addToStoreDB = (id) => {
  const storedAppData = getStoreInstalledApp()

  if (storedAppData.includes(id)) {
    alert("Already Exist")
  } else {
    storedAppData.push(id)
    localStorage.setItem("AppList", JSON.stringify(storedAppData))
  }
}

const removeFromStore = (id) => {
  const stored = localStorage.getItem("AppList")
  if (!stored) return

  const storedIds = JSON.parse(stored)
  const updatedIds = storedIds.filter(appId => appId !== id)

  localStorage.setItem("AppList", JSON.stringify(updatedIds))
}

export { addToStoreDB, getStoreInstalledApp, removeFromStore }
