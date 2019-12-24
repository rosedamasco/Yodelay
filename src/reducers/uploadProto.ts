import { uploadProtoAction, UPLOAD_PROTO } from '../actions'
import { setIn } from 'timm'
import { RootState } from '.'

export interface initialStateType {
  proto: any
}


const initialState: initialStateType = {
  proto: {}
}

export const uploadProto: (state: initialStateType, action: uploadProtoAction ) => initialStateType = (
  state = initialState, action) => {
    switch (action.type) {
      case UPLOAD_PROTO: {
        return setIn(state, ["proto"], action.payload)
      }
    }
   return state 
  }

  export const protoSelector: (state: RootState) => object = (state) => state.uploadProto.proto