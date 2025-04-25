
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { userBioType } from "../../utils/types"


const initialState: {
    userProfile: userBioType,
    loading: boolean,
    isAuthenticated: boolean
    
} = {
    userProfile: {
       userEmail: "",
    token: "",
    phoneNumber: "",
    fullName: "",
    role: "",
    url: "",
    status: ""
    },
    loading: false,
    isAuthenticated: false
   
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
            console.log("set user bio ran")
            
            state.userProfile = {
                ...state.userProfile,
            ...action.payload
            }
        },
        setGlobalAppLoaderAction: (state, action: PayloadAction<boolean>) => { 
            state.loading = action.payload
        },
        setIsAuthenticated: (state, action: PayloadAction<boolean>) => { 
          state.isAuthenticated = action.payload
        }

      
    }
})





export const { setUserEmailAndTokenAction, setUserEmailAction, setUserBioAction, setGlobalAppLoaderAction,
    setIsAuthenticated
} =  authSlice.actions


export const authReducer = authSlice.reducer