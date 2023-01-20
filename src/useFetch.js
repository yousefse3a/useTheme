import React, { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setdata] = useState(null);
  const [isLoaging, setisLoaging] = useState(true);
  const [err, seterr] = useState(null);


  useEffect(() => {
    fetch(url)
      .then(res => {
        if(!res.ok){
          throw Error('flkvcm');
        }
        setisLoaging(true);
        seterr(null);
        return res.json()
      })
      .then(data => {
        setdata(data);
        setisLoaging(false)
      })
      .catch(err => {
        seterr('efnds');
        setisLoaging(false)
      })

  }, [])


  return [data, isLoaging, err];
}
