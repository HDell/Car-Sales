const initialState = {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: [] //will have additionalFeatures pushed onto it
};

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_ITEM':
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, state.additionalFeatures.filter(feature => feature.id === action.payload)]
                }
            };
        case 'REMOVE_FEATURE':
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(feature => feature.id !== action.payload)
                }
            };
        default:
            return state;
    }
};
