import { createSlice } from '@reduxjs/toolkit'

export const menuStateSlice = createSlice({
    name:'menuState' , 

    initialState : {
        value: ['Home' , false , 'translateX(1000%)' , false  ,    {
            'bank_name':'Nom de votre banque', 
            'beneficiaire_name':'Nom du bénéficiaire', 
            'IBAN':'IBAN', 
            'BIC':'BIC'
         } 
        ],
    }, 

    reducers:{
        
        showState:(state)=>{
            console.log(state.value);
        } ,

        imTransaction:(state)=>{
            state.value[0] = 'Transactions';
        } ,
        imHome:(state)=>{
            state.value[0] = 'Home';
        } ,

        imBankaccount:(state)=>{
            state.value[0] = 'Bankaccount';
        } ,
        imCreditCartPart:(state)=>{
            state.value[0] = 'creditcard';
        } ,
        disTrue:(state)=>{
            state.value[1] = true;
            state.value[2] = 'translateX(0%)'
        } ,
        disFalse:(state)=>{
            state.value[1] = false;
            state.value[2] = 'translateX(1000%)'
            
        } ,
        accStateFalse:(state)=>{
            state.value[3] = false;
            state.value[4].bank_name = 'Nom de votre banque';
            state.value[4].beneficiaire_name = 'Nom du bénéficiaire';
            state.value[4].IBAN = 'IBAN';
            state.value[4].BIC = 'BIC';
            
        } ,
        accStateTrue:(state , action)=>{
            state.value[3] = true;
            state.value[4].bank_name = action.payload.the_bank_name;
            state.value[4].beneficiaire_name = action.payload.the_beneficiaire_name;
            state.value[4].IBAN = action.payload.the_IBAN;
            state.value[4].BIC = action.payload.the_BIC;


        } ,
      

    }
}); 

export const {showState , imTransaction,accStateFalse,accStateTrue ,accStateTrueimTransaction, imBankaccount , imHome , imCreditCartPart , disFalse , disTrue} = menuStateSlice.actions; 
export default menuStateSlice.reducer;