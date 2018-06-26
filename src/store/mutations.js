import * as types from './mutation-types'

export default {
  [types.VIEW_ARTICLE] ( state,preload){
    state.articleId = preload;
  }
}
