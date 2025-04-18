
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { userBioType } from "../../utils/types"


const initialState: {
    userProfile: userBioType,
    loading: boolean
    
} = {
    userProfile: {
        userEmail: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
        userImage: "", 
        role: "",
        token: ""
    },
    loading: false
   
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setUserEmailAndTokenAction: (state, action: PayloadAction<{ userEmail: string, token: string }>) => { 
     
            state.userProfile.token = action.payload.token
            state.userProfile.userEmail = action.payload.userEmail
        },
        setUserEmailAction: (state, action: PayloadAction<{userEmail: string}>) => { 
            state.userProfile.userEmail =  action.payload.userEmail
        },
        setUserBioAction: (state, action: PayloadAction <userBioType>) => { 
            state.userProfile = {
             ...state.userProfile,   ...action.payload
            }
        },
        setGlobalAppLoaderAction: (state, action: PayloadAction<boolean>) => { 
            state.loading = action.payload
        }

      
    }
})





export const {setUserEmailAndTokenAction, setUserEmailAction,  setUserBioAction,  setGlobalAppLoaderAction} =  authSlice.actions


export const authReducer = authSlice.reducer