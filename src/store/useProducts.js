import { create } from "zustand";
import { snacks } from './data';


export const useProducts = create((set) => {
    return {
        products: snacks,
        productDetails: {},
        productsInCard: [],
        quantity: 1,
        observationModal: false,
        quantityModal: false,
        observation: {
            value: '',
            confirmValue: '',
        },
        total: 0,
        toastValue: false,
        currentIndex: 0,
        currentQuantity: 0,
        setAnimtedToast: (value) => set(() => {
            return {
                toastValue: value,
            }
        }),
        getTotal: () => set((state) => {
            let total = 0;
            state.productsInCard.forEach((product) => {
                total += product.price * product.quantity;
            });

            return {
                total: total,
            }
        }),
        getProductDetails: (id) => set((state) => {
            return {
                productDetails: { ...state.products.filter((product) => product.id === id)[0] },
            }
        }),
        decrementQuantity: () => set((state) => {
            const minimumQuantity = 1;

            if (state.quantity === minimumQuantity) {
                return {
                    quantity: minimumQuantity,
                }
            } else {
                return {
                    quantity: state.quantity - 1,
                }
            }
        }),
        addQuantity: (quantity) => set((state) => {
            const minimumQuantity = 1;
            const maximumQuantity = 100;

            const quantityReplace = quantity.replace(/[^0-9]/g, '');
            const convert = Number(quantityReplace)

            if (convert < minimumQuantity) {
                return {
                    quantity: minimumQuantity,
                }
            } else if (convert > maximumQuantity) {
                return {
                    quantity: maximumQuantity,
                }
            } else {
                return {
                    quantity: convert,
                }
            }
        }),
        incrementQuantity: () => set((state) => {
            const maximumQuantity = 100;

            if (state.quantity === maximumQuantity) {
                return {
                    quantity: maximumQuantity,
                }
            } else {
                return {
                    quantity: state.quantity + 1,
                }
            }
        }),
        resetQuantity: () => set(() => {
            return {
                quantity: 1,
            }
        }),
        hideQuantityModal: () => set(() => {
            return {
                quantityModal: false,
            }
        }),
        showQuantityModal: () => set((state) => {
            return {
                quantityModal: true,
            }
        }),
        decrementQuantityModal: () => set((state) => {
            const minimumQuantity = 1;

            if (state.currentQuantity === minimumQuantity) {
                return {
                    currentQuantity: minimumQuantity,
                }
            } else {
                return {
                    currentQuantity: state.currentQuantity - 1,
                }
            }
        }),
        addQuantityModal: (quantity) => set(() => {
            const minimumQuantity = 1;
            const maximumQuantity = 100;

            const quantityReplace = quantity.replace(/[^0-9]/g, '');
            const convert = Number(quantityReplace)

            if (convert < minimumQuantity) {
                return {
                    currentQuantity: minimumQuantity,
                }
            } else if (convert > maximumQuantity) {
                return {
                    currentQuantity: maximumQuantity,
                }
            } else {
                return {
                    currentQuantity: convert,
                }
            }
        }),
        incrementQuantityModal: () => set((state) => {
            const maximumQuantity = 100;

            if (state.currentQuantity === maximumQuantity) {
                return {
                    currentQuantity: maximumQuantity,
                }
            } else {
                return {
                    currentQuantity: state.currentQuantity + 1,
                }
            }
        }),
        getCurrentQuantity: (id) => set((state) => {
            state.showQuantityModal();
            const currentQuantity = state.productsInCard.filter((_, index) => index === id)[0].quantity;

            return {
                currentIndex: id,
                currentQuantity: currentQuantity,
            }
        }),
        confirmQuantity: () => set((state) => {
            state.hideQuantityModal();

            const newQuantity = state.productsInCard.map((product, index) => {
                if (index === state.currentIndex) {
                    return { ...product, quantity: state.currentQuantity }
                }
                return product;
            });

            return {
                productsInCard: [...newQuantity]
            }
        }),
        hideObservationModal: () => set(() => {
            return {
                observationModal: false,
            }
        }),
        showObservationModal: () => set((state) => {
            return {
                observationModal: true,
            }
        }),
        addObservation: (observation) => set((state) => {
            return {
                observation: { ...state.observation, value: observation },
            }
        }),
        cancelObservation: () => set((state) => {
            state.hideObservationModal()

            if (state.observation.confirmValue === '') {
                return {
                    observation: { ...state.observation, value: '' },
                }
            } else {
                return {
                    observation: { ...state.observation, value: state.observation.confirmValue },
                }
            }
        }),
        confirmObservation: () => set((state) => {
            state.hideObservationModal()

            return {
                observation: {
                    ...state.observation,
                    confirmValue: state.observation.value,
                },
            }
        }),
        resetObservation: () => set(() => {
            return {
                observation: {
                    value: '',
                    confirmValue: '',
                },
            }
        }),
        addProductInCard: () => set((state) => {
            state.setAnimtedToast(false);
            setTimeout(() => {

                state.setAnimtedToast(true);
            }, 300);

            return {
                productsInCard: [...state.productsInCard, { ...state.productDetails, quantity: state.quantity, observation: state.observation }],
            }
        }),
        removeItemFromCard: (id) => set((state) => {
            const newCardList = state.productsInCard.filter((_, index) => index !== id);

            return {
                productsInCard: [...newCardList]
            }
        }),
    }
})