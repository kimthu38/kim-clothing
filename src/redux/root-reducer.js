import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer } from 'redux-persist';
import directoryReducer from './directory/directory.reducer';
import collectionReducer from './collection/collection.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: collectionReducer
})

export default persistReducer(persistConfig, rootReducer);