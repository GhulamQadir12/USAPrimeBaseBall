import { CreateUser, Logoutfunc } from ".";
import { UserAuthenticate } from ".";
import {UserInfoUpdate} from ".";

// export const RegisterUser=async(email,password,navigation) => {
// // export async function RegisterUser(email, password) {
//   try {
//     const res = await CreateUser(email,password,navigation);
//     console.log('User registration successful:', res);
//   } catch (error) {
//     console.error('User registration failed:', error);
//   }
// }

// export const RegisterUser = async (email, password, username, navigation) => {
export const RegisterUser = async (values,navigation,driverSide) => {
  try {
    const res = await CreateUser(values, navigation,driverSide);
    // console.log('User registration successful:', res);
  } catch (error) {
    console.error('User registration failed:', error);
  }
};

export const LoginUser=async(email,password,navigation) => {
  // export async function RegisterUser(email, password) {
    try {
      const res = await UserAuthenticate(email,password,navigation);
      // console.log('User registration successful:', res);
      return res
    } catch (error) {
      console.error('User registration failed:', error);
    }
  }

  export const UserInfoUpdation=async(values) =>{
    try {
      console.log('running from userinfoupdate')

      await UserInfoUpdate(values)
    } catch (error) {
      throw error
    }
  }

  export const Logout =async (navigation)=>{
    try {
      Logoutfunc(navigation)
    } catch (error) {
      throw error
    }
  }