export const Addpull=(title,element,userId)=>{
    return (dispatch,getstate,{getFirebase,getFirestore})=>{
      const firestore=getFirestore();
      firestore.collection("pull").doc(userId).set({
        userId:userId,
        title:title,
        pull:element,
  }).then(()=>{
    firestore.collection("user").doc(userId).set({
        pull:title
    })
  }).then(()=>{
    dispatch({type:"ADD_PULL_SUCCESS",userId:userId})
  }).catch((err)=>{
    dispatch({type:"ADD_PULL_FAIL",err})
  })
    }
  }
  

  export const Addvote=(vote,userId)=>{
    return (dispatch,getstate,{getFirebase,getFirestore})=>{
      const firestore=getFirestore();
      firestore.collection("pull").doc(userId).update({
        [vote]:firestore.FieldValue.increment(1)
  }).then(()=>{
    dispatch({type:"ADD_VOTE_SUCCESS"})
  }).catch((err)=>{
    dispatch({type:"ADD_VOTE_FAIL",err})
  })
    }
  }
  