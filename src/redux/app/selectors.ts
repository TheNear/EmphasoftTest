import { RootState } from "../../types/redux";

export const getLoadingStatus = (store: RootState): boolean => store.app.isLoading;
