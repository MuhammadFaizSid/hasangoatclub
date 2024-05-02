import { get, update, ref} from 'firebase/database'
import { db } from '@/app/firebase'


export const getProduct = async (params) => {
  const url = `products${params?.id ? '/' + params.id : ''}`; // Construct URL

  try {
    const productsRef = ref(db, url)
    const snapshot = await get(productsRef); // Fetch data with await
    if (params?.id) {
      const data = snapshot.val();

      if (data) {
        return { data_found: true, server_error: false, data: { ...data, id: params.id }, };
      }
      else {
        return { data_found: false, server_error: false, data:[] };
      }
    }
    else {
      if (snapshot.exists()) {


        const productsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data,
        }));

        if (params?.category) {

          const filteredData = productsArray.filter(item => item.category === params.category);

          if (filteredData.length === 0) {
            return { data_found: false, server_error: false, data:[] };
          }
          else {
            return { data_found: true, server_error: false, data: filteredData };
          }


        }

        else {

          return { data_found: true, server_error: false, data: productsArray };
        }
      } else {
        return { data_found: false, server_error: false, data:[] };
      }
    }

  } catch (error) {
    return { data_found: false, server_error: true, error: error };
  }
};

export const updateData = async (data, path) => {
  try {
    const nodeRef = ref(db, path);
    await update(nodeRef, data);
    return {update_success: true} // Optional success message
  } catch (error) {
    return {update_success: false}    // Handle errors appropriately, e.g., display error messages to the user
  }
};
