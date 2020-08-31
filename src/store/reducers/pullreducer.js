const InitState={
    PullError:null,
    user:null
  }
  
  const pullReducer=(state=InitState,action)=>{
      switch(action.type){
        case "ADD_PULL_SUCCESS":
            return {
                PullError:null,
                user:action.userId
            };
        case "ADD_PULL_FAIL":
            return state;
            case "ADD_VOTE_SUCCESS":
                return state;
            case "ADD_VOTE_FAIL":
                return state;
        default:
        return state;
      }
  }
  export default pullReducer;
  