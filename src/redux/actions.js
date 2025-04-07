import {ADD_PROFILEDATA} from './constants';
import {ADD_DIRECPROFILEDATA} from './constants';
import {SHOW_PIC} from './constants';
import {FIREBASE_DATA} from './constants';
import { UPDATE_FIREBASE_DATA } from './constants';

export function addProfileData(profile_data) {
  return {
    type: ADD_PROFILEDATA,
    data: profile_data,
  };
}

export function addDirecProfileData(direc_data) {
  return {
    type: ADD_DIRECPROFILEDATA,
    data: direc_data,
  };
}

export function showPic(data) {
  return {
    type: SHOW_PIC,
    data: data,
  };
}

export function getData(data) {
  return {
    type: FIREBASE_DATA,
    data: data,
  };
}

export function updateData(data) {
  return {
    type: UPDATE_FIREBASE_DATA,
    data: data,
  };
}