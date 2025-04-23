

export interface DashboardSidebarItemType { 
    id: number,
    heading: string,
    active: boolean,
    url: string,
    icon: string,
    activeIcon: string,
    identify: string
}




export interface DashboardSidebarPropType { 
    listArray: DashboardSidebarItemType[],
    toggleIcon?:boolean,
    setToggleIcon?: React.Dispatch<React.SetStateAction<boolean>>
}


export interface userUpdateDataType {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    image: string
}

export interface userEditModalPropType { 
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface addProductModalPropType { 
    showAddProductModal?: boolean,
    setshowAddProductModal: React.Dispatch<React.SetStateAction<boolean>>,
}


export type editProductPropType = {
    showModal?: boolean,
    setshowModal: React.Dispatch<React.SetStateAction<boolean>>,
    selectedProductImage: string, 
    productName: string,
    productQuantity: string,
    productPrice: string,
    productDescription: string,
    productId: string,
    refetchProduct: boolean,
    setRefetchProduct:  React.Dispatch<React.SetStateAction<boolean>>,

}

export type addProductFormType = {
    productImage: string, 
    productName: string,
    productCategory: string, 
    productQuantity: string,
    productSubCategory: string, 
    productPrice: string,
    productDescription: string,
    productGroup: string 
}


export type addEditProductFormType = {
    productImage: string, 
    productName: string,
    productCategory: string, 
    productQuantity: string,
    productSubCategory: string, 
    productPrice: string,
    productDescription: string,
    productGroup: string 
}

export type addProductFormType2 = {
    /*   productImage: string, */
      productName: string,
   /*    productCategory: string, */
      productQuantity: string,
  /*     productSubCategory: string, */
      productPrice: string,
    productDescription: string,
      productMinimumAmount: string
   /*    productGroup: string */
  }


export type productType = {
    productImage: string;
    productName: string;
    productCategory: string;
    productSubCategory: string;
    productQuantity: number;
    productQuantityLeft: number;
    productAmount: number;
    productStatue: boolean;
    productId: string
}

export type editProductType = {
    "product_id": string,
    "title": string,
    "price": number,
    "quantity": number,
    "images": string,
    "description":string,
    "discount": number
}

export type productTypeCompType = {
    img: string ;
    productName: string;
    productCategory: string;
    subCategory: string;
    quantity: number;
    quantityLeft: number;
    amount: number;
    statue: boolean;
    showSingleProductModal: boolean,
    setshowSingleProductModal: React.Dispatch<React.SetStateAction<boolean>>,
    productId: string,
    refetchProduct: boolean,
    setRefetchProduct: React.Dispatch<React.SetStateAction<boolean>>,
    productDescription?: string
 
}

export type cardPropType = {
    heading: string,
    amount: number,
    type: string
}


export type fileUploadPropType = {
    setProductImage: React.Dispatch<React.SetStateAction<string | null>>,
    headingText: string,
    productImage?: string
}
/* dashboard types */

export type dashboardTransactionType = {
    accountName: string,
    accountNumber: string
    amount: number,
    bankName: string,
    statue: string,
    date: any
}

export type topSellingProductCardType = {
    productImg: string,
    productName: string,
    productAddress: string,
    productAmount: number,
    productQuantity: number
}

export type BestSellingProductCardType = {
    productName: string,
    productCategory: string,
    productQuantity: number,
    productQuantityLeft: number,
    productStock: number,
    productRating: number,
    productOrder: number,
    productSales:number,
    productImage: string
}



/* api auth section */
export type apiRegisterType= {
    fullName: string,
    email: string,
    password: string,
}
  
export type apiLoginType = {
    email: string,
    password: string
  }


 export  interface signUpSchema {
    fullName: string,
    email: string,
    password: string
  }
  export type countDownTimeType = {
      resentEmail: boolean,
      setResentEmail:React.Dispatch<React.SetStateAction<boolean>>
  }

  export type userSignInResponseType = {
    email: string,
    fullname: string,
    is_logged_in: boolean,
    phone:string,
    referral_code:string,
    role:string,
    _id: string,
    token: string
  }

export type EmailNotVerifiedModalType = {
    showVerifyEmailModel: boolean
    setShowVerifyEmailModel: React.Dispatch<React.SetStateAction<boolean>>,
    userEmail: string,
    userToken: string
}

export type GooglePlacesAutocompleteCompPropType = {
    location: {
        geometry: {
            lg: number | null,
        lat: number | null
        }
        desc: string,
      
    },

    /* 
    React.Dispatch<React.SetStateAction<{
    geometry: {
        lat: null;
        lg: null;
    };
    desc: string;
}>>
    
    */
    setLocation: React.Dispatch<React.SetStateAction<{
        geometry: {
            lg: number | null,
        lat: number | null
        }
        desc: string
    }>>,
    googleLocationModal: boolean,
    setGoogleLocationModal: React.Dispatch<React.SetStateAction<boolean>>,

}

/* store section */

export type resgisterStoreApiType = {
    name: string,
    address: string,
    phone: string,
    description: string,
    location: {
      latitude: number,
          longitude: number,
         address: string
    },
    image: string
}
  

/* store type */

export type storeType =   {
    user: string,
    name: string,
    address: string,
    description: string,
    phone: string,
    image: string,
    store_id: string
}


export type createProductApiType = {
    "store_id": string,
    "title": string,
    "negotiable": boolean,
    "min_price": number | null,
    "price": number,
    "quantity": string,
    "images": [
       string
    ],
    "category": string,
    "subcategory":string,
    "description": string,
    "discount": number,
    "from": string
}



export type editProductApiType = {
    "product_id": string,
    "title": string,
    "price":number,
    "quantity": number | null,
    "images": [
       string
    ],
    "category": string,
    "subcategory":string,
    "description": string,
    "discount": number
}

export type homeCardPropType = {
    cardHeading : string,
    cardDescritption: string,
    cardButtonText : string,
    cardButtonColor : string,
    cardButtonTedxtColor: string,
    cardImg: string,
    cardSubHeading: string
}


/* 

*/
export type HomeAccordionCompPropType = {
    open: number,
    toggle: (index:any) => void,
    title: string,
    desc: string,
    index: number
}

export type HeaderPropType = {
    heading: string;
    description: string;
    adminType: string;
}
  

export type  registerStoreFormType =  {
    storeName: string,
    storeOwner: string,
    phoneNumber: string,
    storeImage: string,
    storeAddress: string
} 
  
export type userBioType = {
    userEmail: string,
    token: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    userImage: string,
    role: string
}


export type bankType = {
    name: string,
code: string
}
export type bankListType = bankType[]

export type vendorBankDetailsType = {
    accountName: string;
    accountNumber: string;
    bankName: string;
    bankCode: string;
    id: string;
  }[]


export type  walletHistoryType = {
    amount: number,
    narration: string,
    transactionType: string,
    date: string,
    transactionId: string,
    transactionStatus: boolean
}[]
  

export type userType = {
    name: string,
    role: "user" | "admin"
}
export type initialAppStateType = {
    isAuthenticated: boolean,
    isLoading: boolean,
    user: userType  | null
}

export type checkAuthType = {
    isAuthenticated: boolean,
    user: userType,
    children: React.ReactNode
}


export type authFormData = {
    userName?: string,
    email: string,
    password: string
}

export type formType = {
    name: string,
    label: string,
    placeholder: string,
    componentType: string,
    type: string,
    option?: string[]
}



export type commonFormType = {
    formControls: formType[],
    formData: authFormData,
    setFormData: React.Dispatch<React.SetStateAction<authFormData>>,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    buttonText: string
}