import { types } from "../reducers/types/types";


export const startLoginEmailPassword = (email, password) =>{
  return(dispatch)=>{
    setTimeout(() => {
      dispatch(login(123, "pedro"));
    }, 3500);
  }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
      uid,
      displayName,
    },
})
