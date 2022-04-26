import { useEffect, useState } from "react";

const useServiceDetails =(serviceId) => {
    const [service, setService] = useState({});
    
    useEffect(() => {
        const url = `https://afternoon-inlet-05262.herokuapp.com/service/${serviceId}`
        fetch(url)
             .then(res => res.json())
             .then(data => {
                  setService(data)
                //   console.log(data)
             });
   }, [serviceId])

   return [service]
}

export default useServiceDetails;