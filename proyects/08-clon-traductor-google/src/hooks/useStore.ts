import { State, Action } from "../types"
import { useReducer } from "react"

const initialState: State = {
    fromLanguage: "auto",
    toLanguage: "",
    fromText: "",
    result: "",
    loading: false
  }
  
  function reducer (state: State, action: Action){
  const { type } = action
  
    if(type === 'INTERCHANGE_LANGUAGES'){
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    }
  
    if(type === 'SET_FROM_LANGUAGE'){
      return{
        ...state,
        fromLanguage: action.payload
      }
    }
  
    if(type == 'SET_TO_LANGUAGE'){
      return {
        ...state,
        toLanguage: action.payload
      }
    }
  
    if(type === 'SET_FROM_TEXT'){
      return{
        ...state,
        loading: true,
        fromText: action.payload,
        result: ""
      }
    }
  
    if(type === 'SET_RESULT'){
      return{
        ...state,
        loading: false,
        result: action.payload
      }
    }
  
    return state
  }

  export function useStore (){
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
      }, dispatch]= useReducer(reducer, initialState)

      const interchangeLanguages = (payload) =>{
        dispatch({type: 'INTERCHANGE_LANGUAGES', payload})
      }

      const setFromLanguage = payload =>{
        dispatch({type: 'SET_FROM_LANGUAGE', payload})
      }

      const setToLanguage = payload =>{
        dispatch({type: 'SET_TO_LANGUAGE', payload})
      }

      const setFromText = payload =>{
       dispatch({type: 'SET_FROM_TEXT'}, payload) 
      }

      const SetResult = payload =>{
        dispatch({type: 'SET_RESULT', payload})
      }
    
      return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        interchangeLanguages,
        setFromLanguage,
        setFromText,
        setToLanguage,
        SetResult,
        
      }
  }