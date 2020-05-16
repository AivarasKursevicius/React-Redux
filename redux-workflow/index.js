console.clear();

// People dropping off a from (Action Creator)
const createPolicy = (name, amount) => {
  return { // Action (a form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount : amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name,
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return { 
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect : amountOfMoneyToCollect
    }
  };
};



// Reducers (Departments)
const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM') {
    // we care about this action (FORM)
    return [...oldListOfClaims, action.payload];
  }
  
  // we dont't care the action (form!!)
 return oldListOfClaims;
} 


const accounting = (bagOfMoney = 100, action) => {
   if(action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  } 
  return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY'){
      return [...listOfPolicies, action.payload.name];
     } else if(action.type === 'DELETE_POLICY'){
       return listOfPolicies.filter(name => name != action.payload.name);
     }
  return listOfPolicies;
}

const {createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Luke', 50));
store.dispatch(createPolicy('Ben', 10));
store.dispatch(createPolicy('Peter', 70));

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Luke', 30));

store.dispatch(deletePolicy('Ben'));

console.log(store.getState());
