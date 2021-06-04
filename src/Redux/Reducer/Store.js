import { createStore } from "redux";
import rootReducer from './rootReducer'
// 1 kez yazılır ve bir daha dokunulmaz

export default function configureStore() {
  return createStore(rootReducer);
}
