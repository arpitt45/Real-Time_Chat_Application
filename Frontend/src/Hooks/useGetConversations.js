import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect( async()=> {
    const getConversations = async () =>
        setLoading(true)
        try {
            const res = await fetch ('/api/users');
            const data = res.json();
            if (data.error) {
                throw new Error(data.error)
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
  },[]);
}

export default useGetConversations