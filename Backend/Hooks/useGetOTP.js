const useGetOTP = () => {
    return Math.floor(Math.random()*9000 + 1000); 
}

export default useGetOTP;