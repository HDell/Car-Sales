export const buyItem = item => {
    return { type: 'BUY_ITEM', payload: item };
};

export const removeFeature = featureID => {
    return { type: 'REMOVE_FEATURE', payload: featureID };
};
