const getConfig = () => ({
    headers:{
        Authorization: `Bearer ${localStorage.getItem('Token')}`
    }
}
    
)

export default getConfig