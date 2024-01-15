import { create } from "zustand";
import { useProducts } from "./useProducts";

export const useQuantity = create((set) => {

    return {
        quantityModal: false,
        currentIndex: 0,
        currentQuantity: 0,
        productsInCard: useProducts.getState().productsInCard,
        getCurrentQuantity: (id) => set((state) => {
            state.showQuantityModal();

            const currentQuantity = state.productsInCard.filter((_, index) => index === id);

            console.log(stateproductsInCard);

            return {
                currentIndex: id,
                currentQuantity: currentQuantity[0].quantity,
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
    }
})